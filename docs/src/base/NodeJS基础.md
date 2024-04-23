# Node JS 基础

Node 是基于 chrome V8 的 js 运行环境 [node 官网](https://nodejs.org/en/download)

在命令行工具输入 node -v 后回车可查看 node 环境是否安装成功

js 是基于 ECMAScript 语法的，操作 BOM 和 DOM

node.js 也是基于 ECMAScript 语法，还有额外的 Node API

node.js 内部的变量和方法默认不能被外部访问，如果 a.js 内部的方法要被外部(b.js)访问使用：

1、在 a 内使用 `exports.变量=变量` 或者在 a 内使用 `module.exports.变量=变量`

如果同时使用 `exports` 和 `module.exports` 变量，以 `module.exports` 为准

2、在 b 内使用 `require('文件名')`访问 `const a = require('a')`

## Node 基础模块

### fs 方法

f：即 file 文件 s：即 system 系统

./代表本级目录 ../代表下级目录

读取文件 `fs.readFile('文件路径'，'文件编码'，回调函数)`

文件引用 `const fs = require('fs')`；

回调函数内包含两个参数(err，doc)

err 代表是否出错，返回 null 代表没有出错，doc 为文件内容

写入文件 `fs.weiteFile('要写入的文件名'，'要写入的内容'，回调函数)`

如果有则增加内容 如果没有要写入的文件系统会自动创建

### path 方法

window 的路径基本使用`/` `\`

但服务器 linux 只有`/`

用户上传头像等是保存到服务器中，所以需要路径拼接

导入 path 模块

```js
const path= require('path')
let fin = path.join('a'，'b'，'c.css')
// 结果为 a\b\c.css
```

在大多数情况下都会使用绝对路径

使用`--dirname` 可以获取绝对路径 `path.join(__dirname, '路径')`

### 第三方模块

多个文件组成的包 npmjs.com 有文档

部分第三方模块可以链式编写，即 `res.status().send()`

获取第三方模块，使用 `npm(node packge manager)`命令

下载：`npm install 模块名称`(下载到命令行所在目录)

卸载：`npm uninstall 模块名称`

nodemon 是一个第三方辅助执行文件(文件被修改会自动执行)

1、npm install nodemon -g(-g 代表全局安装)

2、使用 nodemon 代替 node 执行

3、ctrl+c 结束命令

#### gulp

第三方模块前端构建工具

项目上线，html、js、css 合并

语法转换

公共文件抽离

1、npm install gulp

2、在项目根目录建立 gulpfile.js 文件

3、创建两个文件夹，src 文件夹放置源代码，dist 文件夹放置压缩后的文件

4、在 gulpfile.js 内编写任务

5、执行 gulpfile.js

gulp 中的方法(用`*`可以获取所有同类型文件)

`gulp.src()`；获取要处理的文件

`gulp.dest()`输出文件

`gulp.task()`建立 gulp 任务

`gulp.watch()`监控文件变化

```js
const gulp = require('gulp')
gulp.task(first, () => {
  gulp.src('./src/css').pipe(gulp.dest('dist/css'))
})
```

gulp 插件

`gulp-htmlmin` 压缩 html 文件中的代码

`gulp-csso` 压缩 css

`gulp-babel` js 语法转化

`gulp-less` less 语法转化

`gulp-uglify` 压缩混淆 js

`gulp-file-include` 公共文件包含

一般网站头部和尾部会用到，使用`@@include('公共路径')`可以引用

gulp 可以将所有任务封装起来依次执行 eg:`gulp.task('default',['htmlmin','cssmin','copy'])`

#### package.json

`package.json` 会记录项目相关信息，包括第三方模块(在 dependencies 字段中)

快速生成 `package.json` 文件可以使用 `npm install -y`

在传输时可避免传递 `node-modules` 模块(本模块过大)，使用 `npm install` 即可下载所有第三模块

开发依赖

项目在开发阶段的依赖称为开发依赖，但有些项目依赖在上线之后不需要了，所以在安装包时，在开发阶段需要的依赖以--save-dev 命令结尾，此文件会存储在 `devDependencies` 中，如果在服务器线上环境使用--production

### 服务器端

`url` 传输协议://IP 或域名：端口(默认为 80)/资源所在位置

`http` 超文本传输协议

请求报文

`post` 发送数据(安全，放在请求体中)

`get` 请求数据(不安全，通过 url 传递)

`req.headers` 获取请求报文信息

`req.url` 获取请求地址

`req.method` 获取请求方法

`res.writeHead(状态码，{'content-type'：文件类型})` 可以设置 http 状态码和默认编码方式

`url.parse(req.url，true)`会解析 url 的参数(限于 get 请求)

`url.parse().pathname` 可以返回无参数的 url

`querystring` 可以处理 post 请求的字符串

### 路由

请求什么响应什么，网页的访问路径

同步 api 从上到下执行，异步 api 会放在栈堆中，等到触发才执行

异步 api 需要通过回调函数来调用，没有返回值，所以需要封装 `callback` 函数

读取文件是异步 API，第二部是回调函数

回调异步解决的方法：将回调函数写入回调函数中，但会导致过多嵌套，还可以使用 promise 构造函数

```js
let promise = new Promise((resolve,reject) => {
  fs.readFile('./1.txt','utf8',(err ,result) => {
    if(err !== null){
  ​   reject(err)
    }else{
      resolve(result
    )}
  })
})
promise.then((result)=>{
  console.log(result);
}).catch((err)=>{
  console.log(err)
})
```

如果成功调用 resolve，失败调用 reject

es7 新增异步函数

在普通函数前加 async 关键字，默认返回 promise

```js
anync function fn (){
  throw"发生了一些错误"
  return 123;
}
fn().then(function(data){
​  console.log(data)
}).catch(function(err){
​  console.log(err)
})
```

`throw` 抛出异常，使用 `catch` 接收，`throw `后的代码不执行

`async` 内部有 `await` 方法，可以暂停函数的执行，只有有返回值才执行

`promisify` 方法可以改造异步方法比如 fs 方法，返回一个 `prominse` 对象

在调用 `Promisify` 方法

```js
const promisify = require('util').promisify
const readFile = promisify(fs.readFile)
```

在浏览器中去全局对象是 window，在 node 中全局对象是 gobal

### 数据库

网站的数据是存储在数据库中

mongoDB 基于 JSON

mysql 用于 PHP

第三方模块 mongooes

需要启动 `MongoDB net stat MongoDB`

### EXPRESS 框架

使用 `npm install express` 命令进行下载

框架特性

提供了简洁的路由定义

对获取 http 请求参数进行简化处理

对模板引擎支持程度高，方便渲染 html

提供了中间件机制有效控制 http 请求

拥有大量第三方中间件对功能进行扩展

### 中间件

中间件就是一堆方法，可以接收客户端发来的请求，也可以对请求做出响应，也可以将请求交给下一个中间件处理

中间件由中间件方法(由框架提供)，请求处理函数(开发人员提供)

可以针对同一个请求设置多个中间件

中间件默认从上到下匹配，匹配成功就终止匹配，可以使用 `next` 方法将请求的控制权交给下一个中间件

中间件常用来做登录保护，没有登录就不调用 `next` 方法

还可以在网站维护时设置中间件，拦截所有路由

可以自定义 404 页面，在所有路由最后定义，代表上面的都没有匹配，使用 `res.status` 设置状态码
