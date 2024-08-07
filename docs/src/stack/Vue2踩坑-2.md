# Vue2 踩坑(2)

## post 请求

参数 data 如果直接写 参数会在请求体 以 JOSN

```js
export function orderList(data) {
  return request({
    url: 'xxx',
    method: 'post',
    data
  })
}
// 如果写成parms:data 参数会跟在请求后面 类似get请求
export function orderList(data) {
  return request({
    url: 'xxx',
    method: 'post',
    parms: data
  })
}
```

### 请求发送两次的原因

当前端应用试图从一个源（origin）上的 Web 页面访问另一个源上的资源时，浏览器会执行跨域请求，其中 POST 请求常常会伴随着两次发送：一次 OPTIONS 请求（CORS 预检）和一次实际的 POST 请求。

### CORS 预检

跨域请求的预检 当 Web 页面中的脚本尝试访问与页面本身不同源（即协议、域名或端口中至少有一个不同）的资源时，浏览器会执行一种称为“同源策略”的安全限制。然而，为了满足某些跨域交互的需求，浏览器引入了 CORS（跨域资源共享）机制。 在 CORS 中，当浏览器遇到某些类型的跨域请求（通常称为“复杂请求”）时，它会首先发送一个 OPTIONS 请求到目标服务器，询问是否允许该跨域请求。这个 OPTIONS 请求被称为“预检请求”（preflight request）。

### 复杂请求

复杂请求是指那些不仅仅是简单的 GET 或 POST 请求的请求。

以下情况通常被视为复杂请求：

1、使用 POST、PUT、DELETE 等 HTTP 方法。

2、请求中包含自定义的 HTTP 头字段。

3、请求体（Body）中包含非文本数据（如 JSON 或 XML）。

当浏览器检测到跨域请求满足上述任何一个条件时，它就会发送一个 OPTIONS 预检请求。这个预检请求会包含一些特定的 HTTP 头字段，如 Access-Control-Request-Method（表示将要使用的 HTTP 方法）和 Access-Control-Request-Headers（表示将要使用的自定义头字段）。

#### 服务器响应预检请求

服务器在接收到 OPTIONS 预检请求后，会根据其 CORS 配置来决定是否允许该跨域请求。如果允许，服务器会返回一个包含适当 CORS 头字段的响应，如 Access-Control-Allow-Origin（表示允许哪些源的请求）和 Access-Control-Allow-Methods（表示允许哪些 HTTP 方法）。 一旦服务器响应了预检请求并允许了跨域请求，浏览器就会发送实际的 POST 请求（或其他类型的请求）。

## 前后端 sse 通讯

```js
if (window.EventSource) {
  window.source = new EventSource('message')
  window.source.addEventListener('open', () => {})
  // 监听服务器发来的消息 或用source.onmessage=()=>{}
  window.source.addEventListener('message', () => {})
  // 监听异常
  window.source.addEventListener('error', () => {})
}
window.soure.close() // 关闭并发请求
```

## css 实现盒子固定宽度外左右滑动

`display: -webkit-box; overflow-x: scroll`

## 将 px 单位转为 rem

1、安装 postcss-px2rem

`npm i postcss-px2rem --save -dev `

2、进入 vue.config.js 配置

```js
const px2rem = require('postcss-px2rem')
const postcss = px2rem({
  remUnit: 10 //基准大小 baseSize，需要下方html除后的数字相同
})
module.exports = {
  /* 注意sass，scss，less的配置 */
  productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
  css: {
    loaderOptions: {
      postcss: {
        plugins: [postcss]
      }
    }
  }
}
```

3、进入 publci 的 index.html

```js
function getHtmlFontSize() {
  //获取设备宽度
  let deviceWidth = document.documentElement.clientWidth || window.innerWidth
  console.log('[设备宽度]', deviceWidth)
  if (deviceWidth >= 750) {
    deviceWidth = 750
  } else if (deviceWidth <= 320) {
    deviceWidth = 320
  }
  //设置html的字体大小
  document.documentElement.style.fontSize = deviceWidth / 37.5 + 'px'
}
getHtmlFontSize()
window.addEventListener('resize', getHtmlFontSize)
```

## 滚动至容器底部

```js
<div ref='chatMain'><div>

scrollEnd(){
  this.$nextTick(()=>{
     const chat = this.$refs.chatMain
     chat.scrollTop = chat.scrollHeight-chat.clientHeight
  })
}
```

## 获取 url 上的参数

```js
const geturl = window.location.href
// http://localhost:8081/#/pages/index/index?id=1001&name=zs
const info = geturl.split('?')[1] //id=1001&name=zs   截取到参数部分
const getqys = new URLSearchParams('?' + info) //将参数放在URLSearchParams函数中
const id = getqys.get('id') // 1001
const name = getqys.get('name') // zs
```

## 设置容器为可编辑并可添加表情及 placehodler

1、添加 placehodler

```js
<div class="editable-div" contenteditable="true" placegolder='请输入'>

<style>
.editable-div:empty:before {
  position: absolute;
  content: attr(placegolder);
  background-color: transparent;
  color: #4d4d4d;
}
</style>
```

2、添加图片

```js
const insertImage = () => {
  const editableDiv = document.getElementById('editableDiv')
  const imgSrc = 'https://via.placeholder.com/150' // 这里替换为你要插入的图片的 URL

  // 创建一个新的 img 元素
  const img = document.createElement('img')
  img.src = imgSrc

  // 添加 data-src 属性
  img.setAttribute('data-src', 'xxxxx')

  // 保存当前光标位置
  const sel = window.getSelection()
  const range = sel.getRangeAt(0)

  // 在光标位置插入 img 元素
  range.insertNode(img)
  range.setStartAfter(img)

  // 恢复光标位置
  sel.removeAllRanges()
  sel.addRange(range)

  // 使 div 重新聚焦
  editableDiv.focus()
}
```

3、data-src 为图片内容传给后端的字段 需要对 div 的内容进行处理

```js
const dealMsg = () => {
  const element = document.getElementById('editableDiv')
  const content = element.innerHTML
  // inputValue 为传给后端的字段
  this.inputValue = content
  // 如果有图片
  if (element.querySelector('img')) {
    this.inputValue = content.replace(/<img.*?(?:>|\/>)/gi, text => {
      const dataSrc = text.match(/data-src="(.+)"/)
      return dataSrc[1] ? dataSrc[1] : ''
    })
  }
}
```
