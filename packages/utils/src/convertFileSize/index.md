---
nav:
  title: 工具
  path: /utils
---

# convertFileSize

将文件大小从一个单位转换为另一个单位，返回值为带单位的字符串。111111222222

## API

| 参数           | 说明                                                            | 类型     | 默认值 | 必填 |
| -------------- | --------------------------------------------------------------- | -------- | ------ | ---- |
| `size`         | 文件大小                                                        | `number` | -      | 是   |
| `fromUnit`     | 初始单位（`B`, `KB`, `MB`, `GB`, `TB`, `PB`, `EB`, `ZB`, `YB`） | `string` | -      | 是   |
| `toUnit`       | 目标单位（`B`, `KB`, `MB`, `GB`, `TB`, `EB`, `ZB`, `YB`）       | `string` | -      | 是   |
| `decimalPoint` | 保留小数位数                                                    | `number` | `2`    | 否   |

**返回**

- `string`：转换后的文件大小，带目标单位。

**注意事项**

- 文件大小不能为负数，否则会抛出错误。
- 如果传入的单位无效，会抛出错误。

## 示例

### 基本用法

```tsx
import { convertFileSize } from '@pl/utils';
export default () => {
  console.log();
  // => '1.00 MB'

  console.log(convertFileSize(1, 'GB', 'MB', 3));
  // => '1024.000 MB'

  console.log(convertFileSize(500, 'B', 'KB'));
  // => '0.49 KB'

  return <div>请打开控制台查看输出</div>;
};
```

### 错误示例

```tsx | pure
import { convertFileSize } from '@pl/utils';

export default () => {
  try {
    convertFileSize(100, 'INVALID', 'MB');
  } catch (e) {
    console.error(e);
    // => Error: 无效单位，必须为 B, KB, MB, GB, TB, PB, EB, ZB, YB
  }

  try {
    convertFileSize(-1, 'MB', 'GB');
  } catch (e) {
    console.error(e);
    // => Error: 文件大小不能为负数
  }

  return <div>请打开控制台查看错误输出</div>;
};
```
