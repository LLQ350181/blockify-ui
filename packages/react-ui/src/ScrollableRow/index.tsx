import React, { useEffect, useRef, useState } from 'react';
import './index.less';

interface ScrollableRowProps {
  children: React.ReactNode;
  scrollAmount?: number; // 每次滚动距离，默认容器宽度
}

const ScrollableRow: React.FC<ScrollableRowProps> = ({
  children,
  scrollAmount,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showRight, setShowRight] = useState(false);
  const [showLeft, setShowLeft] = useState(false);

  const checkScroll = () => {
    const el = containerRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    setShowLeft(scrollLeft > 0);
    setShowRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  const handleScroll = (direction: 'left' | 'right') => {
    const el = containerRef.current;
    if (!el) return;

    const amount = scrollAmount ?? el.clientWidth; // 默认一屏宽
    const newScroll =
      direction === 'right' ? el.scrollLeft + amount : el.scrollLeft - amount;

    el.scrollTo({
      left: newScroll,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    checkScroll();
    const el = containerRef.current;
    if (!el) return;

    const resizeObserver = new ResizeObserver(checkScroll);
    resizeObserver.observe(el);

    el.addEventListener('scroll', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="scrollable-row-wrapper">
      {showLeft && (
        <div className="scroll-btn left" onClick={() => handleScroll('left')}>
          ◀
        </div>
      )}

      <div className="scrollable-row" ref={containerRef}>
        {children}
      </div>

      {showRight && (
        <div className="scroll-btn right" onClick={() => handleScroll('right')}>
          ▶
        </div>
      )}
    </div>
  );
};

export default ScrollableRow;
