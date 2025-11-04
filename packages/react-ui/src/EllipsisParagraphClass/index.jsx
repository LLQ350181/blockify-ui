import classNames from 'classnames';
import React from 'react';
import './index.less';

class EllipsisText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOverflow: false,
      expanded: false,
      myRows: props.ellipsis?.rows || 1,
    };
    this.textRef = React.createRef();
  }

  componentDidMount() {
    this.checkOverflow();
    this.createResizeObserver();

    window.addEventListener('resize', this.handleWindowResize);
  }

  componentDidUpdate(prevProps, prevState) {
    const { children, ellipsis } = this.props;
    const rows = ellipsis?.rows || 1;

    if (prevProps.children !== children || prevProps.ellipsis?.rows !== rows) {
      this.setState({ myRows: rows }, () => this.checkOverflow());
    }
  }

  componentWillUnmount() {
    if (this.observer) this.observer.disconnect();
    window.removeEventListener('resize', this.handleWindowResize);
  }

  handleWindowResize = () => {
    this.checkOverflow();
  };

  createResizeObserver() {
    this.observer = new ResizeObserver(() => this.checkOverflow());
    if (this.textRef.current) {
      this.observer.observe(this.textRef.current);
    }
  }

  checkOverflow = () => {
    const el = this.textRef.current;
    if (!el) return;
    const isOverflow = el.scrollHeight > el.clientHeight + 2; // 防止浮点误差
    this.setState({ isOverflow });
  };

  handleExpand = () => {
    this.setState({ expanded: true, myRows: 999999 });
  };

  handleCollapse = () => {
    const rows = this.props.ellipsis?.rows || 1;
    this.setState({ expanded: false, myRows: rows });
  };

  render() {
    const { children, className, style = {} } = this.props;
    const { isOverflow, expanded, myRows } = this.state;

    return (
      <div className="ellipsis-wrap">
        <span
          ref={this.textRef}
          className={classNames('text', className)}
          style={{
            WebkitLineClamp: myRows,
            ...style,
          }}
        >
          {!expanded && isOverflow && (
            <div
              className={classNames('expand-btn', 'btn')}
              onClick={this.handleExpand}
            >
              展开
            </div>
          )}
          {children}
          {expanded && (
            <div
              className={classNames('collapse-btn', 'btn')}
              onClick={this.handleCollapse}
            >
              收起
            </div>
          )}
        </span>
      </div>
    );
  }
}

export default EllipsisText;
