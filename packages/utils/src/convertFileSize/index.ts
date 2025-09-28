/**
 * 文件大小单位
 */
export type FileSizeUnit = 'B'| 'KB'| 'MB'| 'GB'| 'TB' | 'PB' | 'EB'| 'ZB'| 'YB';

/**
 * 将文件大小从一个单位转换为另一个单位。
 *
 * @param size - 文件大小
 * @param fromUnit - 初始单位
 * @param toUnit - 目标单位
 * @param decimalPoint - 可选，保留小数位数，默认 2
 * @returns 转换后的文件大小字符串，带单位
 */
const convertFileSize = (
  size: number,
  fromUnit: FileSizeUnit,
  toUnit: FileSizeUnit,
  decimalPoint: number = 2
): string =>{
  if (size < 0) throw new Error('文件大小不能为负数');

  const units: FileSizeUnit[] = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const fromIndex = units.indexOf(fromUnit.toUpperCase() as FileSizeUnit);
  const toIndex = units.indexOf(toUnit.toUpperCase() as FileSizeUnit);

  if (fromIndex === -1 || toIndex === -1) {
    throw new Error('无效单位，必须为 B, KB, MB, GB, TB, PB, EB, ZB, YB');
  }

  const convertedSize = size * Math.pow(1024, fromIndex - toIndex);
  return `${convertedSize.toFixed(decimalPoint)} ${toUnit.toUpperCase()}`;
}

export { convertFileSize };
