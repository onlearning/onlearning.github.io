# webpack 基础

webpack 是前端工程化的具体解决方案，包括代码压缩混淆、处理 js 的兼容、优化性能

安装指定版本 `npm install webpack@5.42.1 webpack-cli@4.7.2 -D`

-S 是--save 的简写，将包安装在开发和线上环境

-D 是--save-dev 的简写，只安装在开发环境

## webpack 配置

1、创建一个 webpack.config.js 并初始化

`module.exports={mode:'development'}`
mode 值可选 development 和 production，mode 可选值会影响 webpack 压缩文件的大小

2、在 package.json 的 script 节点下新增脚本

```js
"script"：{
  "build": "webpack --env.NODE_ENV=common",
  "build:prod": "webpack --env.NODE_ENV=production",
}`
```

可通过 npm run build 运行脚本

3、会在根目录生成 dist 文件夹，在 webpack4.x 和 5.x 的版本中，webpack 会默认打包 src 的 index.js 且默认输出为 dist 内的 main.js

4、可以修改默认设置，在 webpack.config.js 的配置文件中，可通过 entry 节点指定打包入口，通过 output 节点指定出口

```js
const path = require('path')
//导入处理文件路径的模块

module.exports = {
  entry: path.join(__dirname, './src/index.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js'
  }
}
```

## 插件

### webpack-dev-server

类似于 nodemon，会监听修改

1、使用以下命令安装 `npm install webpack-dev-server -D`

2、配置 package.json 内的 script `"script"：{"dev"："webpack serve"} `

3、运行 `npm run dev` 且访问 localhost:8080

4、为生成的项目在内存，所以需要修改引用的文件路径，通过/访问

### html-webpack-plugin

将 SRC 内的 html 文件复制到根目录

```js
const HtmlPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlPlugin({
  template:'./src/index.html',
  filename:'./index.html',
})
​
module.exports = {
  mode:'development',
  plugins:[htmlPlugin],
}
```

注意：生成的 index 在内存中，而且会自动引入 js 文件

### devServer

可实现修改端口号，自动打开及修改主机地址

```js
devServer:{
  open:true,
  port：80，
  host:'127.0.0.1'
}
```

### loader

webpack 会自动处理 js 文件，对于 css 等其他后缀文件需要借助 loader 处理

### css-loader

1、运行 `npm i style-loader css-loader -D`

2、在 webpack.config.js 的 module 中制定规则

```js
modules: {
  rules: [{ test: /\.css$/, use: ['style-loader', 'css-loader'] }]
}
```

test 表示文件类型，use 表示要调用的 loader，use 中的 loader 顺序是固定的，多个 loader 的调用是从后往前调用

### less-loader

1、运行 `npm i less-loader less -D`

2、在 webpack.config.js 的 module 中制定规则

```js
modules: {
  rules: [{ test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }]
}
```

### img

1、运行 `npm i url-loader file-loader -D`

2、在 webpack.config.js 的 module 中制定规则

```js
modules: {
  rules: [{ test: /\.jpg|png|gif$/, use: 'url-loader?limit=22229' }]
}
```

`?`后是 `loader` 的参数项，指定图片的大小，单位是字节，只有小于 `limit` 的图片才会装换为 `base64` 格式的图片

使用 base64 格式字符串处理小图片，可以减少请求次数，和精灵图的作用一样，但会略微增大体积

在配置 img 的 url-loader 时可以设置 output 输出的位置

```js
modules: {
  rules: [{ test: /\.jpg|png|gif$/, use: 'url-loader?limit=22229&outputPath=images' }]
}
```

### JS 高级语法

如果 js 的语法太高级 webpack 无法处理，需要借助 `babel-loader` 进行处理

1、运行 `npm i babel-loader @babel/core @babel/plugin-proposal-decorators -D`

2、在 webpack.config.js 的 module 中制定规则

```js
modules: {
  rules: [{ test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }]
}
```

exclude 是排除文件,需要排除第三方包

3、在项目根目录中创建 babel.config.js

```js
modules.exports = {
  plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]]
}
```

可参考 babel 官网配置

**注意**

在 webpack 中可以使用 es6 中的语法 import 导入模块，一切皆模块，可以使用 import xxx from 'xxx' 接收

## 打包发布

在 package.json 下新增 build 命令，将内存的文件放在物理磁盘中

```js
"script"：{
  "build":"webpack --mode production"
}
```

`--mode` 会覆盖 webpack.config.js 内的 mode 值，改为上线环境，运行 `npm run build`

在 webpack.config.js 的 output 节点中可设置每个文件生成的位置的

```js
output: {
  path: path.join(__dirname, './dist'),
  filename: 'js/bundle.js'
}
```

清理 dist 旧文件

1、`npm install --save-dev clean-webpack-plugin`

2、在 webpack.config.js 里面配置

```js
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
​
const webpackConfig = {
  plugins: [new CleanWebpackPlugin()],
};
module.exports = webpackConfig;
```

const 左侧的花括号是解构赋值

## Source Map

Source Map 是文件位置信息，在开发环境下记录的错误位置是在内存的位置而不是真实的位置，需要在 webpack.config.js 中的 module.exports 增加代码： `devtool:'eval-source-map'`

如果在生产环境下，需要关闭 source map 保证安全性，如果想定位行数且不暴露源码，改成 `devtool:'nosources-source-map'`

实际开发中使用命令行工具（cli）自动生成 webpack

导入包的时候建议使用@表示 src 源代码目录，需要先在 webpack.config.js 配置

```js
resolve: {
  alias: {
    '@':path.join(__dirname, './src/')
  }
}
```
