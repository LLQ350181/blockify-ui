import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import './index.less';
interface EllipsisProps {
  rows?: number;
}
interface EllipsisTextProps {
  children: React.ReactNode;
  ellipsis: EllipsisProps;
  style?: React.CSSProperties;
  className?: string;
}
const EllipsisText: React.FC<EllipsisTextProps> = ({
  children,
  ellipsis: { rows = 1 },
  style = {},
  className,
}) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const [isOverflow, setIsOverflow] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [myRows, setMyRows] = useState(rows);

  const checkOverflow = () => {
    const el = textRef.current;
    if (!el) return;
    setIsOverflow(el.scrollHeight > el.clientHeight + 2); // 防浮点误差
  };

  useEffect(() => {
    setMyRows(rows);
  }, [rows]);

  useEffect(() => {
    checkOverflow();
    const observer = new ResizeObserver(() => checkOverflow());
    if (textRef.current) observer.observe(textRef.current);
    // 监听窗口大小变化
    const handleWindowResize = () => checkOverflow();
    window.addEventListener('resize', handleWindowResize);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [children, myRows]);

  return (
    <div className="ellipsis-wrap">
      <span
        ref={textRef}
        className={classNames('text', className)}
        style={{
          WebkitLineClamp: myRows,
          ...style,
        }}
      >
        {!expanded && isOverflow && (
          <div
            className={classNames('expand-btn', 'btn')}
            onClick={() => {
              setExpanded(!expanded);
              setMyRows(999999);
            }}
          >
            展开
          </div>
        )}
        {children}
        {expanded && (
          <div
            className={classNames('collapse-btn', 'btn')}
            onClick={() => {
              setExpanded(!expanded);
              setMyRows(rows);
            }}
          >
            收起
          </div>
        )}
      </span>
    </div>
  );
};

export default EllipsisText;
