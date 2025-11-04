import { EllipsisParagraph } from '@pl/react-ui';
import React from 'react';
const Demo1: React.FC = () => {
  return (
    <div>
      <div>
        {'AntV 是蚂蚁集团全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、不限可能的数据可视化最佳实践。得益于丰富的业务场景和用户需求挑战，AntV 经历多年积累与不断打磨，已支撑整个阿里集团内外 20000+ 业务系统，通过了日均千万级 UV 产品的'.repeat(
          2,
        )}
      </div>
      <EllipsisParagraph
        ellipsis={{
          rows: 3,
        }}
      >
        {'AntV 是蚂蚁集团全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、不限可能的数据可视化最佳实践。得益于丰富的业务场景和用户需求挑战，AntV 经历多年积累与不断打磨，已支撑整个阿里集团内外 20000+ 业务系统，通过了日均千万级 UV 产品的'.repeat(
          2,
        )}
      </EllipsisParagraph>
    </div>
  );
};

export default Demo1;
