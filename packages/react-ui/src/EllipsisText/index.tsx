import { Tooltip } from 'antd';
import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import './index.less';

interface EllipsisTextProps {
  text: string | number;
  lines?: number;
  width?: number | string;
  showTooltip?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

const EllipsisText: React.FC<EllipsisTextProps> = ({
  text,
  lines = 1,
  width = '100%',
  showTooltip = true,
  style = {},
  className,
}) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const [isOverflow, setIsOverflow] = useState(false);

  const checkOverflow = () => {
    const el = textRef.current;
    if (!el) return;
    setIsOverflow(el.scrollHeight > el.clientHeight + 2); // 防浮点误差
  };

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
  }, [text, width, lines]);

  const content = (
    <span
      ref={textRef}
      className={classNames('ellipsis-text', className)}
      style={{
        WebkitLineClamp: lines,
        width,
        ...style,
      }}
    >
      {text}
    </span>
  );

  return showTooltip && isOverflow ? (
    <Tooltip title={text}>{content}</Tooltip>
  ) : (
    content
  );
};

export default EllipsisText;
