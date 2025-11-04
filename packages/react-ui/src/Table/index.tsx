// 1.支持多行省略
// 2.支持英文数字自动换行

import { EllipsisText } from '@pl/react-ui';
import { Table } from 'antd';
import type { ColumnsType, ColumnType, TableProps } from 'antd/es/table';
import React, { useMemo } from 'react';
import './index.less';

interface CustomEllipsis {
  lines?: number;
  showTooltip?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

interface ProColumnType<T> extends ColumnType<T> {
  customEllipsis?: CustomEllipsis;
}

type ProTableProps<T> = TableProps<T> & {
  columns: ProColumnType<T>[];
};

function ProTable<T extends object>({ columns, ...rest }: ProTableProps<T>) {
  const enhancedColumns = useMemo(() => {
    return columns.map((col: ProColumnType<T>) => {
      if (!col.customEllipsis) return col;

      const {
        lines = 1,
        showTooltip = true,
        style = {},
        className,
      } = col.customEllipsis;
      const originalRender = col.render;

      return {
        ...col,
        render: (text: any, record: T, index: number) => {
          const content = originalRender
            ? originalRender(text, record, index)
            : text;
          return (
            <EllipsisText
              text={content}
              lines={lines}
              showTooltip={showTooltip}
              width={col.width}
              style={style}
              className={className}
            />
          );
        },
      };
    });
  }, [columns]);

  return <Table {...rest} columns={enhancedColumns as ColumnsType<T>} />;
}

export default ProTable;
