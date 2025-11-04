import classNames from 'classnames';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';

/**
 * Tooltip props:
 *  title: 提示内容
 *  placement: top | bottom | left | right
 *  trigger: hover | click  （触发方式）
 *  width: number | string  （最大宽度）
 *  visibleCondition: (title, children) => boolean  自定义判断函数
 */
class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false, // 是否显示tooltip
      placement: props.placement || 'top',
      position: { top: 0, left: 0 },
      arrowOffset: { left: 0, top: 0 },
    };
    this.wrapperRef = React.createRef();
    this.tooltipRef = React.createRef();
  }

  componentWillUnmount() {
    this.removeListeners();
    document.removeEventListener('click', this.handleClickOutside);
  }

  // 显示 Tooltip
  showTooltip = () => {
    if (!this.shouldShow()) return;
    this.setState({ visible: true }, () => {
      this.updatePosition();
      window.addEventListener('scroll', this.updatePosition, true);
      window.addEventListener('resize', this.updatePosition);
    });
  };

  // 隐藏 Tooltip
  hideTooltip = () => {
    this.setState({ visible: false }, this.removeListeners);
  };

  // 清除监听
  removeListeners = () => {
    window.removeEventListener('scroll', this.updatePosition, true);
    window.removeEventListener('resize', this.updatePosition);
  };

  // 点击触发时：点击外部关闭 tooltip
  handleClickOutside = (e) => {
    if (
      this.wrapperRef.current &&
      !this.wrapperRef.current.contains(e.target) &&
      this.tooltipRef.current &&
      !this.tooltipRef.current.contains(e.target)
    ) {
      this.hideTooltip();
      document.removeEventListener('click', this.handleClickOutside);
    }
  };

  // 判断是否应显示（支持 visibleCondition）
  shouldShow = () => {
    const { title, visibleCondition } = this.props;
    if (typeof visibleCondition === 'function') {
      return visibleCondition(title, this.props.children);
    }
    // 默认逻辑：有 title 才显示
    return !!title;
  };

  // 更新 Tooltip 位置和箭头偏移
  updatePosition = () => {
    const wrapper = this.wrapperRef.current;
    const tooltip = this.tooltipRef.current;
    if (!wrapper || !tooltip) return;

    const wrapperRect = wrapper.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();

    let newPlacement = this.props.placement || 'top';
    let pos = {};
    let arrowOffset = { left: 0, top: 0 };

    const wrapperCenterX = wrapperRect.left + wrapperRect.width / 2;
    const wrapperCenterY = wrapperRect.top + wrapperRect.height / 2;

    const offset = 8; // tooltip与触发元素的间距

    // 根据placement计算基础位置
    const calcPosition = (placement) => {
      switch (placement) {
        case 'top':
          return {
            top: wrapperRect.top - tooltipRect.height - offset,
            left: wrapperCenterX - tooltipRect.width / 2,
          };
        case 'bottom':
          return {
            top: wrapperRect.bottom + offset,
            left: wrapperCenterX - tooltipRect.width / 2,
          };
        case 'left':
          return {
            top: wrapperCenterY - tooltipRect.height / 2,
            left: wrapperRect.left - tooltipRect.width - offset,
          };
        case 'right':
          return {
            top: wrapperCenterY - tooltipRect.height / 2,
            left: wrapperRect.right + offset,
          };
        default:
          return {};
      }
    };

    pos = calcPosition(newPlacement);

    // 避边处理：检测是否超出窗口，必要时反向显示
    const isOutOfView = (p) =>
      p.top < 0 ||
      p.left < 0 ||
      p.left + tooltipRect.width > window.innerWidth ||
      p.top + tooltipRect.height > window.innerHeight;

    if (isOutOfView(pos)) {
      const opposite = {
        top: 'bottom',
        bottom: 'top',
        left: 'right',
        right: 'left',
      };
      const flipped = opposite[newPlacement];
      const flippedPos = calcPosition(flipped);
      if (!isOutOfView(flippedPos)) {
        newPlacement = flipped;
        pos = flippedPos;
      }
    }

    // 限制边界（上下左右不越界）
    const padding = 4;
    pos.top = Math.max(
      padding,
      Math.min(pos.top, window.innerHeight - tooltipRect.height - padding),
    );
    pos.left = Math.max(
      padding,
      Math.min(pos.left, window.innerWidth - tooltipRect.width - padding),
    );

    // 箭头偏移，使其对齐触发元素中心
    if (['top', 'bottom'].includes(newPlacement)) {
      const arrowLeft = wrapperCenterX - pos.left;
      arrowOffset.left = Math.max(
        8,
        Math.min(arrowLeft, tooltipRect.width - 8),
      );
    } else {
      const arrowTop = wrapperCenterY - pos.top;
      arrowOffset.top = Math.max(8, Math.min(arrowTop, tooltipRect.height - 8));
    }

    this.setState({ placement: newPlacement, position: pos, arrowOffset });
  };

  // 渲染浮层
  renderTooltip() {
    const { title, width } = this.props;
    const { visible, placement, position, arrowOffset } = this.state;

    if (!visible) return null;

    return ReactDOM.createPortal(
      <div
        ref={this.tooltipRef}
        className={classNames('tooltip-box', placement)}
        style={{
          top: position.top + window.scrollY,
          left: position.left + window.scrollX,
          '--arrow-left': `${arrowOffset.left}px`,
          '--arrow-top': `${arrowOffset.top}px`,
          maxWidth: width || 'auto',
          whiteSpace: width ? 'normal' : 'nowrap',
          wordBreak: 'break-word',
        }}
      >
        <div className="tooltip-arrow" />
        <div className="tooltip-content">{title}</div>
      </div>,
      document.body,
    );
  }

  render() {
    const { children, className, style, trigger = 'hover' } = this.props;

    const triggerProps =
      trigger === 'hover'
        ? {
            onMouseEnter: this.showTooltip,
            onMouseLeave: this.hideTooltip,
          }
        : {
            onClick: (e) => {
              e.stopPropagation();
              const nextVisible = !this.state.visible;
              this.setState({ visible: nextVisible }, () => {
                if (nextVisible) {
                  this.updatePosition();
                  document.addEventListener('click', this.handleClickOutside);
                } else {
                  document.removeEventListener(
                    'click',
                    this.handleClickOutside,
                  );
                }
              });
            },
          };

    return (
      <div
        ref={this.wrapperRef}
        className={classNames('tooltip-wrapper', className)}
        style={style}
        {...triggerProps}
      >
        {children}
        {this.renderTooltip()}
      </div>
    );
  }
}

export default Tooltip;
