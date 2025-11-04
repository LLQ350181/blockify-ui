import React from 'react';
import './index.less';

class ScrollableRowDynamic extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.itemRefs = [];
    this.state = {
      showLeft: false,
      showRight: false,
    };
  }

  componentDidMount() {
    const el = this.containerRef.current;
    if (!el) return;

    this.updateButtons();

    this.ro = new ResizeObserver(() => this.updateButtons());
    this.ro.observe(el);

    el.addEventListener('scroll', this.updateButtons);
    window.addEventListener('resize', this.updateButtons);
  }

  componentWillUnmount() {
    const el = this.containerRef.current;
    if (el) el.removeEventListener('scroll', this.updateButtons);
    if (this.ro) this.ro.disconnect();
    window.removeEventListener('resize', this.updateButtons);
  }

  updateButtons = () => {
    const el = this.containerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    this.setState({
      showLeft: scrollLeft > 0,
      showRight: scrollLeft + clientWidth < scrollWidth - 1,
    });
  };

  handleScrollRight = () => {
    const el = this.containerRef.current;
    if (!el) return;
    const items = this.itemRefs;
    const containerRight = el.scrollLeft + el.clientWidth;

    const next = items.find((child) => {
      const left = child.offsetLeft;
      const right = left + child.offsetWidth;
      return right > containerRight + 1;
    });

    if (next) {
      el.scrollTo({ left: next.offsetLeft, behavior: 'smooth' });
    } else {
      el.scrollTo({
        left: el.scrollWidth - el.clientWidth,
        behavior: 'smooth',
      });
    }
  };

  handleScrollLeft = () => {
    const el = this.containerRef.current;
    if (!el) return;
    const items = this.itemRefs;
    const containerLeft = el.scrollLeft;
    const containerWidth = el.clientWidth;

    const prev = [...items].reverse().find((child) => {
      return child.offsetLeft < containerLeft - 1;
    });

    if (!prev) {
      el.scrollTo({ left: 0, behavior: 'smooth' });
      return;
    }

    const prevRight = prev.offsetLeft + prev.offsetWidth;
    const newScroll = Math.max(0, prevRight - containerWidth);

    el.scrollTo({ left: newScroll, behavior: 'smooth' });
  };

  render() {
    const { children, gap = 8, mode = 'both' } = this.props;
    const { showLeft, showRight } = this.state;
    const childrenArray = React.Children.toArray(children);

    const allowScroll = mode === 'scroll' || mode === 'both';
    const showButtons = mode === 'button' || mode === 'both';

    return (
      <div className="scrollable-row-dynamic-outer">
        {/* 左侧按钮始终占位 */}
        <div className="scroll-btn-wrapper left">
          {showButtons && (
            <div
              className={`scroll-btn ${showLeft ? 'active' : 'disabled'}`}
              onClick={showLeft ? this.handleScrollLeft : undefined}
            >
              ◀
            </div>
          )}
        </div>

        <div className="scrollable-row-dynamic-wrapper">
          <div
            className="scrollable-row-dynamic"
            ref={this.containerRef}
            style={{
              gap,
              overflowX: allowScroll ? 'auto' : 'hidden',
            }}
          >
            {childrenArray.map((child, i) => (
              <div
                key={i}
                className="scroll-item"
                ref={(el) => (this.itemRefs[i] = el)}
              >
                {child}
              </div>
            ))}
          </div>
        </div>

        {/* 右侧按钮始终占位 */}
        <div className="scroll-btn-wrapper right">
          {showButtons && (
            <div
              className={`scroll-btn ${showRight ? 'active' : 'disabled'}`}
              onClick={showRight ? this.handleScrollRight : undefined}
            >
              ▶
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ScrollableRowDynamic;
