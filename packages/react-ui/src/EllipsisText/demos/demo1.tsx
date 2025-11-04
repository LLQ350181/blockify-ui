import { EllipsisText } from '@pl/react-ui';
import { Paragraph } from '@typography-org/react';
import { Typography } from 'antd';
import React, { useState } from 'react';
const Demo1: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <Paragraph
        ellipsis={{
          expandable: true,
          packupable: true,
          rows: 2,
        }}
      >
        我可能是展示在这个文本框中的第一行数据嘿，我可能是展示在这个文我可能是展示在这个文本框中的第一行数据嘿，我可能是展示在这个文本框中的第二行数据，我可能是展示在这个文本框中的第三行数据我可能是展示在这个文本框中的第一行数据嘿，我可能是展示在这个文本框中的第二行数据，我可能是展示在这个文本框中的第三行数据本框中的第二行数据，我可能是展示在这个文本框中的第三行数据
      </Paragraph>
      <Typography.Paragraph
        ellipsis={{
          rows: 3,
          expandable: 'collapsible',
          expanded,
          onExpand: (_, info) => {
            console.log(info);
            setExpanded(info.expanded);
          },
        }}
        copyable
      >
        {'Ant Design, a design language for background applications, is refined by Ant UED Team.'.repeat(
          20,
        )}
      </Typography.Paragraph>
      <EllipsisText
        text={
          '标题标题标题标标题标题标题标题标题标标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题题标题标题标题标题标题标题'
        }
        lines={2}
      />
    </div>
  );
};

export default Demo1;
