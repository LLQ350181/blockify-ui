import { defineConfig } from 'dumi';
import { readdirSync } from 'fs';
import { join } from 'path';
const preFix = '@pl';
const headPkgList: any = [];
const pkgList = readdirSync(join(__dirname, 'packages')).filter((pkg) => pkg.charAt(0) !== '.' && !headPkgList.includes(pkg));
const tailPkgList = pkgList.map((path) => [join('packages', path, 'src')]).reduce((acc, val) => acc.concat(val), []);
const atomDirs = tailPkgList.map((dir) => {
  return {
    type: 'components',
    dir
  };
});
const alias = pkgList.reduce((pre: any, pkg) => {
  pre[`${preFix}/${pkg}`] = join(__dirname, 'packages', pkg, 'src');
  return {
    ...pre
  };
}, {});
export default defineConfig({
  outputPath: 'docs-dist',
  publicPath: '/blockify-ui/',
  base: '/blockify-ui/',       // SPA 路由基路径
  resolve: {
    docDirs: [...tailPkgList, 'docs'],
    atomDirs: atomDirs
  },
  alias,
  themeConfig: {
    name: 'pl'
  },
});
