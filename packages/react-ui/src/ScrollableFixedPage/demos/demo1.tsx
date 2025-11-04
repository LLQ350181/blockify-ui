import { ScrollableFixedPage } from '@pl/react-ui';
import React from 'react';

const Demo = () => {
  const items = Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`);

  return (
    <div style={{ padding: '50px', maxWidth: '700px', margin: '0 auto' }}>
      {' '}
      <h2>Scrollable Fixed Page Demo</h2>{' '}
      <ScrollableFixedPage itemsPerPage={3} itemWidth={200} gap={16}>
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              height: '100px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#87cefa',
              borderRadius: '8px',
              fontWeight: 'bold',
            }}
          >
            {item}{' '}
          </div>
        ))}{' '}
      </ScrollableFixedPage>{' '}
    </div>
  );
};

export default Demo;
