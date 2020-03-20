cnpm install

package-lock.json
锁定依赖项到安装目录和依赖包的版本信息
npm install 会根据 package-lock.json的版本信息 安装依赖
cnpm install 不会根据 package-lock.json的版本信息 安装依赖

开发依赖包1 
1 cross-env
能够提供一个设置环境变量的scripts，让你能够以unix方式设置环境变量，然后在window上也能兼容运行
2 ip
ip地址实用程序，获取你的IP地址，比较IP地址，验证IP地址
3 express
不受限制的node快速，网络框架
4 connect-history-api-fallback
访问初index.html索引文件以外的文件，将定位到index.html
5 compression
压缩中间件，支持gzip格式
6 webpack
打包几乎所有的资源，以供浏览器使用
7 webpack-dev-middleware
热模块重新加载，监视修改，作出反应
8 webpack-merge
为webpack设计的对象合并
10 extract-text-webpack-plugin
提取css所有必需模块到单独的css文件
11 webpack-hot-middleware
webpack 热中间件
9 html-webpack-plugin
将生成一个dist/index.html，为应用程序添加入口
12 html-webpack-include-assets-plugin
对html-webpack-plugin的扩展
13 copy-webpack-plugin
将整个文件或目录复制到构建目录
14 autoprefixer
自动前缀，向css样式中添加供应商

产品依赖包 
1 style-loader
样式打包器，将css-loader打包好的css代码以标签形式插入html文件，通过js字符串创建样式节点
2 css-loader
解析css代码中@import,url()。将css转为CommonJS
3 postcss-loader
让webpack处理css
4 postcss-flexbugs-fixes
解决Flexbug到问题
4 less-loader
针对less代码，编译成css代码
5 babel-loader
允许使用babel转换js文件
6 url-loader
网址加载器 将文件转换成base 64 URL
7 file-loader
文件加载器 将目标文件加载到程序中




