# H5 新特性与 ES6

新特性有兼容性问题，需要 i9 以上和移动端才能兼容

## H5 新标签

### 语义化标签

head 头部标签

nav 导航标签

article 内容标签

section 定义文档大的区域，相当于大的 div

aside 侧边栏标签

footer 底部标签

有利于 SEO

可以多次使用

注： 在 IE9 中使用需要转换为块级元素

### 多媒体标签

音频标签 audio（尽量使用 mp3 格式）

视频标签 video（尽量使用 mp4 格式）

### 表单

新增 input 表单 可限制用户输入的数据类型

required 设置为必填项

placeholder 提示文本

autofouces 自动聚焦

autocomplete 记录历史输入文字 默认为打开，关闭可保证安全性

multiple 多文件提交

## CSS3 新特性

同样有兼容性问题，适用于 IE9 及移动端

### 属性选择器

属性选择器（可不借助类和 id 选择器选择元素）选中含有指定属性的元素

```js
<div title="111">111</div>
[title] {
  color: red;
}
```

属性选择器可选择属性等于某个值的元素，一个为 text，一个为 password 选中 text `input[type=text]`

属性选择器可以同样类名开头的元素，比如四个为 i1、i2、i3、i4 开头的 div 可以使用 `div[class^=i]`选中以 i 开头的 div

属性选择器可选择以同样名称结尾的元素，和上面同理，写法 `div[class$=i]`

属性选择器可选择包含某个值的，比如类包含 icon，原理同上，写法 `div[class*=icon]`

属性选择器权重为 10 和类选择器 伪类选择器权重相同

### 结构伪类选择器

选择 ul 的第一个 li 写法 `ul li:first-child`

选择最后一个写法 `ul li:last-child`

选择第 n 个写法 `ul li:nth-child(n)`(n 代表第几，还可以是 even 奇数或 odd 偶数，如果是公式 n，会选择所有的 li)

### 伪元素选择器

可以用 CSS 新建标签元素

`::before` 在元素前插入内容

`::after` 在元素后插入内容

伪元素属于行内标签 必须有 content 属性，和标签选择器一样，权重为 1

可以用于字体图标和清除浮动

## ES6

es6 是 2015 年后发布的 ESMAScript 的版本

### let

声明的变量只在块级中有效即一个大括号内

let 防止循环变量变成全局变量

let 不存在变量提升

let 会存在暂时性死区，在 let 区内的变量不受全局变量影响

### var

var 关键字不具备块级作用域，且会提升变量

### const

const 关键字声明的常量具有块级作用域

const 关键字声明的关键字必须赋值

const 声明的关键字赋值后不能修改（实际是地址不能更改），复杂数据类型（数组）内部数值可以改，但数据本身依旧不可改

### 解构赋值

可以从数组或对象中提取值，将值赋值给另外的变量

```js
let ary = [1, 2, 3]
let [a, b, d] = ary
// a:1 b:2 d:3
// 就可以从 ary 中拿到对应的值
```

### 箭头函数

()=>{函数体},函数体只有一句话可以省略大括号

`const sum=(num1,mun2)=>num1+num2`

如果形参只有一个，小括号也可以省略

`const fn = v =>{函数体}`

箭头函数的 this 指向箭头函数定义位置中的 this

箭头函数在对象内部的 this 指向 window，因为对象不能产生作用域

### 剩余参数

在函数中的参数不确定可以用`...args`接收所有参数

`const sum = (...args)=>{}`

args 为一个数组

### Array 扩展方法

合并数组 `ary=[...ary1,..ary2]`或`ary1.push(...ary2)`

将伪数组转换为数组 `ary=[...ary1]`,就可以使用 push 方法

转换为真数组还可以使用 `Array.from` 方法

`Array.find()`可以返回第一个符合条件的成员

`Array.findIndex()`可以返回第一个符合条件的索引

`Array.includes()`判断是否包含给定的值，返回布尔值

### 字符串扩展方法

使用反引号定义模板字符串

在模板字符串中使用变量只需要`${变量名}`

模板字符串可以换行，可以调用函数

`starsWith()`，字符串是否以某个字符串开头

`endsWith()`，字符串是否以某字符串结尾

`repeat(次数)`，重复某字符串 y 次

### SET 数据结构

类似于数组，不会存储重复的值，常用于搜索历史关键字的存储

本身为一个构造函数

`const s = new Set()`

可以利用 set 创建数组进行去重

`var arr = [...s]`

`add(value)` 向 set 中添加值，返回原 set

`delete(value)` 返回一个布尔值，true 为成功

`has(value)` 是否含有某成员，返回布尔值

`clear()` 清除 set 所有成员

拥有 `forEach` 方法，可以遍历所有成员

### 类

类的本质还是一个函数，可以理解为构造函数的另一种写法，同样可以通过 prototype 添加方法，类就是一个语法糖，更加便捷

类的声明

```js
class Add{
  ​constructor （参数）{
  }
  say(){
  }
}
```

类的调用，通过 new 关键字实例化 `new Add()`

类的内部有一个默认的构造函数 `constructor`，可以接收传递过来的参数

类内部的方法不用 `function` 声明，函数之间不需要逗号隔开

### 继承

通过 `extends` 关键字继承父类

通过 `super` 关键字可以调用父类的方法，在继承中如果子类和父类有相同的方法，会先执行子类的方法，遵循就近原则

`super` 方法必须放在子类的 this 前面

类没有变量提升，需要先有类再实例化对象

再类里面公用的属性和方法需要加 `this` 调用

`constructor` 的 `this` 指向实例对象

方法内的 `this` 指向的是调用的对象

如果在 `constructor` 内部有调用方法需要指向实例对象，则可以先在 `constructor` 内部将 `this` 传递给一个全局变量，然后在方法内进行调用

通过 `appendElement` 添加子元素要先创建一个元素

但是 `insertAdjacentHtml(位置，元素)`则可以直接添加元素，元素可以是字符串，比如`<li>123</li>`

动态添加的模块可以封装起来，初始化的时候让他获取所有的模块，然后更新的时候调用，这样就可以动态加载

`click()`会自动触发点击事件，但如果出使用 click 事件会出现下标越界，可以使用&&并集短路原理，只有前一个为真才执行

双击事件：`ondblclick`

但是双击文字会默认选中文字，所以需要双击文字禁止选中文字

文字处于选中状态，`select()`

### ES6 模块化

ES6 模块化规范是浏览器端和服务器端通用的模块化开发规范

每一个 js 文件都是独立的模块

导入其他模块使用 import

向外共享模块成员使用 export

#### 基本语法

1、默认导出

export default 默认导出成员

```js
// 01.js
let n1 = 10
function show() {}
export default {
  n1,
  show
}
```

**注意：默认导出在一个模块中只允许使用一次**

默认导入 import 接收名称 from '模块'

```js
import m1 from './01.js'
console.log(m1) //{n1:10,show()}
```

2、按需导出

export 按需导入的成员

```js
// 03.js
export let s1 = 'aaa'
export function show() {}
```

按需导入 import {s1} from '模块路径'

```js
import { s1 } from './03.js'
console.log(s1) //aaa
```

注意：按需导出的名称和导入的名称需要一致

可以使用 as 关键字进行重命名

`import {s1 as str1} from './03.js'`

3、直接导入

可以直接执行某个模块中的代码

在一个模块中执行一个 for 循环

```js
// 05.js
for (let i = 1; i < 3; i++) {
  console.log(i)
}
```

在另一个文件直接 import 导入即可

```js
import './05.js'
```

### 回调地狱

多层回调函数相互嵌套 代码可读性很差且难以维护

```js
setTimeout(() => {
  setTimeout(() => {
    setTimeout(() => {}, 3000)
  }, 2000)
}, 1000)
```

ES6 通过 Promise 解决回调地狱

Promise 是一个构造函数，通过构建 Promise 的实例对象代表一次异步操作

```js
const p = new Promise()
p.then(
  result => {},
  error => {}
)
```

通过.then 方法来指定成功或失败的回调函数

因为 promise 函数是异步操作，无法保证函数的执行顺序，可以通过在 promise 函数中 return 一个 promise 方法，使用链式的方法继续调用.then 方法保证执行顺序

```js
thenFs
  .readFile()
  .then(r1 => {
    return thenFs.readFile()
  })
  .then(() => {})
```

在链式中声明一个 catch 方法捕获错误

```js
thenFs
  .readFile()
  .then(r1 => {
    return thenFs.readFile()
  })
  .then(() => {})
  .catch(err => {})
```

**注意**

catch 方法在碰到错误后会阻止后续.then 方法的执行，比如上述第一个文件读取失败，那么两个 then 方法都不会调用，解决方法是将.catch 方法放到前面去

`promise.all()`会等所有异步操作执行完毕获取所有的结果才执行成功的回调函数

`promise.race()`方法只要任何一个异步操作执行完毕就立即执行成功的回调函数(类似赛跑)

封装异步读取文件的方法

```js
import fs from 'fs'
function getFile(fPath){
//返回一个 Proimse 构造函数，resolve 代表成功，reject 代表失败
return new Promise(function(resolve,reject)){
  //将参数传入并使用回调函数接收结果
  fs.readFile(fPath,'utf-8',(err,data)=>{
    if(err) return reject(err)
      resolve(data)
  })
  }
}
```

#### async/await

使用 async 和 await 简化 promise.then 的异步操作

```js
import thenFs from 'then-fs'
async function getAllFile() {
  const a1 = await thenFs.readFile()
  //此时 a1 指向的不是 promise 对象，而是.then 方法返回的结果
}
```

注意：async 和 await 必须成对出现

## ES5

### 构造函数和原型

在 es5 中使用够着函数来创建对象，在 es6 中用类来封装

构造函数包括实例成员和静态成员

实例成员通过 `this` 添加

静态成员通过构造函数声明，并只能通过构造函数访问

构造函数会浪费内存，因为构造函数内的方法会在生成对象时给方法开辟独立的内存，这样无论有多少方法，就会开辟多少内存，解决的方法：使用原型对象 `prototype`，可以将共享的方法放在 `prototype` 内部

原型就是一个对象，通过构造函数直接声明

对象会有一个`--proto--`方法，指向 `prototype`，所以对象可以拿到，这就是实例化对象的时候可以直接使用对象 Obj 的方法的原因

对象原型`--proto--`和原型对象 `prototype` 都有 `constructor` 属性，它是一个构造函数，返回的创建出来的构造函数

如果将原型对象 `prototype` 用对象的方法封装一些方法，会导致指向错误，可以通过 `constructor` 重新指向回去

原型链：每一个原型对象都有`--proto--`，如果本省没有则返回构造函数上找，如果构造函数上没有则返回 object 对象上找，如果 object 对象上没有则返回 null，js 的成员查找方式按照原型链来查找

构造函数内的 `this` 指向实例对象

原型对象内的 `this` 指向调用的对象

通过原型对象可以扩展内置对象使用方法，eg：`Array.prototype.函数名=function(){}`

所以在数组和字符串内部不能将原型对象使用对象的方法创建函数，会覆盖原来的方法

### 构造函数的继承

`call()`；可以调用函数，还可以改变函数的 this 指向

eg：`函数名.call(对象名)`

在子构造函数中调用父元素的属性，`父构造函数.call(this,父元素 1,父元素 2)`

子构造函数内会有原型对象 `prototype`，如果需要访问父构造函数的原型对象可以通过实例化父构造函数访问即 `newFather()`；但此方法会导致指向问题，还要通过 `constructor` 指回子构造函数

### ES5 新增方法

#### 数组方法

`forEach()`；遍历数组 返回原数组

```js
arr.forEach(function(item，inex，array){})
```

`filter()`；筛选数组 返回一个新数组

```js
arr.filter(function(item，inex，array){})
```

`some()`；查找数组中是否有满足条件的元素 返回一个布尔值，找到就停止循环

```js
eg：arr.some(function(value，inex，array){})
```

#### 字符串方法

删除字符串两端的空白字符 `字符串.trim()`；返回一个新的字符串

#### 对象方法

`Object.defineProperty()`修改对象中的属性 对象劫持

`Object.defineProperty(对象名,属性,{value：值})`

中括号内部有四个键值对，用逗号隔开

value：属性的值，默认为 underfine

weitable：是否可以重写（即重新修改），默认为 false

enumerable：是否可以被枚举（遍历），默认为 false

configurable：是否可以被删除或再次修改特性，默认为 false

`object.keys()`可以遍历对象

## 函数进阶

### 定义函数

```js
function fn(){}
var fun = function(){}
new Function（'参数 1','参数 2',....,'函数体'）
```

函数都是 Function 的实例，函数也属于对象

#### 普通函数

```js
function fn() {}
fn() // 调用
```

#### 对象函数

```js
var o = {
​ say：function(){}
}
o.say() // 调用
```

#### 构造函数

```js
function Star() {}
new Star() // 调用
```

#### 绑定事件函数

```js
btn.click = function () {}
```

#### 定时器函数

```js
serInterval（function(){}，1000）
setTimeout(function(){}，1000) //延时执行，用来节流，比如有一个输入框，用 oninput 监听一直在输入会一直调用，可以延时进行调用，this 指向 window
```

#### 立即执行函数

`(function(){})()`

自动调用，this 指向 window

函数内的 this 一般指向函数的调用者

可以通过 `call()`更改 this 指向，call 的主要作用是实现继承

`apply()`方法也可以改变 this 指向，参数必须是数组，

apply 可以用来数组使用数学内置对象，比如求最大值和最小值。eg：`Math.max.apply(Math,arr)`

`bind()`也可以改变 this 的指向，但不会调用函数，可以创建一个函数来接收（常用）

比如一个点击函数内部有一个延时执行函数 `setTimeout(function(){}，1000)`,需要改变 function 这个函数的指向（原本这个函数是 window 提供的，this 指向 window），可以通过 `setTimeout(function(){}.bind(this)，1000)`指向 点击的对象

在 es5 的构造函数内需要声明一个全局变量 taht 去储存 this，明确指向问题，但可以通过 bind（本身指向，新变量）来处理，在调用时要把新变量传过去

### 严格模式

JS 内有严格模式，在 ES5 可以使用，IE10+支持

开启严格模式`use strict`，严格模式声明在所有语句之前

严格模式可以部分开启也可以全部开启

1.变量规定，不声明的变量会报错

2.不能删除已声明的变量

3.严格模式下全局作用域的函数 this 指向 underfind

4.定时器的 this 指向 window

### 高阶函数

高阶函数是将函数作为参数，常见的为回调函数

#### 闭包

闭包是一个有权访问另一个函数局部作用域中变量的函数，闭包本质是一个函数，常见为一个函数包括另一个函数，被包括的函数可以访问外部函数的变量

除此之外也可以通过返回在父函数内的子函数的方式访问局部变量

闭包的作用：延伸了变量的作用范围

用闭包处理点击获得 li 的索引号,用立即执行函数创建小闭包

```js
for（var i=0;i<lis.length;i++）{
  (function(i){
    ​ lis[i].onclick=function{
    ​ console.log(i);
  }
  })(i)
}
```

#### 递归

函数内部调用函数本身，类似循环

容易发生栈溢出，需要加 return 退出

求阶乘

```js
function fn(){
​  if（n===1）{
  ​ return 1
  }
​  return n*f（n-1）
}
```

比如 n 是 3 会变成 `3 x f（2）> 3 x 2 x f(1)`
