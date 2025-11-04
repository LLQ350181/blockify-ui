import { EllipsisText, ProTable } from '@pl/react-ui';
import React from 'react';

const Demo1: React.FC = () => {
  const columns = [
    {
      title: <EllipsisText text={'标题（1行省略 + 显示Tooltip）'} lines={1} />,
      dataIndex: 'title',
      key: 'title',
      // width: 200,
      // render: (text: string) => <EllipsisText text={text} lines={1} />,
    },
    {
      title: '描述（2行省略 + 显示Tooltip）',
      dataIndex: 'desc',
      key: 'desc',
      // width: 300,
      // render: (text: string) => <EllipsisText text={text} lines={2} />,
    },
    {
      title: '简介（1行省略 + 不显示Tooltip）',
      dataIndex: 'brief',
      key: 'brief',
      // width: 300,
      // render: (text: string) => (
      //   <EllipsisText text={text} lines={1} showTooltip={false} />
      // ),
    },
  ];

  const dataSource = [
    {
      key: 1,
      title:
        'React 18 新特性 aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      desc: 'React 18 引入了并发特性（Concurrent Features），让渲染过程更平滑，并支持自动批处理、过渡更新等能力，从而提升用户体验。',
      brief: '并发特性让 React 更快更流畅。',
    },
    {
      key: 2,
      title: 'Ant Design 5 设计语言',
      desc: 'Ant Design 5 推出了全新的 Token System，让主题定制更灵活、可维护性更高；同时支持动态主题切换、暗色模式等现代化需求。',
      brief: 'Token System 提升主题灵活性。',
    },
    {
      key: 3,
      title: '自定义多行省略组件',
      desc: '通过封装 EllipsisText，我们可以在 antd Table 中实现多行省略、自动检测溢出和自定义 Tooltip 的能力，真正做到组件化复用。',
      brief: '多行省略组件封装示例。',
    },
  ];

  return (
    <ProTable
      bordered
      columns={columns}
      dataSource={dataSource}
      pagination={false}
      style={{ width: 850, margin: '40px auto' }}
    />
  );
};

export default Demo1;
