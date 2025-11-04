import { ToolTipClass } from '@pl/react-ui';
import React from 'react';
function Demo() {
  return (
    <span>
      {/* hover触发 */}
      <ToolTipClass
        title="悬停提示信息悬停提示信息悬停提示信息悬停提示信息悬停提示信息悬停提示信息"
        placement="top"
        width={160}
        trigger="hover"
      >
        <span>悬停我</span>
      </ToolTipClass>
      <div></div>

      {/* click触发 */}
      <ToolTipClass title="点击提示信息" placement="right" trigger="click">
        <span>点击我</span>
      </ToolTipClass>
      <div></div>
      {/* 条件判断（只在文字超过 10 个字符时显示） */}
      <ToolTipClass
        title="这是一段非常长的文字"
        width={150}
        visibleCondition={(title) => title.length > 10}
      >
        <span>条件判断</span>
      </ToolTipClass>
    </span>
  );
}

export default Demo;
