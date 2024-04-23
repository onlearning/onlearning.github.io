1、VUE2 和 VUE3 对比
响应式区别
vue2 的响应式原理是利⽤ es5 的⼀个 API ，Object.defineProperty()对数据进⾏劫持结合发布订阅模式的⽅式来实现的。

vue3 中使⽤了 es6 的 proxy API 对数据代理，通过 reactive() 函数给每⼀个对象都包⼀层 Proxy，通过 Proxy 监听属性的变化，从⽽ 实现对数据的监控。

这⾥是引相⽐于 vue2 版本，使⽤ proxy 的优势如下

defineProperty 只能监听某个属性，不能对全对象监听

可以省去 for in、闭包等内容来提升效率（直接绑定整个对象即可）

可以监听数组，不⽤再去单独的对数组做特异性操作,通过 Proxy 可以直接拦截所有对象类型数据的操作，完美⽀持对数组的监听。 （vue3.x 可以检测到数组内部数据的变化）

生命周期
创建前：beforeCreate=> 使用 setup()

创建后：created => 使用 setup()

挂载前：beforeMount => onBeforeMount

挂载后：mounted=> onMounted

更新前：beforeUpdate => onBeforeUpdate

更新后：updated => onUpdated

销毁前：beforeDestroy => onBeforeUnmount

缓存前：activated=> onActivated

缓存后：deactivated=>onDeactivated
2、vue 插槽
插槽就是子组件中的提供给父组件使用的一个占位符，在子组件中用< slot>< /slot > 表示。

父组件可以在这个占位符中填充任何模板代码，如 HTML、组件等，填充的内容会替换子组件的< slot>< /slot >标签。

默认插槽
我们定义两个组件：parent.vue 和 child.vue ，在 parent 组件中引入 child 组件

//parent.vue
<child>
world
</child>
​
//child.vue
<template>

  <div>
    hello <slot>你好</slot>
  </div>
</template>
这样，组件在渲染的时候，<slot></slot>就会被渲染为：hello world，如果在<child></child>中没有放任何内容，就会渲染出子组件的默认内容：hello 你好

具名插槽
有时候，我们在一个组件中需要使用多个插槽，那么为了区分它们，就可以给每个插槽命名，这就是具名插槽。

slot 元素有一个特殊的 attribute：name，他可以用来指定额外的插槽：

// 子组件

<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
​
// 父组件
<base-layout>
  <template v-slot:header>
    <h1>header</h1>
  </template>
​
  <p>content</p>
 
​
  <template v-slot:footer>
    <p>footer</p>
  </template>
</base-layout>
使用v-slot指令来指定该部分要渲染的插槽的名字，这样就可以将三部分内容渲染到相应的位置了。不带name的插槽，会有一个默认的名字default。如果想要更明确一些，可以将它的name设置为default：

<template v-slot:default>
    <p> content </p>
</template>
注意：v-slot指令只能添加在template标签上

作用域插槽
一般情况下，是父组件使用查操过程中传入一些内容来决定插槽的内容，他可以访问到父组件中定义的属性，但是不能访问子组件中的数据。如果我们需要子组件以供一些数据，那么就可以使用作用域插槽来解决。

在子组件中动态绑定需要传入的数据：

<slot :data="data"></slot>
​
export default {
data () {
return {
data: {
username: 'hello'
}
}
}
}
在父组件中访问子元素的数据：

<div>
  <test v-slot:default="slotProps">
    {{slotProps.data.username}}
  </test>
</div>
​
// 也可以写成下面这样
<div>
  <test v-slot:"slotProps">
    {{slotProps.data.username}}
  </test>
</div>
需要注意： 如果有多个插槽，只要将default改为对应的插槽名称即可。

插槽的解构
作用域插槽的内部工作原理是将插槽的内容包含在一个带有单个参数的函数里，所以 slot 的值可以接收任何有效的可以出现在函数定义的参数位置上的 JavaScript 表达式。

原本这样写的代码：

<div>
  <test v-slot:"slotProps">
    {{slotProps.data.username}}
  </test>
</div>
可以改成：

<div>
  <test v-slot:{data}>
    {{data.username}}
  </test>
</div>
动态插槽名
在Vue2.6中引入了动态插槽名，动态指令参数使用在v-slot上，来定义动态的插槽名：

<base-layout>
  <template v-slot:[dynamicSlotName]>
    ...
  </template>
</base-layout>
具名插槽的缩写
在Vue2.6中，v-slot可以缩写为#：

<template v-slot:header>
    <h1>header</h1>
</template>
​
// 缩写后
<template #header>
    <h1>header</h1>
</template>
需要注意，该缩写需要在其有名字的情况下才能使用，下面的情况会弹出警告：

<test #:{data}>
{{data.username}}
</test>
如果非要使用缩写的话，必须给他指定一个插槽名：

<test #default:{data}>
{{data.username}}
</test>
3、自定义指令
全局注册
// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
// 当被绑定的元素插入到 DOM 中时……
inserted: function (el) {
// 聚焦元素
el.focus() // 页面加载完成之后自动让输入框获取到焦点的小功能
}
})
局部注册
// 和 data 平级
directives: {
focus: {
// 指令的定义
inserted: function (el) {
el.focus() // 页面加载完成之后自动让输入框获取到焦点的小功能
}
}
}
应用场景
输入框防抖

防抖这种情况设置一个 v-debounce 自定义指令来实现

// 1.设置 v-debounce 自定义指令
Vue.directive('debounce', {
bind: (el, binding) => {
let debounceTime = binding.value; // 防抖时间
if (!debounceTime) { // 用户若不设置防抖时间，则默认 2s
debounceTime = 2000;
}
let cbFun;
el.addEventListener('click', event => {
if (!cbFun) { // 第一次执行
cbFun = setTimeout(() => {
cbFun = null;
}, debounceTime);
} else {
// 阻止事件冒泡并且阻止该元素上同事件类型的监听器被触发
event && event.stopImmediatePropagation();
}
}, true);
},
});
// 2.为 button 标签设置 v-debounce 自定义指令
​
<button @click="sayHello" v-debounce>提交</button>
图片懒加载

设置一个 v-lazy 自定义指令完成图片懒加载

const LazyLoad = {
// install 方法
install(Vue,options){
// 代替图片的 loading 图
let defaultSrc = options.default;
Vue.directive('lazy',{
bind(el,binding){
LazyLoad.init(el,binding.value,defaultSrc);
},
inserted(el){
// 兼容处理
if('IntersectionObserver' in window){
LazyLoad.observe(el);
}else{
LazyLoad.listenerScroll(el);
}
},
})
},
// 初始化
init(el,val,def){
// data-src 储存真实 src
el.setAttribute('data-src',val);
// 设置 src 为 loading 图
el.setAttribute('src',def);
},
// 利用 IntersectionObserver 监听 el
observe(el){
let io = new IntersectionObserver(entries => {
let realSrc = el.dataset.src;
if(entries[0].isIntersecting){
if(realSrc){
el.src = realSrc;
el.removeAttribute('data-src');
}
}
});
io.observe(el);
},
// 监听 scroll 事件
listenerScroll(el){
let handler = LazyLoad.throttle(LazyLoad.load,300);
LazyLoad.load(el);
window.addEventListener('scroll',() => {
handler(el);
});
},
// 加载真实图片
load(el){
let windowHeight = document.documentElement.clientHeight
let elTop = el.getBoundingClientRect().top;
let elBtm = el.getBoundingClientRect().bottom;
let realSrc = el.dataset.src;
if(elTop - windowHeight<0&&elBtm > 0){
if(realSrc){
el.src = realSrc;
el.removeAttribute('data-src');
}
}
},
// 节流
throttle(fn,delay){
let timer;
let prevTime;
return function(...args){
let currTime = Date.now();
let context = this;
if(!prevTime) prevTime = currTime;
clearTimeout(timer);
if(currTime - prevTime > delay){
prevTime = currTime;
fn.apply(context,args);
clearTimeout(timer);
return;
}
timer = setTimeout(function(){
prevTime = Date.now();
timer = null;
fn.apply(context,args);
},delay);
}
}
}
export default LazyLoad;
一键 Copy 的功能

import { Message } from 'ant-design-vue';
const vCopy = { //
/_
bind 钩子函数，第一次绑定时调用，可以在这里做初始化设置
el: 作用的 dom 对象
value: 传给指令的值，也就是我们要 copy 的值
_/
bind(el, { value }) {
el.$value = value; // 用一个全局属性来存传进来的值，因为这个值在别的钩子函数里还会用到
    el.handler = () => {
      if (!el.$value) {
// 值为空的时候，给出提示
Message.warning('无复制内容');
return;
}
// 动态创建 textarea 标签
const textarea = document.createElement('textarea');
// 将该 textarea 设为 readonly 防止 iOS 下自动唤起键盘，同时将 textarea 移出可视区域
textarea.readOnly = 'readonly';
textarea.style.position = 'absolute';
textarea.style.left = '-9999px';
// 将要 copy 的值赋给 textarea 标签的 value 属性
textarea.value = el.$value;
      // 将 textarea 插入到 body 中
      document.body.appendChild(textarea);
      // 选中值并复制
      textarea.select();
      // textarea.setSelectionRange(0, textarea.value.length);
      const result = document.execCommand('Copy');
      if (result) {
        Message.success('复制成功');
      }
      document.body.removeChild(textarea);
    };
    // 绑定点击事件，就是所谓的一键 copy 啦
    el.addEventListener('click', el.handler);
  },
  // 当传进来的值更新的时候触发
  componentUpdated(el, { value }) {
    el.$value = value;
},
// 指令与元素解绑的时候，移除事件绑定
unbind(el) {
el.removeEventListener('click', el.handler);
},
};
export default vCopy;
关于自定义指令还有很多应用场景，如：拖拽指令、页面水印、权限校验等等应用场景

4、Vuex 共享状态
包含 state（数据源）、mutations（数据更新的唯一方法，必须为同步函数）、actions（异步提交 mutation）、getters（数据源的计算属性）、modules（模块化 store）

Vuex 为什么要有异步更新 action
mutation 内部必须是同步函数，因为数据的复用，异步会导致内部状态难以追踪，但有些操作又是异步更新的，所以需要通过 action 提交 dispatch 给 mutation 修改 state

store.commit()是否可以带第三个参数
不可以，多个参数需要用数组或对象的方式传递

5、vue 常识
Vue 实例中的 data 是对象，Vue 组件中的 data 必须是函数返回值
vue 实例一般情况不会复用，所以 vue 实例 data 可以是一个对象。但是设计组件的目的就是为了复用，所以组件内的 data 不能是对象。

如果 vue 实例对象/vue 组件复用时，data 是一个对象，data 属性的数据在不同的页面中会始终同步，那么造成的后果就是不同组件页面的数据会相互影响。比如说 你在首页使用组件时更改了 data 内数据，其他复用该组件的页面也会同步更新，这在正常情况下是我们不希望看到的，当然 vue 官方也不希望我们这么做（语法报错）。

V-if 和 v-show
v-show 隐藏则是为该元素添加 css--display:none，dom 元素依旧还在

v-if 显示隐藏是将 dom 元素整个添加或删除

V-if 和 v-for 能不能同时使用，两者的优先级
vue2 内部 v-for 的优先级是高于 v-if，即每一次 v-if 都需要遍历整个数组，浪费性能

vue3 内部 v-if 的优先级是高于 v-for，同时使用报错

$nextTick()的使用场景
Vue.nextTick() 是 vue 的全局 api，它主要用来在下次 dom 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 dom。 由于 vue 的更新机制是异步的，所以当数据修改之后，dom 还停留在更新之前，此时想要获取更新后的 dom，可以使用 nextTick，表示的是下次 dom 更新循环结束后执行的回调。

应用场景：created 中获取 dom 可以使用 nextTick、异步更新 DOM、异步获取数据、异步更新数据
