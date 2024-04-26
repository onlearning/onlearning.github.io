# Vue2 踩坑

## 虚拟 DOM 不渲染数据

问题描述：消息已读和未读的功能，点击消息，消息会变成已读，重新请求数据，在重新请求数据前会先清空旧数据，但是因为两次的数据一样，导致 vue 的 diff 算法默认不更新视图，使用 `this.$set` 和 `this.$forceUpdate` 等方法都不能解决问题

解决方法：在列表项加 `v-if='list.length'`，vue 的 diff 算法会监测数组变化，响应式地渲染列表。

## eventBus 传值及累加触发问题

1、`eventBus` 在兄弟组件之间传值如果且触发了路由跳转（A 页面跳转至 B 页面）会导致第一次传值失败

原因：B 页面没有被创建导致发送失败，如果在 B 页面 `creted` 内使用 `bus.$on`会发生`bus.$on` 先触发，A 页面的 `bus.$emit` 后触发，导致 B 页面接收不到参数

解决方法：

```js
// 在发送方 A 页面使用 this.this.$nextTick(()=>{})
// 在接收方 B 页面正常接收即可
this.$nextTick(() => {
  bus.$emit('eleOpen', this.openEle)
  console.log('bus.$emit')
})
```

2、`bus.$on` 多次触发的问题

这个`$on` 事件是不会自动清除销毁的，需要我们手动来销毁，如果不进行销毁可能会导致事件多次触发

```js
// 在 B 组件页面中添加以下语句，在组件 beforeDestory 的时候销毁。
beforeDestroy () {
  bus.$off('get', this.myhandle)
},
```

3、在 `created` 里面发起请求或接收兄弟组件的参数，在 `mounted` 内无法调用到 `created` 内参数值

原因：虽然按照生命周期是 `created` 在前，`mounted` 在后，但生命周期异步加载需要时间，如果延迟时间是可以获取到数据的，但是问题是不知道需要延迟多久，所以最好不要使用定时器处理。

解决方法：

1、在 `created` 生命周期内进行异步数据的请求，且将获取到的数据赋值给 `this.data`。

2.此时如果在 `mounted` 生命周期里获取 `this.data` 是获取不到的。

3.不要在 `mounted` 内处理数据在 `watch`内使用 `this.$nextTick` 处理即可

```js
// 在 data 定义数据
data(){
  isOpenDialog: false
}
// 在 watch 内监听
watch: {
  isOpenDialog() {
    this.$nextTick(() => {
      // 在这里可以获取和处理数据
    })
  }
}
```

## this.$nextTick()的使用

`this.$nextTick()`将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。它跟全局方法 `Vue.nextTick` 一样，不同的是回调的 this 自动绑定到调用它的实例上。

## vue 打包报错

`Failed to load resource: net::ERR_FILE_NOT_FOUND`

解决方法：

在项目根目录创建名为 vue.config.js 的文件夹

在该文件内输入以下代码重新打包

```js
module.exports = {
  publicPath: './'
}
```
