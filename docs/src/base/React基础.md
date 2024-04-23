基础
React 是用于构建用户的 JS 库（Facebook 开源）

使用 JS 进行操作 DOM 会进行大量的重绘重排列

React 采用组件化模式、声明式编码提高开发效率及组件复用率

React 使用虚拟 DOM 和 Diffing 算法，减少与真实 DOM 的交互

Diffing 算法：当浏览器进行更新时会和旧虚拟 Dom 进行匹配，当匹配到相同的虚拟 Dom 时不进行更新，只更新匹配不到（新的）的虚拟 Dom

Recact 使用 jsx 语法声明元素

基本的 React 使用（后期可用 React 脚手架进行项目搭建，无需引入这些样式和声明）

1、创建一个容器，并引入 react 相关库文件

<div id="test"></div>
<!-- 引入react核心库 -->
<script src="./js/react.development.js"></script>
<!-- 引入react-dom操作dom -->
<script src="./js/react-dom.development.js"></script>
<!-- 引入babel，将jsx转换为js -->
<script src="./js/babel.min.js"></script>
<script type="text/babel">//此处一定要写babel，因为是jsx语法
  // h1标签不能写引号，因为不是字符串，创建虚拟dom
    const VDOM = <h1>Hello,React</h1>
    ReactDOM.render(VDOM,document.getElementById('test'))
</script>
虚拟DOM
虚拟dom本质是一个object对象（一般对象）

虚拟 DOM 比较“轻”，真实 dom 比较“重”，因为虚拟 dom 是 react 内部在使用，无需真实 DOM 那么多属性，但虚拟 DOM 会被 React 使用 Diffing 算法转换为真实 DOM

虚拟 DOM 中 key 的作用

1. .简单的说：key 是虚拟 DOM 对象的标识,在更新显示时 key 起着极其重要的作用。

2. .详细的说：当状态中的数据发生变化时，react 会根据【新数据】生成【新的虚拟 DOM】，

随后 React 进行【新虚拟 DOM】与【旧虚拟 DOM】的 diff 比较，比较规则如下

a. 旧虚拟 DOM 中找到与新虚拟 DOM 相同的 key：

(1) .若虚拟 DOM 中内容没变，直接使用之前的真实 DOM

(2) .若虚拟 DOM 中内容变了,则生成新的真实 DOM,随后替换掉页面中之前的真实 DOM

b. 旧虚拟 DOM 中未找到与新虚拟 DOM 相同的 key

根据数据创建新的真实 DOM,随后渲染到到页面

2.用 ndex 作为 key 可能会引发的问题:

1.若对数据进行：逆力添加、逆序删除等破坏顺序操作:

会产生没有必要的真实 DOM 更新==> 界而效果没问题，但效率低。

2 .如果结构中还包含输入类的 DOM:

会产生错误 DOM 更新==> 界面有问题。

3 .注意：如果不存在对数据的逆序添加、逆序删除等破坏顺序操作,

仅用于演染列表用 f 展示，使用 index 作为 key 是没有问题的。

3.开发中如何选择 key?

1 .最好使用每条数据的唯一标识作为 key,比如 id、手机号、身份证号、学号等唯一值。

2 .如果确定只是简单的展示数据，用 index 也是可以的。

JSX
全称 JavaScript XML，本质上 React 的语法糖 React.createElement(component, props, ...children)，主要是用来简化创建虚拟 DOM

可以使用大括号引入 js 表达式（js 语句和 js 表达式不同，一个表达式会产生一个值，可以使用变量接收到，比如 a，a+b，function，一个语句则是控制代码走向的，如 if、for、swich）

如果需要指定样式要使用 className

如果要使用内联样式要使用 style={{key:value}}

const name = 'React'

<h1>你好，我叫{name}</h1>   //    <h1>你好,我叫React</h1>
渲染List列表
const software = [
  { id: 1, name: '淘宝' },
  { id: 2, name: '京东' },
  { id: 3, name: '拼多多' }
]

function App() {
return (
<div className="App">
<ul>
{
software.map(item => <li>{item.name}</li>)
}
</ul>
</div>
)
}

export default Appt
条件渲染
const flag = true
function App() {
return (
<div className="App">
{flag ? '条件为真' : '条件为假}
</div>
)
}
export default App
脚手架
脚手架是用来帮助程序员快速创建一个基于 xxx 库的模板项目

react 提供了一个用于创建 react 项目的脚手架库: create-react-app

使用脚手架开发的项目的特点: 模块化, 组件化, 工程化

创建项目（npm）
第一步，全局安装：npm i -g create-react-app

第二步，切换到想创项目的目录，使用命令：create-react-app hello-react

第三步，进入项目文件夹：cd hello-react

第四步，启动项目：npm start/yarn start

创建项目(npx)
第一步，npx create-react-app 是固定命令，create-react-app 是 React 脚手架的名称
第二步，react-basic 表示项目名称，可以自定义，保持语义化

第三步，npx 命令会帮助我们临时安装 create-react-app 包，然后初始化项目完成之后会自自动删掉，所以不需要全局安装 create-react-app

组件
React 内的组件分为函数式组件和类式组件

函数式组件
1、组件的名称必须首字母大写，react 内部会根据这个来判断是组件还是普通的 HTML 标签

2、函数组件必须有返回值，表示该组件的 UI 结构；如果不需要渲染任何内容，则返回 null

3、组件就像 HTML 标签一样可以被渲染到页面中。组件表示的是一段结构内容，对于函数组件来说，渲染的内容是函数的返回值就是对应的内容

4、使用函数名称作为组件标签名称，可以成对出现也可以自闭合

// 定义函数组件
function HelloFn () {
return <div>这是我的第一个函数组件!</div>
}

// 定义类组件
function App () {
return (
<div className="App">
{/_ 渲染函数组件 可以使用自闭合标签渲染 _/}
<HelloFn />
<HelloFn></HelloFn>
</div>
)
}
export default App
类的基本知识（类组件的前置知识）
class Person{
//构造器方法
constructor(name,age){
//此处的 this 指向类的实例对象
this.name=name
this.age=age
}
//自定义的一般方法
//方法在类的原型对象上，供实例使用
speak(){
console.log(`我叫${this.name}`)
}
}
const p1 = new Person('tom',18)
console.log(p1)
//创建一个 student 继承自 person
class Student extends Person{
//子类如果是继承自父类，那子类的构造器需要用 super
constructor(name,age,grade){
//用 super 调用父类的属性
super(name,age)
this.grade=grade
}
//重写父类的方法
//方法在类的原型对象上，供实例使用
speak(){
console.log(`我叫${this.name},我在${this.grade}`)
}
}
const s1 = new Stuent('xiao',20,'高一')
console.log(s1)
子类可以调用父类的方法，也可以重写
s1.speak()
类中的构造器不是必须写的，要对实例进行一些初始化的操作，比如添加需要指定属性时

如果 A 类继承了 B 类，且 A 类中写了构造器，那么 A 类中的 super 必须要调用

类中的所有方法都是放在原型对象上的，供实例使用

类式组件
1、类名称也必须以大写字母开头

2、类组件应该继承 React.Component 父类，从而使用父类中提供的方法或属性

3、类组件必须提供 render 方法 render 方法必须有返回值，表示该组件的 UI 结构

// 引入 React
import React from 'react'

// 定义类组件
class HelloC extends React.Component {
render () {
return <div>这是我的第一个类组件!</div>
}
}

function App () {
return (
<div className="App">
{/_ 渲染类组件 _/}
<HelloC />
<HelloC></HelloC>
</div>
)
}
export default App
组件状态
React hook 出来之前，函数式组件是没有自己的状态的

类式组件的三大属性--state
通过更新组件的状态来更新页面

class Counter extends React.Component {
// 初始化状态
state = {
count: 0
}
render() {
// 读取状态
return <button>计数器{this.state.count}</button>
}
}
注意：state 的状态不能直接更改，需要借助 API-setState 修改

class Counter extends React.Component {
// 定义数据
state = {
count: 0
}
// 定义修改数据的方法
setCount = () => {
this.setState({
count: this.state.count + 1
})
}
// 使用数据 并绑定事件
render () {
return <button onClick={this.setCount}>{this.state.count}</button>
}
}
类式组件的三大属性--props（父子传值）
props 主要通过标签属性从组件外向组件内传递数据

props 是只读的，不能直接修改

父传子
import React from 'react'

// 函数式子组件
function FSon(props) {
console.log(props)
return (
<div>
子组件 1
{props.msg}
</div>
)
}

// 类子组件
class CSon extends React.Component {
render() {
return (
<div>
子组件 2
{this.props.msg}
</div>
)
}
}
// 父组件
class App extends React.Component {
state = {
message: 'this is message'
}
render() {
return (
<div>
<div>父组件</div>
<FSon msg={this.state.message} />
<CSon msg={this.state.message} />
</div>
)
}
}

export default App
子传父
import React from 'react'

// 子组件
function Son(props) {
function handleClick() {
// 调用父组件传递过来的回调函数 并注入参数
props.changeMsg('this is newMessage')
}
return (
<div>
{props.msg}
<button onClick={handleClick}>change</button>
</div>
)
}

class App extends React.Component {
state = {
message: 'this is message'
}
// 提供回调函数
changeMessage = (newMsg) => {
console.log('子组件传过来的数据:',newMsg)
this.setState({
message: newMsg
})
}
render() {
return (
<div>
<div>父组件</div>
<Son
msg={this.state.message}
// 传递给子组件
changeMsg={this.changeMessage}
/>
</div>
)
}
}

export default App
使用 propTypes 可以对属性进行规则限制

import PropTypes from 'prop-types'

const List = props => {
const arr = props.colors
const lis = arr.map((item, index) => <li key={index}>{item.name}</li>)
return <ul>{lis}</ul>
}

List.propTypes = {
colors: PropTypes.array
}
props 和 state 的区别
props（“properties” 的缩写）和 state 都是普通的 JavaScript 对象。

它们都是用来保存信息的，这些信息可以控制组件的渲染输出。

它们的一个重要的不同点就是：props 是传递给组件的（类似于函数的形参），而 state 是在组件内被组件自己管理的（类似于在一个函数内声明的变量）。

类式组件的三大属性--refs
使用 React 处理表单元素，一般有两种方式：

受控组件 （推荐使用）
非受控组件 （了解）
受控组件
import React from 'react'

class InputComponent extends React.Component {
// 声明组件状态
state = {
message: 'this is message',
}
// 声明事件回调函数
changeHandler = (e) => {
this.setState({ message: e.target.value })
}
render () {
return (
<div>
{/_ 绑定 value 绑定事件_/}
<input value={this.state.message} onChange={this.changeHandler} />
</div>
)
}
}

function App () {
return (
<div className="App">
<InputComponent />
</div>
)
}
export default Appf
非受控组件 -- 通过 ref 获取 dom 的值
import React, { createRef } from 'react'

class InputComponent extends React.Component {
// 使用 createRef 产生一个存放 dom 的对象容器
msgRef = createRef()

changeHandler = () => {
console.log(this.msgRef.current.value)
}

render() {
return (
<div>
{/_ ref 绑定 获取真实 dom _/}
<input ref={this.msgRef} />
<button onClick={this.changeHandler}>click</button>
</div>
)
}
}

function App () {
return (
<div className="App">
<InputComponent />
</div>
)
}
export default App
ref 通过手动操作 dom 的方式获取文本框的值，文本框的状态不受 react 组件的 state 中的状态控制，直接通过原生 dom 获取输入框的值
不要过度使用 ref，如果发生事件的元素是触发事件的元素，即可以使用 event.target 操作元素

比如是失去焦点获取输入框的值，通过 event.target 可以得到发生事件的 DOM 元素对象

生命周期
生命周期的三个阶段（旧）-- 了解即可
初始化阶段由 ReactDOM.render()触发---初次渲染

constructor()

componentWillMount() // 不常用

render()

componentDidMount()

更新阶段由组件内部 this.setSate()或父组件重新 render 触发

shouldComponentUpdate() // 不常用

componentWillUpdate() // 不常用

render()

componentDidUpdate()

卸载组件 由 ReactDOM.unmountComponentAtNode()触发

componentWillUnmount()

生命周期的三个阶段（新）
初始化阶段: 由 ReactDOM.render()触发---初次渲染

1.constructor()

2.getDerivedStateFromProps() // 允许组件从 props 获取参数并给 state 赋值

3.render() // 初始化会调用且每次更新都会调用

4.componentDidMount() // 通常用来开启定时器、发送 ajax 请求，订阅消息等

更新阶段: 由组件内部 this.setSate()或父组件重新 render 触发

1.getDerivedStateFromProps()

2.shouldComponentUpdate() // 不常用

3.render() // 每次更新都会调用

4.getSnapshotBeforeUpdate() // 获取更新前的属性

5.componentDidUpdate()

卸载组件: 由 ReactDOM.unmountComponentAtNode()触发

1.componentWillUnmount() // 通常用来来关闭定时器、取消订阅

即将废弃的钩子

1.componentWillMount

2.componentWillReceiveProps

3.componentWillUpdate

Hooks 基础
hooks 为函数组件提供了状态且只能在函数组件中使用

Hooks 的作用
1、组件的状态逻辑复用

2、class 组件自身的问题，组件的逻辑复用在 hooks 出现之前，react 先后尝试了 mixins 混入，HOC 高阶组件，render-props 等模式但是都有各自的问题，比如 mixin 的数据来源不清晰，高阶组件的嵌套问题等等 class 组件自身的问题

3、class 组件就像一个厚重的‘战舰’ 一样，大而全，提供了很多东西，有不可忽视的学习成本，比如各种生命周期，this 指向问题等等，而我们更多时候需要的是一个轻快灵活的'快艇'

useState
import { useState } from 'react'

function App() {
// 参数：状态初始值比如,传入 0 表示该状态的初始值为 0
// 返回值：数组,包含两个值：1 状态值（state） 2 修改该状态的函数（setState）
const [count, setCount] = useState(0)
return (
<button onClick={() => { setCount(count + 1) }}>{count}</button>
)
}
export default App

注意：setCount 是一个函数，参数表示最新的状态值

useState 执行逻辑
调用该函数后，将使用新值替换旧值修改状态后，由于状态发生变化，会引起视图变化

组件第一次渲染
1、从头开始执行该组件中的代码逻辑

2、调用 useState(0) 将传入的参数作为状态初始值，即：0

3、渲染组件，此时，获取到的状态 count 值为： 0

组件第二次渲染

1、点击按钮，调用 setCount(count + 1) 修改状态，因为状态发生改变，所以，该组件会重新渲染

2、组件重新渲染时，会再次执行该组件中的代码逻辑

3、再次调用 useState，此时 React 内部会拿到最新的状态值而非初始值，比如，该案例中最新的状态值为 1

4、再次渲染组件，此时，获取到的状态 count 值为：1

注意：useState 的初始值(参数)只会在组件第一次渲染时生效。也就是说，以后的每次渲染，useState 获取到都是最新的状态值，React 组件会记住每次最新的状态值

回调函数的参数
1、如果就是初始化一个普通的数据 直接使用 useState(普通数据) 即可

2、如果要初始化的数据无法直接得到需要通过计算才能获取到，使用 useState(()=>{})

import { useState } from 'react'

function Counter(props) {
const [count, setCount] = useState(() => {
return props.count
})
return (
<div>
<button onClick={() => setCount(count + 1)}>{count}</button>
</div>
)
}

function App() {
return (
<>
<Counter count={10} />
<Counter count={20} />
</>
)
}

export default App
useEffect
组件首次渲染执行一次，以及不管是哪个状态更改引起组件更新时都会重新执行

1、组件初始渲染

2、组件更新 （不管是哪个状态引起的更新）

useEffect 常用于一下场景

1、数据请求 ajax 发送

2、手动修改 dom

3、localstorage 操作

import { useEffect, useState } from 'react'

function App() {
const [count, setCount] = useState(0)

useEffect(()=>{
// dom 操作
document.title = `当前已点击了${count}次`
})
return (
<button onClick={() => { setCount(count + 1) }}>{count}</button>
)
}

export default App
添加依赖项控制执行时机
1、添加空数组

添加空数组后本次 useEffect 将只执行一次

useEffect(()=>{
console.log('副作用执行了')
},[])
2、添加依赖项

添加依赖项后 useEffect 将根据依赖项的变化执行

function App() {  
 const [count, setCount] = useState(0)  
 const [name, setName] = useState('zs')

    useEffect(() => {
        console.log('副作用执行了')
    }, [count])

    return (
        <>
         <button onClick={() => { setCount(count + 1) }}>{count}</button>
         <button onClick={() => { setName('cp') }}>{name}</button>
        </>
    )

}
3、清理副作用

如果想要清理副作用 可以在副作用函数中的末尾 return 一个新的函数，在新的函数中编写清理副作用的逻辑

注意执行时机为：

1、组件卸载时自动执行

2、组件更新时，下一个 useEffect 副作用函数执行之前自动执行

import { useEffect, useState } from "react"

const App = () => {
const [count, setCount] = useState(0)
useEffect(() => {
const timerId = setInterval(() => {
setCount(count + 1)
}, 1000)
return () => {
// 用来清理副作用的事情
clearInterval(timerId)
}
}, [count])
return (
<div>
{count}
</div>
)
}

export default App
发起网络请求
useEffect(()=>{  
 async function fetchData(){  
 const res = await axios.get('http://geek.itheima.net/v1_0/channels')
console.log(res)  
 }
},[])
useRef
在函数组件中获取真实的 dom 元素对象或者是组件对象

import { useEffect, useRef } from 'react'
function App() {  
 const h1Ref = useRef(null)  
 useEffect(() => {  
 console.log(h1Ref)  
 },[])  
 return (  
 <div>  
 <h1 ref={ h1Ref }>this is h1</h1>  
 </div>  
 )
}
export default App
注意：函数组件由于没有实例，不能使用 ref 获取，如果想获取组件实例，必须是类组件

class Foo extends React.Component {  
 sayHi = () => {  
 console.log('say hi')  
 }  
 render(){  
 return <div>Foo</div>  
 }
}

export default Foo

import { useEffect, useRef } from 'react'
import Foo from './Foo'
function App() {  
 const h1Foo = useRef(null)  
 useEffect(() => {  
 console.log(h1Foo)  
 }, [])  
 return (  
 <div> <Foo ref={ h1Foo } /></div>  
 )
}
export default App
useContext
用于给

import { createContext, useContext } from 'react'
// 创建 Context 对象
const Context = createContext()

function Foo() {  
 return <div>Foo <Bar/></div>
}

function Bar() {  
 // 底层组件通过 useContext 函数获取数据  
 const name = useContext(Context)  
 return <div>Bar {name}</div>
}

function App() {  
 return (  
 // 顶层组件通过 Provider 提供数据  
 <Context.Provider value={'this is name'}>  
 <div><Foo/></div>  
 </Context.Provider>  
 )
}

export default App
fetch-除 xhr 外的发送 ajax 请求的方式
jquery 和 axios 都是基于 xhr(XMLHttpRequest)发送 ajax 请求

fetch: 原生函数，不再使用 XmlHttpRequest 对象提交 ajax 请求

注意：老版本浏览器可能不支持

Get 请求：

fetch(url).then(function(response) {
return response.json()
}).then(function(data) {
console.log(data)
}).catch(function(e) {
console.log(e)
});
Post 请求

fetch(url, {
method: "POST",
body: JSON.stringify(data),
}).then(function(data) {
console.log(data)
}).catch(function(e) {
console.log(e)
})
路由
基础
一个路由就是一个映射关系(key:value)

key 为路径, value 可能是 function（后端路由，当前端请求时返回函数调用的结果）或 component（前端路由）

后端路由

1. 理解： value 是 function, 用来处理客户端提交的请求。

2. 注册路由： router.get(path, function(req, res))

3. 工作过程：当 node 接收到一个请求时, 根据请求路径找到匹配的路由, 调用路由中的函数来处理请求, 返回响应数据

前端路由

1. 浏览器端路由，value 是 component，用于展示页面内容。

2. 注册路由: <Route path="/test" component={Test}>

3. 工作过程：当浏览器的 path 变为/test 时, 当前路由组件就会变为 Test 组件

React 路由
插件库：react-router-dom

Link
导航区的 a 标签改为 Link 标签

<Link to="/home">Home</Link>

Route
展示区的 Route 进行路径与组件匹配

<Route path='/home' component={Home}/>

BrowserRouter 和 HashRouter
在 index 的 APP 外包裹<BrowserRouter>或<HashRouter>

区别

1.底层原理不一样：

BrowserRouter 使用的是 H5 的 history API，不兼容 IE9 及以下版本。

HashRouter 使用的是 URL 的哈希值。

2.path 表现形式不一样

BrowserRouter 的路径中没有#,例如：localhost:3000/demo/test

HashRouter 的路径包含#,例如：localhost:3000/#/demo/test

3.刷新后对路由 state 参数的影响

(1).BrowserRouter 没有任何影响，因为 state 保存在 history 对象中。

(2).HashRouter 刷新后会导致路由 state 参数的丢失！！！

4.备注：HashRouter 可以用于解决一些路径错误相关的问题。

NavLink
NavLink 是 Link 标签的升级版，如果被点击时想添加属性可以使用 activeClassName="属性名"

<NavLink activeClassName="backColor" to="/about">About</NavLink>

对 NavLink 进行封装，标签体的内容会通过 props 属性的 children 传递给子组件，所以可以直接结构赋值出所有的 props

import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
​
export default class index extends Component {
render() {
// 封装 NavLink，backColor 是自定义的选中样式
return (
<NavLink activeClassName='backColor' {...this.props} />)
}
}
Swich
Swich 标签可以进行单一匹配，如果两个路由的地址相同但组件不同，默认会展示两个组件

使用 swich 可以避免展示两个组件，匹配到第一个就不继续进行匹配

Redirect
一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到 Redirect 指定的路由

<Switch>
    <Route path="/about" component={About}/>
    <Route path="/home" component={Home}/>
    <Redirect to="/about"/>
</Switch>
路由样式丢失
在public的index.html中可能会引入外部样式，因为路由的原因导致样式丢失

解决方法：

1.public/index.html 中 引入样式时不写 ./ 写 / （常用）

2.public/index.html 中 引入样式时不写 ./ 写 %PUBLIC_URL% （常用）

3.使用 HashRouter 代替 BrowserRouter（少用）

路由模糊匹配与精准匹配
路由的匹配规则默认为模糊匹配

开启精准匹配<Route exact={true} path="/about" component={About}/>

可以简写<Route exact path="/about" component={About}/>

注意：严格匹配不要随便开启，需要再开，有些时候开启会导致无法继续匹配二级路由

嵌套多级路由
多级路由需要加上父路由的 path 值

路由传参
1.params 参数

路由链接(携带参数)：<Link to='/demo/test/tom/18'}>详情</Link>

注册路由(声明接收)：<Route path="/demo/test/:name/:age" component={Test}/>

接收参数：this.props.match.params

2.search 参数

路由链接(携带参数)：<Link to='/demo/test?name=tom&age=18'}>详情</Link>

注册路由(无需声明，正常注册即可)：<Route path="/demo/test" component={Test}/>

接收参数：this.props.location.search

备注：获取到的 search 是 urlencoded 编码字符串，需要借助 querystring 的 parse 方法解析

3.state 参数

路由链接(携带参数)：<Link to={{pathname:'/demo/test',state:{name:'tom',age:18}}}>详情</Link>

注册路由(无需声明，正常注册即可)：<Route path="/demo/test" component={Test}/>

接收参数：this.props.location.state

备注：刷新也可以保留住参数

编程式路由导航
可以在不借助 Link 和 NavLink 的情况下进行导航的跳转

借助 this.prosp.history 对象上的 API 对操作路由跳转、前进、后退

this.prosp.history.push(要去往的路由)

this.prosp.history.replace(要取代的路由，不留下历史记录)

this.prosp.history.goBack()后退一步

this.prosp.history.goForward()前进一步

this.prosp.history.go(n)后退或前进 n 步，n 为负值是后退

withRouter
路由组件有自带的三个 props 属性，而如果是自己用标签注册的组件则没有 props 属性

history

location

match

如果一般组件也想使用路由组件的特有 API 可以使用 withRouter

导入 withRouter，并在导出组件时使用 withRouter(组件名)方法导出，返回一个新组件

import {withRouter} from 'react-router-dom'
export default withRouter(组件名)
