官方文档
vue 官方文档

项目搭建
// 在 cmd 终端输入下方命令，查看@vue/cli 版本，确保@vue/cli 版本在 4.5.0 以上 vue --version

// 如果 vue/cli 版本过低或上方命令报错，需要安装或者升级你的@vue/cli npm install -g @vue/cli

// 创建新项目 vue create vue_test

// 可视化创建新项目 vue ui

根据需求创建即可，版本选 vue3（默认是 vue2）

Composition API(组合式 API)
Composition API 将 vue 中的很多功能拆分成了一个一个的 hook

可以理解为 Vue3 中一个新的配置项，值为一个函数

setup()
setup 是所有 Composition API(组合式 API)的入口

在 setup 函数内的 this 指向 undefined
setup 函数是处于生命周期函数 beforeCreate 和 Created 两个钩子函数之前的函数，也就说在 setup 函数中是无法使用 data 和 methods 中的数据和方法的
在 setup 函数中定义的变量和方法最后都是需要 return 出去的，不然无法在模板中使用
注意：如果 data 内的变量和 setup 函数内的变量重名，优先使用 setup 里面的变量
setup 可以接受参数 props 和 content

setup(props, content){} 或者===>setup(props, { attrs, slots, emit }) {}

props 参数
组件外部传递进入或组件内部声明已经接收的属性

// 父组件
<son :name="obj.name"></son>
// 子组件
<template>

  <div>
    <h1>我是子组件</h1>
    <div>{{ name }}</div>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String }
  },
  setup(props, context) {
    console.log(props)
}
</script>

context 参数
包含 attrs，slots 和 emit，content 参数可以解构

attrs 是组件外部传递进入组件的值，但组件内部未在 props 内声明，即可使用 context.attrs 得到

// 父组件
<son :name="obj.name" :age="obj.age"></son>
// 子组件

<script>
export default {
  props: {
    name: { type: String }
  },
  setup(props, context) {
    console.log(props)
    console.log(context.attrs.age)// 此时未在props声明age
}
</script>

emit 用于分发自定义函数，等同于 this.$emit，可用于子向父传值

// 子组件
<button @click="son">子组件</button>

<script>
export default {
  setup(props, context) {
    const son = () => {
      context.emit('change', 50)
    }
    return { son }
  }
}
</script>

// 父组件
<template>

  <div>
    <h1>我是父组件</h1>
    <div>子组件可以改变我的值{{ sonval }}</div>
    <div>---------------------------------------</div>
    <son :name="obj.name" :age="obj.age" @change="formSon"></son>
  </div>
</template>
<script>
import son from '../components/son.vue'
import { ref } from 'vue'

export default {
name: 'Father',
components: { son },
setup() {
let sonval = ref(0)
const formSon = val => {
sonval.value = val
}
return { formSon, sonval }
}
}
</script>
对于生命周期而言，在 vue2 中函数的生命周期和 data 平级声明即可

data() {
return {}
},
beforeCreate() {
console.log('created')
},
method: {}
setup() {
console.log('======setup=========')
onBeforeMount(() => {
console.log('======onBeforeMount=========')
})
onMounted(() => {
console.log('======onMounted=========')
})
onBeforeUpdate(() => {
console.log('======onBeforeUpdate=========')
})
onUpdated(() => {
console.log('======onUpdated=========')
})
onBeforeUnmount(() => {
console.log('======onBeforeUnmount=========')
})
onUnmounted(() => {
console.log('======onUnmounted=========')
})
}
slots 可以获取插槽的内容，相当于 this.$slots

// 子组件
<template>

  <div>
    <h1>我是子组件</h1>
    <slot name="son">
      <div>默认插槽</div>
    </slot>
  </div>
</template>
<script>
export default {
  props: {
    name: { type: String }
  },
  setup(props, context) {
    console.log(context.slots.son()[0])// 获取slot的信息
  }
}
</script>
// 父组件
 <son>
    <template v-slot:son>
      <p>我是父组件呵呵哈哈哈</p>
    </template>
  </son>
setup语法糖
vue3.2开始，在script脚本上声明setup会自动将所有顶级函数和变量自动暴露给模板使用

<template>
  <div>
    {{ name }}
    <button @click="changeName">改变名字</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const name = ref('user')
const changeName = () => {
  name.value = 'newUser'
}
</script>

因为没有了 setup 函数，如果需要使用 props，emit，attrs 等参数，需要调用相关函数

defineProps 用来接收父组件传来的 props

defineEmits 用来声明触发的事件

useAttrs 用来接收父组件传递但子组件未使用 props 接收的变量

useSlots 用来获取插槽相关信息

const emit = defineEmits(['change'])
const props = defineProps(['age'])
const slots = useSlots()
const attrs = useAttrs()
数据定义
ref
使用 ref 可以定义一个响应式数据 const xxx=ref(initValue)

使用前需要按需导入，ref 定义的响应式数据修改数据时必需要.value

<script setup>
import { ref } from 'vue'
// 括号内的为初始值
// 基本数据类型 number,string,boolean
let name=ref('张三');
let age=ref(18);
let isMarry=ref(false);
// 使用ref定义数组
let hobby=ref(['吃饭','睡觉','打豆豆']);
// 使用ref定义对象
let user=ref({
  idCard:'身份证',
  nation:['中国','美国','英国','俄罗斯']
})
const changeName = () => {
  name.value = 'newUser'// name.value修改数据
}
</script>

reactive 函数
使用 reactive 可以定义一个响应式数据 const 代理对象=reactive(被代理的对象)接收一个对象(或数组)，返回一个代理器对象(Proxy 的实例对象，简称 Proxy 对象)

使用前需要按需导入

<script setup>
import { reactive } from 'vue'
let student=reactive({
  name:'张三',
  age:19,
  hobbies:['吃饭','睡觉','打豆豆']
});
console.log(student)
const changeName = () => {
  student.name = '李四' // 直接修改数据
}
</script>

reactive 与 ref
ref 多用来定义：基本类型数据

reactive 多用来定义：对象(或数组)类型数据

注意：ref 也可以用来定义对象（或数组）类型的数据，它内部会自动通过 reactive 转为代理对象

两者原理

ref 通过 Object.defineProperty()的 get 和 set 实现(响应式)数据劫持

reactive 通过使用 Proxy 来实现响应式(数据劫持),并通过 Reflect 操作源对象内部的数据 从使用角度

所以 ref 操作数据需要.value,但 reactive 定义的数据可以直接修改

toRef、toRefs
使用 toRef 创建一个 ref 对象，其 value 值指向另一个对象中的某个属性值

<template>
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
</template>

<script>
  import {reactive,toRef} from 'vue'
  export default {
    setup(){
      let person=reactive({
        name:'user',
        age:18
      })
      return{
        name:toRef(person,'name'),
        age:toRef(person,'age'),
      }
    }
  }
</script>

toRefs 与 toRef 功能一致，但可以批量创建多个 ref 对象

<template>
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
</template>

<script>
  import {reactive,toRef} from 'vue'
  export default {
    setup(){
      let person=reactive({
        name:'user',
        age:18
      })
      return{
        ...toRefs(person)
      }
    }
  }
</script>

生命周期
Vue2 Vue3
beforeCreate setup
created setup
beforeMount onBeforeMount
mounted onMounted
beforeUpdate onBeforeUpdate
updated onUpdated
beforeDestory onBeforeUnmount
destoryed onUnmounted
activated onActivated
deactivated onDeactivated
vue2 推荐将生命周期函数和 data,methods 平级定义

vue3 推荐将生命周期函数定义在 setup 函数内部

setup(){
console.log("======setup=========");
onBeforeUnmount(()=>{
console.log("======onBeforeUnmount=========");
})
onMounted(()=>{
console.log("======onMounted=========");
})
onBeforeUpdate(()=>{
console.log("======onBeforeUpdate=========");
})
onUpdated(()=>{
console.log("======onUpdated=========");
})
onBeforeUnmount(()=>{
console.log("======onBeforeUnmount=========");
})
onUnmounted(()=>{
console.log("======onUnmounted=========");
})
}
数据处理
shallowRef 和 shallowReactive
shallowReactive：只处理对象最外层属性的响应式(浅响应式)，对深层次的数据不会改变视图但会改变数据

shallowRef: 只处理基本数据类型的响应式，不进行对象的响应式处理

如果有一个对象数据，结构比较深，但变化时只是外层属性变化用 shallowReactive

如果有一个对象数据，后续功能不会修改该对象中的属性，而是生新的对象来替换用 shallowRef

readonly 和 shallowReadonly
readonly:让一个响应式数据变为只读的(深只读)，所有的数据将无法被修改

shallowReadonly:让一个响应式变为只读的(浅只读)，基本数据类型无法被修改，对象可以被修改

toRaw 和 markRaw
toRaw 将一个由 reactive 生成的响应式对象转为普通对象对这个普通对象的所有操作，不会引起页面更新，对 ref 定义的响应式数据无效！

markRow 标记一个对象，使其永远不会再成为响应式对象。有些值不应该被设置为响应式的，例如复杂的第三方类库，当渲染具有不可变的数据源的大列表时，跳过响应式转换可以提高性能

响应式数据的判断
isRef：检查一个值是否为 ref 对象

isReactive：检查一个对象是否由 reactive 创建的响应式代理

isReadonly：检查一个对象是否由 readonly 创建的只读代理

isProxy：检查一个对象是否由 reactive 或者 readonly 方法创建的代理

provide 和 inject
用于实现祖与后代组件间通信

<template>
  <h2>我是祖组件</h2>
  <h3>汽车信息</h3>
  <p>名称：{{name}}</p>
  <p>价格：{{price}}</p>
  <inject_component></inject_component>
</template>

<script>
  import {reactive,toRefs,provide} from 'vue'
  export default {
    name: "provide_component",
    setup(){
      let car=reactive({
        name:'宝马',
        price:'40w'
      })
      provide('car',car)  // 提供provide
      return{
        ...toRefs(car)
      }
    }
  }
</script>
<template>
  <h2>我是孙组件</h2>
  <h3>汽车信息</h3>
  <p>名称：{{name}}</p>
  <p>价格：{{price}}</p>
</template>

<script>
  import {inject,toRefs,ref} from 'vue'
  export default {
    name: "inject_component",
    setup(){
      let car=inject("car");    //使用inject接收
      return{
        ...toRefs(car)
      }
    }
  }
</script>

过滤器
vue3 建议使用计算属性代替过滤器，如果需要全局过滤器可以自定义全局属性

// 定义全局属性
app.config.globalProperties.$filters = {
  currencyUSD(value) {
    return '$' + value
}
}
