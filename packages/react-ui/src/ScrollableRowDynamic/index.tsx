import React, { useEffect, useRef, useState } from 'react';
import './index.less';

interface ScrollableRowDynamicProps {
  children: React.ReactNode;
  gap?: number;
}

const ScrollableRowDynamic: React.FC<ScrollableRowDynamicProps> = ({
  children,
  gap = 8,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const updateButtons = () => {
    const el = containerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setShowLeft(scrollLeft > 0);
    setShowRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    updateButtons();
    const ro = new ResizeObserver(updateButtons);
    ro.observe(el);
    el.addEventListener('scroll', updateButtons);
    return () => {
      el.removeEventListener('scroll', updateButtons);
      ro.disconnect();
    };
  }, []);

  // 向右（保持原来逻辑）：从第一个右侧被遮挡的元素开始展示（让它成为新屏的第一个）
  const handleScrollRight = () => {
    const el = containerRef.current;
    if (!el) return;
    const items = itemRefs.current;
    const containerRight = el.scrollLeft + el.clientWidth;

    const next = items.find((child) => {
      const left = child.offsetLeft;
      const right = left + child.offsetWidth;
      return right > containerRight + 1; // 包含部分被遮挡的项
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

  // 向左（镜像向右的逻辑）：
  // - 找最后一个其 offsetLeft < containerLeft 的元素 prev（即在左侧被遮挡的最后一项）
  // - 把视口滚到 prev.offsetLeft + prev.offsetWidth - containerWidth，
  //   使 prev 的右边与新视口的右边对齐 -> prev 成为该屏的最后一项
  const handleScrollLeft = () => {
    const el = containerRef.current;
    if (!el) return;
    const items = itemRefs.current;
    const containerLeft = el.scrollLeft;
    const containerWidth = el.clientWidth;

    // 找在左侧（offsetLeft < containerLeft）的最后一个元素（包含部分可见）
    const prev = [...items].reverse().find((child) => {
      return child.offsetLeft < containerLeft - 1;
    });

    if (!prev) {
      el.scrollTo({ left: 0, behavior: 'smooth' });
      return;
    }

    const prevRight = prev.offsetLeft + prev.offsetWidth;
    // 使 prev 的 rightEdge 对齐到新视口的 right -> newScroll = prevRight - containerWidth
    const newScroll = Math.max(0, prevRight - containerWidth);

    el.scrollTo({ left: newScroll, behavior: 'smooth' });
  };

  const childrenArray = React.Children.toArray(children);

  return (
    <div className="scrollable-row-dynamic-wrapper">
      {showLeft && (
        <div className="scroll-btn left" onClick={handleScrollLeft}>
          ◀
        </div>
      )}

      <div
        className="scrollable-row-dynamic"
        style={{ gap }}
        ref={containerRef}
      >
        {childrenArray.map((child, i) => (
          <div
            key={i}
            className="scroll-item"
            ref={(el) => {
              if (el) itemRefs.current[i] = el!;
            }}
          >
            {child}
          </div>
        ))}
      </div>

      {showRight && (
        <div className="scroll-btn right" onClick={handleScrollRight}>
          ▶
        </div>
      )}
    </div>
  );
};

export default ScrollableRowDynamic;
