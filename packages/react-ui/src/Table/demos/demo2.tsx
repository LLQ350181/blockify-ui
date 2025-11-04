import { ProTable } from '@pl/react-ui';
import React from 'react';
interface DataType {
  key: string;
  name: string;
  description: string;
  extra: string;
}

const data: DataType[] = [
  {
    key: '1',
    name: 'Ant Design Table Component',
    description:
      '这是一个可以多行省略的示例文字，如果内容太长，会显示省略号，并通过 Tooltip 展示完整内容。',
    extra: '这是额外信息，可以自定义 render。',
  },
  {
    key: '2',
    name: 'Another Row',
    description: '短文字不需要省略。',
    extra: '短信息',
  },
];

const columns = [
  {
    title: 'Name（1行省略 + 显示Tooltip）',
    dataIndex: 'name',
    key: 'name',
    customEllipsis: { lines: 1, showTooltip: true },
  },
  {
    title: 'Description（2行省略 + 显示Tooltip）',
    dataIndex: 'description',
    key: 'description',
    customEllipsis: { lines: 1, showTooltip: true },
  },
  {
    title: 'Extra Info（1行省略 + 不显示Tooltip）',
    dataIndex: 'extra',
    key: 'extra',
    customEllipsis: {
      lines: 1,
      showTooltip: false,
      style: { background: 'pink' },
      className: 'extra-class',
    },
    render: (text: string) => <span style={{ color: 'blue' }}>{text}</span>,
  },
];

export default function Demo() {
  return (
    <ProTable<DataType>
      columns={columns}
      dataSource={data}
      pagination={false}
      bordered
    />
  );
}
