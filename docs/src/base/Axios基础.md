# Axios 基础

axios 是一个专注于网络请求的库，基本语法如下

```js
axios({
  method:'post/get',
  url:'xxx'，
  //url 中带的参数即 get 传递的数据
  params：{}，
  //post 传递的参数即请求体参数
  data:{},
  }).then((result)=>{
  //.then 用来指定请求成功后的回调函数
})
```

promise 对象可以调用 then 方法，axios 返回的真实数据在 xxx.data 下

如果调用某个方法返回的是 promise 方法，前面可以加 await

await 方法只能用用在被 async 修饰的方法中

使用结构赋值把请求的大对象的 data 属性（即真实的数据）解构出来，再进行重命名，最后通过重命名的对象的 data 中拿出数据

解构赋值可以使用:进行重命名

```js
const {data:res} = await axios({
  method:'post/get',
  url:'xxx'，
  //url 中带的参数即 get 传递的数据
  params：{}，
  //post 传递的参数即请求体参数
  data:{},
});
consolr.log(res.data);
// axious.get
const {data:res} = await axios.get('url',{
  params:{
  //参数
  }
})
// axious.post
const {data:res} = await axios.post('url',{params})
```

## 简化 axios 请求

在 vue 的原型上挂载 axios，后续组件需要使用则不需要导入 axios，直接调用 this.$http，方法是在 main 方法内导入 axios 并使用原型挂载，并将请求路径进行全局配置

```js
//在 main.js 导入 axios
import axios from 'axios'
//配置根路径
axios.defaults.baseURL = '根路径'
//把 axios 挂载到.vue 原型
Vue.prototype.$http = axios
// 此方法的缺点是无法实现 API 接口的复用

// 封装 request.js
import axios from 'axios'
const request = axios.create({
  baseURL: 'https://www.escook.cn'
})
export default request
// 封装发请求的函数
import request from '@/utils/request.js'
// 按需导出 api
export const getArticleAPI = function (data) {
  return request.get('/articles', {
    params: {
      data
    }
  })
}
// 在需要使用 api 的组件内按需导入
import { getArticleAPI } from '@/api/articleAPI.JS'
```
