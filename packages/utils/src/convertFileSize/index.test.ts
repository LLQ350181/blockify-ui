import { convertFileSize } from "./index";

describe("convertFileSize", () => {
  it("B -> KB", () => {
    expect(convertFileSize(1024, "B", "KB")).toBe("1.00 KB");
  });

  it("MB -> GB", () => {
    expect(convertFileSize(2048, "MB", "GB")).toBe("2.00 GB");
  });

  it("TB -> MB", () => {
    expect(convertFileSize(1, "TB", "MB")).toBe("1048576.00 MB");
  });

  it("支持小数位自定义", () => {
    expect(convertFileSize(123456789, "B", "MB", 4)).toBe("117.7376 MB");
  });

  it("无效单位应抛错", () => {
    expect(() => convertFileSize(1024, "ABC", "KB")).toThrow();
    expect(() => convertFileSize(1024, "B", "XYZ")).toThrow();
  });

  it("负数应抛错", () => {
    expect(() => convertFileSize(-1, "B", "KB")).toThrow("文件大小不能为负数");
  });
});

