import React, { useEffect, useRef, useState } from 'react';
import './index.less';

interface ScrollableFixedPageProps {
  children: React.ReactNode;
  itemsPerPage?: number; // 每屏显示几个
  itemWidth?: number; // 每个 item 的宽度
  gap?: number; // 间距
}

const ScrollableFixedPage: React.FC<ScrollableFixedPageProps> = ({
  children,
  itemsPerPage = 3,
  itemWidth = 200,
  gap = 8,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const [maxPage, setMaxPage] = useState(0);

  const childrenArray = React.Children.toArray(children);
  const total = childrenArray.length;

  useEffect(() => {
    // 总页数 = ceil(total / itemsPerPage)
    setMaxPage(Math.ceil(total / itemsPerPage) - 1);
  }, [total, itemsPerPage]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scrollTo = page * (itemWidth + gap) * itemsPerPage;
    el.scrollTo({ left: scrollTo, behavior: 'smooth' });
  }, [page, itemWidth, itemsPerPage, gap]);

  const handlePrev = () => setPage((p) => Math.max(p - 1, 0));
  const handleNext = () => setPage((p) => Math.min(p + 1, maxPage));

  const showLeft = page > 0;
  const showRight = page < maxPage;

  return (
    <div className="scrollable-fixed-page-wrapper">
      {showLeft && (
        <div className="scroll-btn left" onClick={handlePrev}>
          ◀
        </div>
      )}

      <div
        className="scrollable-fixed-page"
        ref={containerRef}
        style={{
          gap,
          scrollBehavior: 'smooth',
        }}
      >
        {childrenArray.map((child, i) => (
          <div
            key={i}
            className="scroll-item"
            style={{ width: itemWidth, flex: '0 0 auto' }}
          >
            {child}
          </div>
        ))}
      </div>

      {showRight && (
        <div className="scroll-btn right" onClick={handleNext}>
          ▶
        </div>
      )}
    </div>
  );
};

export default ScrollableFixedPage;
