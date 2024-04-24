# Vue2 基础

数据驱动视图（vue 会监听数据变化，自动渲染 dom，是单向的数据绑定）

双向数据绑定（在网页中 form 负责采集数据，ajax 负责提交数据，不需要操作 dom 来获取表单最新的值，最新的数据会自动更新到 js 数据中）

MVVM 是 vue 实现数据驱动视图和双向数据绑定的核心原理，MVVM 指的是 `Model`，`View` 和 `ViewModel`，它把每个 html 分成这三个部分

`Model` 是数据源，`View` 是所渲染的 Dom，`ViewModel` 是 Vue 的实例，将 Model 和 View 连接起来

## Vue 基础使用

注: 不借助脚手架

1、导入 vue.js 的脚本

2、在页面中声明一个将要被 vue 控制的 Dom

3、创建 vm 实例对象（vue 实例对象）

```js
<div id="app" >{{usernane}}</div>
<scrit>
Const vm = new Vue{
  //el是固定写法，表示要控制的区域，接收一个选择器
  el:'#app',
  data:{
      usernae:'zhangsan'
  }
}
</script>
```

### vue.cli

vue.js 开发的标准工具，简化了 webpack 创建工程化 vue 项目的功能

安装`npm install -g@ vue/cli`

创建项目 `vue create 项目名`

src 目录构成

`assets` 文件夹：存放项目中用到的静态资源文件，例如：css 样式表、图片资源

`components` 文件夹：程序员封装的、可复用的组件，都要放到 components 目录下

`main.js` 是项目的入口文件。整个项目的运行，要先执行 main.js

`App.vue` 是项目的根组件

运行流程

整个 vue 项目是通过 main.js 将 app.vue 渲染到 index.html 页面

vue 实例下的`$mount('#app')`方法和 el 属性功能一样

## Vue 指令

指令是 vue 的模板语法，用来渲染页面结构

### 内容渲染指令

v-text 将覆盖元素内部原有的内容 `<p v-text="username"></p>`

v-html 渲染为带标签的的 html 元素

```js
const username = '<p>{{ username }}</p>'
<div v-html={{username}}"></div>
```

双大括号插值表达式，将数据渲染到大括号的位置，内部支持简单的 js 运算和方法

### 属性绑定指令

`v-bind `为元素属性动态绑定值，可以简写为`:`

```js
<input type="text" v-bind:placeholder="tips" >
<input type="text" :placeholder="tips" >
```

### 事件绑定指令

`v-on` 绑定事件监听，可以简写为`@`

```js
<button @click = "add">+1</button>
<scrit>
Const vm = new Vue{
  //el 是固定写法，表示要控制的区域，接收一个选择器
  el:'#app',
  //要渲染的数据
  data:{
    usernae:'zhangsan',
    count:0
  }
  //定义处理事件的函数
  method：{
    //()内可以传参
    add(){
      this.count++;
    }
  }
}
</script>
```

vue 提供了内置变量`$event`,就是原生的 dom 对象 e，放置传参导致覆盖掉 e，所以传参之后可以使用

`@click=show(参数，$event)`

vue 提供了阻止默认跳转的事件修饰符 `@click.prevent="xxx"`

`.prevent` 阻止默认行为

`.stop` 阻止冒泡、

vue 提供了键盘事件的按键修饰符 `@keyup.enter="xxx"`

`enter` 代表回车键

`esc` 代表 esc 键

### 双向绑定指令

v-model 会实时渲染数据，是双向的，只能和表单元素进行绑定，v-bind 是单向的

对数据进行处理的专用修饰符

将输入的数据转换为数字 `v-model.number='xxx'`

去除首尾空格 `v-model.trim='xxx'`

在修改的过程中不双向更新，只有修改完毕才进行更新 `v-model.lazy='xxx'`

### 条件渲染指令

`v-if` 会动态的移除和创建元素，如果元素默认是不显示的且用户在离开页面都不会触发显示这个元素用 `v-if`

`v-show` 只是隐藏元素，设置 display 属性，如果要频繁切换元素，用 `v-show` 性能更好

绝大多数不考虑性能问题，直接使用 `v-if`

`v-else` 必须配合 `v-if` 使用，除此之外还有 `v-else-if`

### 列表渲染指令

`v-for` 基于一个数组渲染一个列表结构，需要使用 `item in list` 的形式（item 是被循环的一项，list 是数组）

```js
data:{
  list:[
    {id:1,name:'zs'},
    {id:2,name:'ls'}
  ]
}
<li v-for="item in list" :key="item.id" >{{item.name}}</li>
```

`v-for` 支持可选第二个参数 `v-for="(item,index) in list"`即取出数组的索引

在使用 `v-for`，需要绑定`:key="item.id"`,尽量将 id 作为 key 的值（key 的值只能是字符串或数字且不能重复）

vue 中列表循环需加`:key="唯一标识"` ，唯一标识一般是 item 里面 id ，因为 vue 组件高度复用增加 Key 可以标识组件的唯一性 ，key 的作用主要是为了高效的更新虚拟 DOM

## 过滤器 侦听器 计算属性

### 过滤器

过滤器常用于文本格式化，用于插值表达式和 `v-bind` 属性绑定

过滤器要被添加在 js 表达式的尾部，通过管道符`|`进行调用

过滤器函数要被定义在 `filters` 节点下，和 `data`，`methods` 同级

过滤器中的函数一定要有一个返回值 过滤器中的形参永远是管道符前面的值

私有过滤器和全局过滤器

在 `filters` 节点下的过滤器是私有过滤器，如果需要在多个 vue 实例中共享过滤器，可以通过 `Vue.filter()`定义全局过滤器

```js
// 私有过滤器
filters:{
//（使用时没有参数，即{{msg|filterA}}）
  filterA(value){
    return '￥'+value
  }
}
// 全局过滤器
Vue.filter('cap', function (str) {
  str.charAt(0).toUpperCase()
})
```

格式化时间可以使用第三方包 day.js

连续调用过滤器 `item.time|xxx|xxx|xxx`

过滤器本身是 js 函数，可以传参，但注意第一个参数永远是管道符前的数据

### 侦听器

watch 侦听器可以监视数据变化并做出对应操作，本质是一个函数，要监视哪个数据就把数据名作为方法名，新值在前，旧值在后

```js
data: { username: '' },
watch: {
  usename(newVal, oldVal){
    console.log(newVal, oldVal)
  }
}
```

方法格式侦听器和对象格式侦听器

方法格式侦听器不会在进入页面的时候立刻触发，且如果侦听的是对象也无法侦听对象的变化

```js
watch:{
  usename(newVal, oldVal){
    console.log(newVal, oldVal)
  }
}
```

对象格式侦听器可设置 `immediate` 属性为 `true` 即可自动触发一次，设置 `deep` 为 `true` 可监听对象的变化，`handler` 是监听数据变化

```js
watch: {
  usename: {
    handler(newVal, oldVal){
      console.log(newVal, oldVal)
    },
    immediate: true，
    deep: true
  }
}
```

如果需要侦听对象的单个属性变化则使用对象.属性，需要单引号包裹

```js
watch: {
  'info.usename': {
    handler(newVal, oldVal){
      console.log(newVal, oldVal)
    },
    immediate: true，
    deep: true
  }
}
```

### 计算属性

通过一系列的运算得到一个属性值，通过 `computed` 节点声明，实现了代码的复用，且依赖的数据变化了，会重新求值

```js
computed: {
  // 计算属性的 getter
  reversedMessage() {
    // 这个函数只会在 `message` 发生变化时才会重新执行
    return this.message.split('').reverse().join('');
  }
}
```

## 组件

组件是对 UI 结构的复用，vue 组件是以.vue 为后缀的，每个组件由 `template+script+style` 三部分组成，template 内只能有一个根元素 div，style 内想要使用 less 语法需要在 style 内加 `lang='less'`

```js
//script的默认写法，默认导出
<script>
export default{
  // data 是数据源但不能指向对象
  // data必须是一个函数
  // 注：Vue 实例中的 data 是对象，Vue 组件中的 data 必须是函数返回值，vue 实例一般情况不会复用，所以 vue 实例 data 可以是一个对象。但是设计组件的目的就是为了复用，所以组件内的 data 不能是对象。
  data(){
    //通过return将数据返回出去
    return{
      username:'admin'
    }
  }
}
</script>
```

使用组件的三个步骤

1、使用 import 导入组件

2、在 script 中使用 `components` 节点注册组件

3、以标签的形式在 template 中使用

全局组件

在 maim.js 内通过 import 导入组件

`Vue.component('xxx',import 的组件)`

### 组件的 Props

props 是组件的自定义属性，合理使用 props 可以提高组件的复用性，props 属性和 data 平级

porps 属性是只读的，尽量避免直接修改 props 的值,如果需要修改就把 props 重新赋值放到 data 内

props 可以使用 default 设置默认值

```js
props:{
  init:{
    default: 0
  }
}
```

props 传入的默认是字符串，type 可指定 props 的属性，可以是数字、字符串或布尔值 require 设置是否必传

```js
props:{
init:{
  default: 0,
  type: Number，
  require: true,
  }
}
```

### 组件中的样式冲突

默认情况下，.vue 的组件样式是全局生效的

解决方法：在 style 标签加 scope 属性

如果父组件中要改子组件的样式，需要在样式前加

`/deep/`、 `::v-deep`多用于修改第三方库组件（vant、element-ui）样式的需求

### 组件的生命周期

组件从创建====运行====销毁的过程是组件的生命周期

组件创建阶段

`beforeCreat` 创建之前

`created` 已被创建（用来发起 ajax 请求）

`beforeMount` 被渲染之前

`mounted` 已被渲染（可以操作 dom）

组件运行阶段

`beforeUpdate` 运行之前

`updated` 已被运行（拿到最新的数据）

组件销毁阶段

`beforeDestory` 销毁之前

`destoryed` 已被销毁

### 组件之间的数据共享

1、父向子组件数据传递，使用自定义属性

```js
// 父组件
<template>
<div class="left">
  <p>我是父组件</p>
  <MySon :msg = "message"></MySon>
</div>
</template>

<script>
import MySon from '@/components/MySon'
export default {
  name: "Father",
  components: { MySon },
  data(){
    return {
      message: '我是父组件给子组件的消息'
    }
  }
}
</script>
// 子组件Son
<template>
<div>
  <p>父组件向count子组件传的值：{{msg}}</p>
</div>
</template>

<script>
export default {
  name: "Son",
  props:{
    msg:{
      type:String
    }
  },
}
</script>

```

2、子组件向父组件传数据，使用自定义事件 `this.$emit('change',this,count)`

```js
// 父组件
<template>
<div>
  <p>我是父组件 子组件传的值是{{num}} </p>
  <MySon @change = "changeNumber">+1</MySon>
</div>
</template>

<script>
import MySon from '@/components/MySon'
export default {
  name: "Father",
  components: { MySon },
  data(){
    return {
      num: ''// 用于接收子组件的值
    }
  },
   methods:{
    changeNumber(num){
      this.num = num
    }
  }
}
</script>


// 子组件
<template>
<div>
  <p>我是子组件</p>
  <button @click = "send">传值</button>
</div>
</template>

<script>
export default {
  name: "Son",
  data(){
    return {
      number:5
    }
  },
  methods:{
    send(){
      this.$emit('change',this.number)
    }
  }
}
</scrip>
```

3、兄弟组件之间的数据共享是 EventBus

创建一个 `eventBus.js` 模块，并向外共享实例 vue

```js
import Vue from 'vue'
export default new Vue()
```

在发送方使用 methods 调用 bus.$emit 方法

```js
<button @click = "share">点击把数据发送给right.vue</button>

<script>
import bus from '../assets/eventBus';
export default {
name: "Left",
  data(){
    return {
      brother:'兄弟组件的信息'
    }
  },
  methods:{
    share() {
      bus.$emit('share',this.brother)
    }
  }
}
</script>
```

在接受方的 created 生命周期中调用 bus.$on 方法

```js
<p>收到的数据:{{str}}</p>

<script>
import bus from '../assets/eventBus';
export default {
  name: "Right",
  data(){
    return {
      str:''
    }
  },
  created() {
    bus.$on('share',(val) => {
     this.str = val;
    })
  },
}
```

### ref 引用

在不依赖 jquery 和操作 API 的情况下，获取 dom 元素

在每个 vue 组件的实例上，都包含一个$ref 对象

给要操作的 dom 加 ref 属性，在方法内使用 `this.$refs.属性名` 可以获取 dom

```js
<template>
  <div ref="ref1">我是div标签</div>
</template>
<script>
export default {
  mounted() {
    this.$refs.ref1.style.color = 'red'
  }
}
</script>
```

此方法同样可用以用在子组件上

如果某个组件是动态生成的，不能直接使用 ref 获取到 dom，要等 dom 被渲染完成才能获取到 dom，使用 `this.$nextTick()`函数，相当于一个延时函数

### 动态组件

动态切换组件的显示和隐藏

vue 提供了`<component is='Left'>`标签使用组件，`is`的属性是需要渲染的组件

要渲染的组件可以通过键值对放在 data 中,通过 comName 声明 `comName:'Left'`，之后通过动态属性绑定到 is 上

在 component 外可以使用`<keep-alive>`标签将组件进行缓存，防止被销毁

```js
<keep-alive>
    <component :is = "comName"></component>
</keep-alive>
```

keep-alive 有自己的生命周期

当组件被激活时，会自动触发组件的 `activated` 生命周期函数。

当组件被隐藏时，会自动触发组件的 `deactivated` 生命周期函数。

keep-alive 可以指定缓存的组件，通过 `include` 指定，如果不指定就缓存标签下的所有组件,也可以指定排除性 `exclude`，但不能和 `include` 同时使用

```js
<keep-alive inclued='Left'>
    <component :is = "comName"></component>
</keep-alive>
```

inclued 缓存的值可以在组件内部可以通过 `name` 声明组件名称，主要配合 keep-alive 缓存使用

## 插槽

插槽 Slot 可以将不确定的、希望用户指定的定义为插槽

声明一个插槽区,vue 官方规定每个 `slot` 插槽都要有一个 `name` 名称，如果没有 `name` 属性则 `name` 默认为 `default`

注意：需要指定插槽插入的位置要借助 `template` 标签或 `component` 标签,使用 `v-slot` 绑定插槽的名字

`v-slot:`可简写为`#`

子组件中可以有默认后备内容，当父组件有内容，会覆盖子组件的默认内容

```js
//在子组 Left 中
<slot name='default'>默认内容</slot>

//在父组件中
<Left>
  <template #default >
    <p>123</p>
  </template>
</Left>
```

最后 left 会渲染出 123

在封装组件时为预留的插槽可以提供其他属性，通过`#插槽名='scope'`接收

通过 scope.其他属性可以访问这个属性

```js
//在子组 Left 中
<slot name='default' msg='hello' :user = 'userInfo'></slot>
//在父组件中
<Left>
  <template #default = "{msg , user}" >
    <p>123</p>
    <p>{{user}}</p>
    <p>{{msg}}</p>
  </template>
</Left>
```

## 自定义指令

### 私有自定义指令

在组件中通过 `directives` 节点声明自定义指令，如 `v-color` 指令，指令内的 bind 函数会自动触发

`v-color='red'`，通过传值传的方式传给 color，在 bind 内通过 binding 接收

```js
directive:{
  color:{
    bind(el , binding) {
      el.style.color=bindind.value
    }
  }
}
```

`bind` 只会在第一次被绑定的时候自动触发所以需要 `updeate` 函数进行更新

```js
directive:{
  color:{
    bind(el,binding){
      el.style.color=bindind.value
    },
    update(el,binding){
      el.style.color=bindind.value
    }
  }
}
```

如果 bind 和 update 函数的内容相同，可以简写

```js
directive:{
  color(el,binding){
    el.style.color=bindind.value
  }
}
```

### 全局自定义指令

在 main.js 使用 `Vue.directive()`声明,和过滤器 `filter` 一样，在实际开发中多用全局的自定义过滤器和指令

```js
Vue.directive('color', function (el, binding) {
  el.style.color = bindind.value
})
```

## 路由

`router`就是地址和组件的对应关系

`hash` 地址本质是**锚链接**，通过 a 标签指向 ID 访问，但会产生浏览历史即浏览器的前进后退可用，在 url 内#号和后面的地址为 hash 地址

用 `onhashchange` 事件可以监听路由发生变化

vue-route 是 vue.js 官方给出的路由解决方案

### 基本用法

安装 vue-route `npm i vue-route -S`

在 src 下创建一个 router 文件夹 并创建 index.js 内进行路由配置

```js
import Vue from 'vue'
import VueRoute from 'vue-router'
//导入需要的组件
import Home form '@/components/Home.Vue'
//调用 Vue.use（），把 VueRouter 安装为 Vue 插件
Vue.use(VueRouter)
//创建路由实例,并进行配置
const router = new VueRouter(
  //定义 hash 地址和组件之间的对应关系
  routes:[
    //路由规则
    {path:'/home',component: Home}
  ]
)
​
//导出 router
export default router
```

在 Vue 中要使用路由需要在 main.js 内进行挂载

```js
//在导入模块的时候，如果是给定的是文件夹，则默认导入文件夹的 index.js
//在 new Vue 中挂载 router
import router from @/router/index.js
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
```

使用 router-view 组件，本质是一个占位符

`<router-view></router-view>`

使用 router-link to='xxx'代替 a 标签

`<router-link to="/home"></router-link>`

### 路由重定向

使用 redirect 属性重定向路由

```js
const router = new VueRouter(
  routes:[
    //路由重定向
    {path:'/',redirect:'/home'}
    //路由规则
    {path:'/home',component:Home}
  ]
)
```

### 嵌套路由

即子组件中的路由，在子组件中使用 router-link 添加路由并使用 router-view 占位符

`<router-link to="/home/tab1"></router-link>`

在 router 的 index.js 内对应的组件添加 children 属性

```js
const router = new VueRouter(
  routes:[
      //路由重定向
      {path:'/',redirect:'/home'}
      //路由规则
      {
        path:'/home',
        component:Home,
        children: [
          {path:'tab1',component:Tab1}
        ]
    }
  ]
)
```

如果子组件中有一个 path 为空字符串，则它是默认子路由

### 动态路由匹配

在路由规则内可以使用英文的`:`来定义路由的参数

`{path:'/home/:id',component:'Home'}`

在对应组件中使用 `this.$route.params.id` 可以访问到对应参数

通过 `this.$route.query` 可以访问带`?`传的查询参数

通过 `this.$route` 的 path 可以访问路径，通过 `fullpath` 可以访问完整路径

或在路由中开启 props 传参

`{path:'/home/:id',component:'Home',props:true}`

就可以在 props 内拿到 id

### 常见用法

vue 常用的编程式导航`this.$router`

`this.$router.path('hash 地址')`

跳转到对应 hash 地址，并增加一条历史记录

`this.$router.replace('hash 地址')`

跳转到对应 hash 地址，不增加历史记录

`this.$router.go(数值 n)`

数值为正代表前进，为负代表后退，一般只会前进和后退一层

前进 `this.$router.forward()`

后退 `this.$router.back()`

### 导航守卫

导航守卫可以控制路由的访问权限

每次发路由跳转时，通过 `router.beforeEach(fn)`调用一个回调函数

```js
const router = new VueRouter(
  routes:[
    //路由重定向
    {path:'/',redirect:'/home'}
    //路由规则
    {path:'/home',component:Home,
    children: [
      {path:'tab1',component:Tab1}
      ]
    }
  ]
)
router.beforeEach(function(to,from,next){
  //to 是要去的路由
  //from 是要离开的路由
  //next()是放行函数
  //next('/login')hash 地址强制跳转
  //next(false)禁止跳转
  if(to.path==='/main'){
    //访问的是主页
    const token = localStroage.getItem('token')
    //查看是否登录即是否有 token
    if(token){
      next()//如果有直接放行
    }else{
      next('/login')//没有就强制跳转到登录
    }
  }else{
    next()//访问的不是主页，直接放行
  }

})
```

## 其他

常见 vuter 报错解决 在 eslintrc.js 的 rules 内新增规则并重启服务器
`'space-before-function-paren':['error','never']`

vue.config.js[api 文档](https://cli.vuejs.org/zh/config/)

vue.config.js 内配置跨域

```js
module.exports = {
  publicPath: './',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // 要请求的 API
        changeOrigin: true, // 是否开启跨域
        pathRewrite: {
          '^/api': '' // 重写路由
        }
      }
    }
  }
}
```
