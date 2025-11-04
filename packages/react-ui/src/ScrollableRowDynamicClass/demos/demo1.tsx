import { ScrollableRowDynamicClass } from '@pl/react-ui';
import React from 'react';

const Demo = () => {
  return (
    <>
      <div style={{ width: 600 }}>
        <h3>ScrollableRowDynamicClass 左右都从被遮挡的元素开始展示一屏</h3>
        <ScrollableRowDynamicClass>
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              style={{
                width: 80 + (i % 4) * 40, // 模拟不同宽度
                height: 100,
                background: '#1677ff',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 8,
                fontSize: 20,
              }}
            >
              {i + 1}
            </div>
          ))}
        </ScrollableRowDynamicClass>
      </div>
      <div style={{ width: 430, border: '1px solid red' }}>
        <h3>ScrollableRowDynamicClass 左右都从被遮挡的元素开始展示一屏</h3>
        <ScrollableRowDynamicClass scrollable={false}>
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              style={{
                width: 100,
                height: 100,
                background: '#1677ff',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 8,
                fontSize: 20,
              }}
            >
              {i + 1}
            </div>
          ))}
        </ScrollableRowDynamicClass>
      </div>
    </>
  );
};

export default Demo;
