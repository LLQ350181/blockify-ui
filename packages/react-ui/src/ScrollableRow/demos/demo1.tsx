import { ScrollableRow } from '@pl/react-ui';
import React from 'react';

const Demo = () => {
  return (
    <>
      <div style={{ width: 400 }}>
        <ScrollableRow>
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              style={{
                minWidth: 100,
                height: 60,
                background: '#1677ff',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 8,
                marginRight: 8,
              }}
            >
              {i + 1}
            </div>
          ))}
        </ScrollableRow>
      </div>
    </>
  );
};

export default Demo;
