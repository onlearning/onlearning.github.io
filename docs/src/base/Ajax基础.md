# Ajax

Ajax 是浏览器提供的方法，可以实现页面无刷新更新数据，即局部更新数据，提高用户体验，ajax 与服务器交互，必须在网络环境中才能运行

Axios 是对原生的 Ajax 进行封装,简化书写

## 基础

```js

var xhr = new XMLHttpRequest()；  // 创建 ajax 对象
xhr.open('get'，'url') // 告诉 Ajax 请求地址和请求方式
xhr.send()// 发送请求
xhr.onload=function() {
  console.log(xhr.responseText)  // 获取服务器端响应到客户端的数据
}
```

在真实的项目中大多数数据会以 JSON 对象返回，需要对返回的数据进行 html 拼接

将服务器端的字符串转换为 JSON 对象 JSON.parse()

## 参数传递

get 方法的参数需要自己去拼接字符串

post 方法需要设置请求报文的报文信息

将参数放在 send 方法内

请求参数的格式

json 数据格式需要通过 post 方式提交，不能通过 get 提交

## Ajax 状态码

0：请求未初始化（未调用 open）

1：请求建立但为发送（未调用 send）

2：请求已经发送

3：请求正在处理，可用部分数据

4：响应完成

调用 `xhr.onreadyState()`可以获取状态码

`onreadystatechange() `当 send 调用后 ajax 的状态码会不断变化，可用此方法监听

`onload()`和`onreadychange()`事件都可以获取服务器响应

## Ajax 错误处理

通过 xhr.status 获取 http 状态码，针对不同的状态码进行处理

检查请求地址是否错误

请求返回 500 状态码，代表服务器错误

网络中断不会调用 onload 事件，会自动触发 onerror 事件

IE 浏览器会存在缓存问题

如果客户端请求的服务器地址没有变化，只有第一次会进行请求，之后再次请求会使用缓存中的数据

解决方法：在请求地址后加上参数，保证每一次请求的参数不同

## Ajax 异步

ajax 是异步程序，在同步执行完才会执行

Ajax 封装，将请求封装，在需要时调用

async. 默认是 true，即为异步方式，执行后，会继续执行后面的脚本，直到服务器端返回数据后，触发 ​.ajax 里的 success 方法，这时候执行的是两个线程。

async 设置为 false，则所有的请求均为同步请求，在没有返回值之前，同步请求将锁住浏览器，用户其它操作必须等待请求完成才可以执行。

如果需要传递请求参数，需要判断请求方式是 post 还是 get，如果为 post，将参数传递给 send 方法时要添加请求参数的类型

ajax 封装时可声明默认值，在传递函数后对默认值进行覆盖，使用` object.assign(默认函数, 传递函数)`

## Ajax 请求

ajax 只能支持同源请求，即自己只能访问自己电脑的服务器

同源是为了保证用户信息安全，比如 a 网站的 cookie，b 网站是不能访问的

1.使用 JSONP 可以进行跨域

它不属于 ajax 请求但可以模拟 ajax 请求

JSONP 优化 1.动态创建标签，在需要使用时使用 creatElement 创建 script 标签，设置 src 属性，并通过 `docuement.body.appendChild` 添加到 body 中，在加载完毕时即调用 onload 事件删除 script 标签

2.动态传递函数名称

在 url 中通过`?callback=函数名`，并在服务器中通过 url 获取 `req.query.callback`

3.封装 jsonp 函数

## COOKIE 处理

在使用 ajax 发送跨域请求时，默认不会发送 cookie,使用 ajax 的 withCredentials 属性设置为 true，并允许发送请求携带 cookie，`Access-Control-Allow-Credentials：true`

JQuery 发送 Ajax

使用`$.ajax(){}`可以发送 ajax 请求

`beforesend`方法可以在请求发送前进行判断，执行完`beforesend`方法之后才会向下执行

`$.ajax` 方法发送 jsonp 请求

指定 `dataType:'jsonp'`

修改 callback 名称 `sonp:'cb'`

指定函数名` jsoncallback:'fnname'`

`$.get()` 函数和 `post（）`函数可以发送 get 和 post 请求

## Ajax 全局事件

ajax 全局事件要绑定在 document 上

`.ajaxStart()` 请求开始时触发

`.ajaxComplete()`请求完成时触发

`nprogress` 进度条插件，配合全局插件使用

## Ajax 封装

```js
function ajax(options) {
  // 默认值
  var defaults = {
    type: 'get',
    url: '',
    async: true,
    data: {},
    header: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    success: function () {},
    error: function () {}
  }
  // 使用用户传递的参数替换默认值参数
  Object.assign(defaults, options)
  // 创建 ajax 对象
  var xhr = new XMLHttpRequest()
  // 参数拼接变量
  var params = ''
  // 循环参数
  for (var attr in defaults.data) {
    // 参数拼接
    params += attr + '=' + defaults.data[attr] + '&'
    // 去掉参数中最后一个&
    params = params.substr(0, params.length - 1)
  }
  // 如果请求方式为 get
  if (defaults.type == 'get') {
    // 将参数拼接在 url 地址的后面
    defaults.url += '?' + params
  }

  // 配置 ajax 请求
  xhr.open(defaults.type, defaults.url, defaults.async)
  // 如果请求方式为 post
  if (defaults.type == 'post') {
    // 设置请求头
    xhr.setRequestHeader('Content-Type', defaults.header['Content-Type'])
    // 如果想服务器端传递的参数类型为 json
    if (defaults.header['Content-Type'] == 'application/json') {
      // 将 json 对象转换为 json 字符串
      xhr.send(JSON.stringify(defaults.data))
    } else {
      // 发送请求
      xhr.send(params)
    }
  } else {
    xhr.send()
  }
  // 请求加载完成
  xhr.onload = function () {
    // 获取服务器端返回数据的类型
    var contentType = xhr.getResponseHeader('content-type')
    // 获取服务器端返回的响应数据
    var responseText = xhr.responseText
    // 如果服务器端返回的数据是 json 数据类型
    if (contentType.includes('application/json')) {
      // 将 json 字符串转换为 json 对象
      responseText = JSON.parse(responseText)
    }
    // 如果请求成功
    if (xhr.status == 200) {
      // 调用成功回调函数, 并且将服务器端返回的结果传递给成功回调函数
      defaults.success(responseText, xhr)
    } else {
      // 调用失败回调函数并且将 xhr 对象传递给回调函数
      defaults.error(responseText, xhr)
    }
  }
  // 当网络中断时
  xhr.onerror = function () {
    // 调用失败回调函数并且将 xhr 对象传递给回调函数
    defaults.error(xhr)
  }
}
```
