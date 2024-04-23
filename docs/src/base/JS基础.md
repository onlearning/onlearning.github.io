# JS 基础

js 由 ECMAScript+Bom+Dom 组成 从上而下执行

ECMAScript ：规定 JS 的基础语法

DOM:文档对象模型

BOM:浏览器对象模型

可以写在行内、内嵌、和外部

js 推荐使用单引号

单行注释 ctrl+/

多行注释 shift-alt+a

输出在控制台 console.log

alert 弹窗

prompt 输入框

document.write 输出在页面上

## 变量

使用 var 声明变量，等于号看做赋值，变量就是一个容器，在内存中的一片空间

可以同时声明多个变量，用逗号隔开

变量可以只声明不赋值

变量命名规范：

由数字、字母、下划线和美元符号组成

大小写严格

不能以数字开头

不能以关键字和保留字命名

遵守驼峰命名法

## 数据类型

### 基础数据类型

bit(位)：保存 0 或 1 1 位

Byte(字节)：1B=8b

KB(千字节)：1Kb=1024B

MB(兆字节)：1MB=1024KB

GB(吉字节)：1GB=1024MB

TB(太字节)：1TB=1024GB

java 是弱类型语言，在运行过程中根据等号右边的值来确定会确认数据类型，它还是动态语言，数据类型可变，可以是 int 类型也可以是字符串类型

### 简单数据类型

js 内有五个基本数据类型，String、Number、Boolea、underfind、null

1、数值型 Number 默认为 0，可以是整数也可以是小数

除了十进制还有二进制，八进制(以 0 开头)，16 进制(以 0x 开头)

数字型的最大值(Numnber.MAX_VALUE)

数字型的最小值(Numnber.MIN_VALUE)

infinity(无穷大)

-infinity(无穷小)

`NAN` 表明数据为非数字类型

`isNAN()`可以判断是否为数字，如果是数字返回 false，如果不是返回 true

2、字符串型 string，可以用双引号还可以是单引号，如果引号嵌套可以外双内单或外单内双

反斜杠`\`为字符串转义字符，使用需在引号内

`\n` 换行

`\t` 缩进

`\b` 空格

通过 lenth 可以访问字符串长度

通过加号可以拼接字符串 `s + r = sr`

字符串具有不可变性，即使重新声明新的字符串，也只是改变地址

所以**字符串的方法都会返回新的字符串**

`indexof()`查询字符的位置，括号内可以加起始的位置

`lastindexof()`从后开始查询字符满足条件的位置

`charAt(index)`返回指定位置的字符串

`charCodeAt(index)`获取指定位置字符的 ASCII 编码

(ASSCII 编码主要可以判断用户键盘输入的键)

`str[index]`返回指定索引的字符(h5 新增，ie8+支持)

`concat(str1,str2,str3)`相当于+号拼接字符串

`substr(strart，length)`从 start 开始，取 length 长的字符串

`slice(start，end)`从 start 开始，end 取不到

`substring(start，end)`从 start 开始，end 取不到

`replace(被替换的字符，替换的字符)`只会替换第一个字符

`split()`括号内加分割符(取决于字符串的分隔符)，可将字符转换换为数组

`toUpperCase()` 大写

`toLowerCase()` 小写

3、Bollean 只有 false，true，默认为 false

false 参与运算为 0，true 参与运算为 1

4、underfind 为字符串，进行运算相对于一个字符串

5、null 为空值，与数字进行运算为数字本身

### 复杂数据类型

复杂数据类型：引用类型

使用 new 关键字创建，比如 `Object`、`Array` `function`等

简单数据类型放在栈内，存放的是值

复杂数据类型放在堆内，首先在栈内存放地址(16 进制)，地址指向堆内的数据

简单数据类型传参，将值传递给形参，无论方法内的形参如何修改都不影响外部变量

复杂数据类型传参，形参和实参都是同一个堆地址，会操作同一个变量从而会影响外部变量

### 数据类型转换

typeof 可以返回数据类型 typeof+空格+变量

prompt 取过来的值是字符串 `prompt()`

控制台中不同颜色也能判断数据类型，数字为蓝色，字符串为黑色，underfind 和 null 为灰色

1、转换为字符串

变量.toString `str.toString()`

强制类型转换 `String(变量)`

通过加号拼接，可以是一个空格(隐式转换)

2、转换为数字型

`parseInt(变量)`如果是小数，则省略小数部分，如果数字带字符串只输出整数部分

`parseFloat(变量)`转换为小数

`Number(变量)`强制类型转换

隐式转换(`- * /`)运用算术运算转换(不用+号是因为加号会变成字符串拼接)

3、转换为布尔值

`Bollean() ` 代表空的、否定的、0 会转换为 false，其他为 true

## JS 运算符

### 算术运算符

加(`+`)减(`-`)乘(`*`)除(`/`)及取余(`%`)

### 递增和递减

`++`和`--`，分为前置(先自加，后返回值)和后置(先返回值，后自加)

### 比较运算符

`<` 小于

`>` 大于

`<=` 小于等于

`>=` 大于等于

`!=` 不等于

`==` (存在隐式转换 字符串转换为数字 1 和'1'会返回 true)

`===`全等

`!==` 全不等

### 逻辑运算符

`&&` 与运算符、一假即假

`||` 或运算符、一真即真

`!` 非运算符

逻辑与短路，即有一个确定的值就不进行运算，返回第二个值，如果第一个为假就返回第一个值

`123 && 456` 因为第一个是确定的，返回 456

`0 && 456` 第一个是假，所以返回 0

`0 && 1 && 1+2 `第一个是假，后面不参与运算，所以返回 0

逻辑非短路，有一个真的值就返回那个真的值

`123||456` 返回 123

`0||123` 返回 123

### 赋值运算符

`=`把右边的值赋值给左边

`+=` 本身和右边的值`+-*/`运算 如 `i=i+2`；可以写成 `i+=2`；

`-=` 同理

`++` `--` 和 `!` 为一元运算符，逻辑非优先级高

逻辑`&&`比逻辑`||`运算符优先级高

### 条件表达式

`?` 声明条件表达式也叫三元运算符 `条件 ? 表达式1 : 表达式2`

条件为真返回表达式 1，为假返回表达式 2，可以通过条件表达式来简写 if

`10 > 5 ? true : false` 返回结果为 true

## JS 流程控制

1、顺序结构 从上往下，依次执行

2、分支结构(if 和 swich) 二选一执行，if + else

3、多分支语句

多选一执行 if + else if + ... + else 结尾

switch+case + break 以 default 结束(多用于固定的值来匹配)

注意：swich 是全等匹配，要匹配字符串需要加引号

4、循环结构

for 循环

```js
for(var a = 0, a < 10, a++ ){
  // 第一个参数为初始化变量 第二个参数为条件表达式
  // 第三参数为操作表达式(为每次循环最后执行的代码)
}
```

嵌套循环 如乘法表

外层循环一次，里层循环全部，外层控制行数，里层控制列数

```js
for (int i = 0; i < 5; i++) {
  for (int j = 0; j < 5; j++) {
    console.log(i+ "*" + j);
  }
  console.log()
}
```

while 循环

`while(条件表达式){}`满足条件表达式才执行，要有限制防止出现死循环

`do while` 循环，至少执行一次，不满足条件退出循环

## JS 数组

1.用 new Array()声明，如果为空则是一个空的数组，如果有一个数字则是数组的长度，如果有两个数字则是这个数组(用逗号隔开) `const arr = new Array()`

2.用中括号声明，用逗号分隔每一个数组元素 `const arr = []`

通过 length 访问数组下标

可以修改 length 长度来新增数组元素 `arr.length = 7`

也可以修改索引号，如果没有数组的下标，会新增，如果有的下标，会修改数组元素

检测对象是否为数组

使用 `instanceof Array` 来判断

使用 `Array.isArray(数组名)`H5 新增的，IE9 以上支持

### 数组常用方法

`push()`增加数组元素，增加在最后面，push 完返回新数组的长度

`unshift()`在数组最前面添加元素

`pop()`删除数组最后一个元素

`shift()`删除数组第一个元素

`reserve()`翻转数组

`sort()`数组排序，默认从小到大，只针对个位数

如果要比较多位数需要借助函数

```js
arr.sort(function(a，b)){
​ return a-b //升序
​ return b-a //降序
}
```

`indexof(条件)` 返回数组第一个满足条件的索引，找不到为-1

`lastindexof(条件) `返回数组元素最后一个满足条件的索引

### 数组去重

有一个旧数组和一个空的新数组，拿旧数组的元素去查询新数组，如果没有，返回-1，存入新数组，如果有，则不存

在 es6 中数组去重 `const newArr = [...new Set(arr)]`，本质是以下写法(定义：新数据结构 Set，类似于数组，但成员值不重复。

```js
function unique(arr) {
  return Array.from(new Set(arr))
}
var arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {}, {}]
console.log(unique(arr))
//[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {}, {}]
```

### 将数组转换为字符串

`数组名.toString`

`数组名.join()`，括号内可以添加任何分割符

`concat()`将多个数组组合成一个新数组

`slice()`按索引截取数组 slice 不改变原数组

`splice()`删除数组 splice 改变原数组

### 冒泡排序

明确需要交换的趟数为数组长度 eg：3、2、1，只需要两趟，又因为数组是从 0 开始，所以第一层 for 循环的次数小于长度-1 即可

明确交换的次数，因为每次都已经换好一个，所以可以少每趟一次，刚好趟数递增，所以第二层 for 循环的次数减 1 还要减去趟数 i

优化：为避免进行重复运算，可在第二层循环开始前给一个布尔值，假定为 false，只有进行交换才新定义为 true，否则 break 循环，输出结果(降低时间复杂度)。

```js
function bubbleSort(arr) {
  let len = arr.length
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // 相邻元素两两对比
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]] // 元素交换
      }
    }
  }
  return arr
}
// 降低时间复杂度
function bubbleSort(arr) {
  var len = arr.length
  var i = 0,
    j = 0,
    temp = 0
  var lastIndex = 0

  for (i = 0; i < len - 1; i++) {
    for (j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        lastIndex = j
      }
    }
    // 如果这一轮没有交换元素，说明数组已经排序好了
    if (i > lastIndex) {
      break
    }
  }
  return arr
}
// 示例使用
const arr = [64, 33, 24, 10, 100, 50]
console.log('Original array: ', arr)
console.log('Sorted array: ', bubbleSort(arr))
```

continue：跳出当前次的循环，但继续下一次循环

break：结束循环

rteturn：退出循环，返回 return 的值 ，结束当前函数体的代码，如果当前函数体的 return 后还有代码，后面的代码将不执行

## JS 函数

封装一段可以被重复执行的代码，使用 function 声明

```js
function 函数名(形参) {
  // ​ 函数体
}
```

函数名一般用动词，函数名不调用即不执行，括号内可传参

### 函数的参数

参数分为形参和实参

在声明函数时函数是形参，调用函数时是实参

形参是接收实参的，可以看做不用声明的变量，多个参数用逗号隔开

如果实参的个数多余形参，多出的参数不参与计算

如果实参的个数少于形参，则有一个形参被定义为 undefined

**arguments**

当实参个数不确定时，使用 `arguments`，里面包含有所有的实参，本质是一个伪数组，具有 length 属性，但没有真数组的一些方法，push 等

只有函数才有 `arguments` 对象

```js
function add() {
  var sum = 0,
    len = arguments.length
  for (var i = 0; i < len; i++) {
    sum += arguments[i]
  }
  return sum
}
add() // 0
add(1) // 1
add(1, 2, 3, 4) // 10
```

### 函数的返回值

return+需要返回的结果

```js
function 函数名(){
// ​ 函数体
​ return xxx；
}
```

return 属于终止函数，在 return 后面的代码不会被执行

return 只能返回一个值，如果返回多个值以最后一个值为准

return 想返回多个值可以创建数组

如果函数没有 return 则返回 undefined

### 函数调用

函数之间可以相互调用

1、命名函数，使用 `function 函数名(){}`声明 通过函数名调用

2、匿名函数，使用 `var 变量名 = function(){}`；使用变量名调用

## JS 作用域

作用域：是变量在某个范围起作用，未来提高程序可靠性并减少命名冲突。

作用域分为：全局作用域和局部作用域

全局作用域：在整个 script 标签或整个 js 起作用

局部作用域：在函数内部起作用

因此，在不同作用域下的变量分为全局变量和局部变量

函数的形参也是局部变量

**注意：在函数内部没有声明的变量也是全局变量**

全局变量只有在浏览器关闭才会销毁，比较占用内存

局部变量在代码块执行完毕就会销毁，比较节约内存

`var` 用于声明全局变量，`let` 用于声明块级变量

es6 新增块级作用域，作用域存在于{}之间，比如 if 和 for

### 作用域链

内部函数可以访问外部函数的变量，外部函数的变量相当于内部函数的全局变量，这个访问过程会一层一层向外，直到找到为止，找最近的变量。

## JS 预解析

js 引擎运行 js 时会先进行预解析再执行代码

预解析会将变量名和函数提升至当前作用域的最前面，但不进行赋值和函数执行

所以可以先调用函数再声明函数

函数内部 `var a=b=c=9`，可以理解为 `var a=9，b=9,c=9` 相当于 a 是局部变量，bc 为全局变量

## JS 对象

对象是指具体的事物，对象由属性和方法组成

创建对象的三种方式：

1、利用字面量创建，使用{}声明；内部属性或方法用逗号隔开。注：[]是数组，()是运算优先级。

2、使用 new Object()；创建，添加属性和方法使用对象名.属性名(方法名)再加等号赋值。

3、利用构造函数创建对象，将有大量重复属性和方法的对象抽象出来封装起来

```js
function 构造函数名(){
​ this.属性=值；
​ this.方法=function(){}
}
```

通过调用 `new 构造函数名()`； 调用构造函数返回一个对象

注意：构造函数名首字母需要大写、

调用对象和方法

调用对象属性使用对象名.属性名，还可以对象名['属性名']

调用方法使用 对象名.方法名

变量、属性、函数和方法

变量和属性都是用于存储数据的，只不过变量是单独声明的，属性是在对象内不需要声明但使用时需要通过对象调用

函数和方法都是实现某种功能的，只不过方法是存在于构造函数内，需要借用对象调用。

遍历对象

使用 `for (变量 in 对象){}`

`for(k in obj){}`

输出属性名 对象[变量]

### JS 内置对象

对象分为自定义对象、内置对象、浏览器对象

#### Math 对象

相当于一个封装的 Math 对象，可直接使用

`Math.PI ` 圆周率

`Math.floor` 向下取整(1.9 为 1)

`Math.ceil` 向上取整(1.1 为 2)

`Math.round` 四舍五入取整

`Math.random` 随机数，返回的数字范围从 0-1,1 取不到

运用 `Math.floor(Math.random()*(max-min+1))+min` 可以取两个数之间的随机整数并包含这两个数

#### Date 对象

是一个构造函数，需要使用 new 关键字调用

如果没有参数返回当前系统时间

常用参数写法，数字型用逗号隔开，如 `var date1 = new Date(2021.7.8)`

也可以是字符串写法，用-隔开 `var date = new Date('2021-7-8 8:8:8')`

获取当前年份，`getFullYear()`

获取月份，`getMonth()` 返回的是 0-11，需要+1

获取日期，`getDate()`

获取星期几，`getDay()`，周日返回 0，如果想获得星期几可以创建一个数组，然后把这个获取的数字作为索引

获取时分秒如果想要小于 10 以 0 开头，则使用三元运算符如 `h < 10 ? '0' + h : h`

注： `Date.now()`为 H5 新增的，IE6 不支持

**倒计时**

用时间戳减去时间戳，推荐使用 day.js 库

首先返回当前时间的总豪秒数

然后返回需要倒计时的毫秒数

两者相减除 1000 为剩余秒数

之后将剩余秒数装换为天、时、分、秒(小于 10 用三元运算符拼接)

d = parseInt(总秒数/60/60/24)

h = parseInt(总秒数/60/60%24)

m = parseInt(总秒数/60%60)

s = parseInt(总秒数%60)

```js
var showtime = function () {
  var nowtime = new Date(), //获取当前时间
    endtime = new Date('2020/8/8') //定义结束时间
  var lefttime = endtime.getTime() - nowtime.getTime(), //距离结束时间的毫秒数
    leftd = Math.floor(lefttime / (1000 * 60 * 60 * 24)), //计算天数
    lefth = Math.floor((lefttime / (1000 * 60 * 60)) % 24), //计算小时数
    leftm = Math.floor((lefttime / (1000 * 60)) % 60), //计算分钟数
    lefts = Math.floor((lefttime / 1000) % 60) //计算秒数
  return leftd + '天' + lefth + ':' + leftm + ':' + lefts //返回倒计时的字符串
}
```

调用倒计时，使用循环函数

```js
var div = document.getElementById('showtime')
setInterval(function () {
  div.innerHTML = showtime()
}, 1000) //反复执行函数本身
```

## WEB API

API 是运用程序编程接口

WEB API 是浏览器的接口，主要操作 DOM 和 BOM

### DOM

文档对象模型(HTML 和 XML 的接口)

通过 DOM 可以改变网页的内容、结构和样式

文档：document

元素：element

节点：node

通过 `console.dir()` 可以返回元素对象，可以查看里面的属性和方法

获取元素：

1、`document.getElementById(id)`，通过 id 获取，大小写敏感，返回 element 对象

2、`document.getElementByTagName(tag)`，通过标签获取，返回对象集合，以伪数组形式存储，获取父元素指定的子元素，通过`父元素.getElementByTagName(tag)`获取

3、H5 新增方法获取：`document.getElementByClassName(class)`，通过类名获取，同样返回一个伪数组

4、`document.querySelector()`，返回指定选择器的第一个元素对象，常用

5、`document.querySelectorAll()`，返回指定选择器的所有对象集合，常用来获取 ul 内的所有 li

6、获取 body 元素 `document.body`

7、获取 html 元素 `document.documentElement()`

### 事件

由事件源、事件类型和事件处理程序组成

事件源：事件被触发的对象

事件类型：如何触发

事件处理程序：通过函数赋值

所有事件都是修改属性，需要加引号

`innerText` 修改文字，不识别 HTML 标签

`innerHtml` 修改文字，且识别 HTML 标签，通过需要加标签要当成字符串来加(即标签外加引号)

禁用表单：`disable=true`，用 this 指向本身，常用来禁用按钮

`classList` 返回元素的类名(ie10+支持)，和 className 不一样的地方是不会覆盖原来的类名

`toggle` 属性切换类名，如果有就删除，没有就添加，做开关灯案例常用

通过 js 修改样式需要遵守驼峰命名，改完后变成行内样式，权重会变高

如果样式过多可以新建一个类，使用 `this.className=类名`，会覆盖原来的类名，如果想要保留，加上原来的类名即可：`this.className=旧类名 新类名`

实现点击关闭是设置 `display` 属性

精灵图循环，首先每个精灵图的距离相同，然后让索引距离既可以循环出来

`onfocus` 得到焦点

`onblur` 失去焦点

如果有很多按钮都要进行点击事件，可以使用 for 循环，for 循环内还要使用排他思想，在遍历一次数组清除样式，最后更换成想要的样式(还可以使用冒泡思想，给父元素添加点击事件，点击到子元素会冒泡到父元素)

获取和设置属性值

获取元素属性值除了通过 `element.属性`

还可以通过 `getAttribute(属性)`获取(主要获取自定义属性)

设置属性值除了通过 `element.属性='值'`

还可以通过 `setAttribute(属性, 值)`(主要设置自定义属性，轮播图和选项卡常用)

通过 `removeAttribute(属性)`可以删除属性

### H5 自定义属性

自定义属性口语保存在页面中，而不用保存到数据库中

命名以 `data-属性名` `data-attr = 'value'`

H5 新增 dataset 属性，通过此属性可获取所有以 data 开头的自定义属性 `element.dataset.arrt`

### 节点操作

元素节点 `nodeType` 是 1(主要操作元素节点)

属性节点 `nodeType` 是 2

文本节点 `nodeType` 是 3

父级节点 `parentNode` 通过`子节点.parentNode` 调用

子节点 `childNodes`，通过 for 循环(nodeType 判断)能遍历出元素节点

只获取元素节点，`父元素.children` 获取

获取第一个元素节点 `firstElementChil`d(IE9 兼容)

获取最后一个元素节点 `lastElementChild`

实际开发中的写法获取第一个子元素节点 `children[0]`

获取最后一个子元素 `ul.children[ul.children.length-1]`主要用来做下拉菜单

`nextSibling` 获取下一个兄弟节点，包含元素节点和文本节点

`previousSibing` 获取上一个兄弟节点

只获取元素节点(IE9 以上兼容)

下一个元素节点 `nextElementSibling`

上一个元素节点 `previousElementSibing`

创建节点(留言栏)，创建完需要添加`document.createElement('TagName')`

添加节点(在元素后面添加)`node.appendChild(child)`eg：`ul.appendChild(li)`

插入到指定元素的前面 `ul.insertBefore(li, ul.children[0])`

删除节点 `node.removeChild(child)`

阻止链接跳转 `href = 'javascript'` 或 `href = 'javascript:void(0)'`

复制节点

`node.cloneNode()`；如果括号为空或内容为 false，只复制标签，不复制内容

括号为 true 为完全复制，包括内容

创建元素的三种方式

`document.write()`会导致页面重绘制

`innerHTML`，结构复杂

`document.creatElement`创建元素，结构清晰

不同浏览器，采取数组拼接，`innerHTML` 创建元素效率略高

### 注册事件

两种方式

1.以 `on` 开头的事件，但会有唯一性，后面的方法会覆盖前面的方法

2.`addEventListener(监听事件)`可以有多个事件处理程序，IE9 以上支持

`对象.addEventListener(type, listener, useCapture)`

type：事件类型：click，mouseover 等，需要加引号

listener：事件处理函数

userCapture：可选参数，默认为 false

eg：`对象.addEventListener('click', function(){})` 或对象.`addEventListener('click', fn)`

### 删除事件

1、`对象.onclick=null` 可以删除

2、`对象.removeEventListener(type，listener)`

eg：`对象.removeEventListener('click'，fn)`

### DOM 事件流

从顶层开始，从上到下为捕获节点 `document-html-body-div`

从底层开始，从下往上为冒泡阶段 `div-body-hyml-document`

事件流的方向决定了事件的执行顺序，默认的监听函数是冒泡阶段，所以更关注冒泡阶段

部分事件没有冒泡：`onblur`、`onfocus`、`onmouseenter`、`onmouseleave`

### 事件对象

首先事件对象要有事件才会存在，比如点击事件，鼠标浮动事件，即 `function(event){}`

事件对象可以看作一个形参，它包含了事件的相关信息，别人鼠标的坐标，键盘的按键等

事件可以自己命名，常见事件的名字为 `event`、`e`

事件对象不兼容 ie678，需要通过 window.e 访问

`e.target` 返回的是触发事件的对象 和 this 的区别是，this 返回的绑定事件的对象

`e.type` 返回的是事件类型，比如 `click`

阻止事件不跳转，或点击按钮不提交 `e.preventDefault()`，常用来手机端滑动防止拖动页面

低版本浏览器 `e.return Value` return false 不考虑兼容性问题但后面的代码也不运行了

阻止冒泡 `e.stopPropagation()`

低版本浏览器：`e.cancelBubble = true`

事件委托：当有五个 li 要有绑定事件时，除了利用 for 循环添加，还可以给父节点设置监听，利用冒泡影响子节点(只操作了一次 dom，提高了浏览器性能)，因为点击是子元素，会通过冒泡传递给父元素。

**鼠标事件**

配合 `e.preventDefault()`使用 `contexmenu` 禁用右键 `selectstart` 禁止选用文字

鼠标可视区域的 x 和 y 坐标 `e.clientX` `e.clientY`

鼠标在页面文档中的 x 和 y 坐标(ie9+支持) `e.pageX` `e.pageY`

鼠标距离屏幕的 x 和 y 坐标 `e.screenX` `e.screenY`

鼠标移动，`mousemove` 图片跟随鼠标，将 pagex 和 y 给图片的定位(绝对定位)，记得加单位

**键盘事件**

`onkeyup` 按键弹起触发

`onkeydown` 按下触发(不弹起会一直触发)

`onkeypress` 按下触发(不能识别功能键 shift、ctrl)

`keycod` 用来判断用户的按键的 `ASCII` 码值，但 `keyup` 和 `keydown` 不识别大小写，`keypress` 会识别

### BOM

浏览器对象模型，核心是 `window`

`js` 的标准是 `ECMA`，`DOM` 的标准是 `W3C`，`BOM` 缺乏标准

全局变量会自动变成 `window` 的属性和方法

`window` 有一个特殊的对象 `name`

#### window 对象

`window.onload` 窗口加载，只能写一次，有多个 `onload` 以最后一个为准

如果有多个需要加载完调用使用 `addEventListener`

如果需要 dom 树加载完成使用 `DOMContentLoaded` 事件，加载速度比 load 快

`window.onresize` 窗口大小发生变化

`window.innerWidth `当前屏幕宽度(做相应式布局)

`window.setTimeout(调用函数，[延迟毫秒数])`间隔多久调用函数

`setTimeout()`为回调函数，多用于几秒后关闭广告

`clearTimeout()`清楚定时器

`setInterval()` 每隔一段时间调用这个函数一次

`clearInterval()` 清除定时器，用于发送短信剩下多少秒

#### location 对象

`location.href` 对象可以获取或设置 url

`location.search` 返回参数

获取 url 上的参数，去掉`?`通过 substr 截取掉即 `substr(1)`，通过等号分割 `split` 为数组，arr 为参数

`location.assign` 可重定向页面，可以后退

`location.replace` 也可重定向页面，不能后退

`location.reload` 重新刷新页面，如果参数为 true 强制刷新页面

#### navigator 对象

浏览器信息，常用 `userAgent` 判断用户用的是什么终端

#### history 对象

`history.forword()` 前进

`history.back()` 后退

`history.go(数值)` 前进一步或后退一步

#### 网页交互对象

`offset` 偏移量

父元素要有定位，父元素无定位以 `body` 为准

`offseTop` 距离父元素顶部的距离

`offseLeft` 距离父元素左侧的距离

`offsetParent` 返回父元素，父元素无定位返回 body

`parentNode` 父元素无定位是 Node 返回父节点

`offset` 可以获取任意样式，但不能赋值，赋值用 style

通常用 `offset` 和 `pagex` 来获取鼠标在盒子内的坐标

`clicen` 属性和 `offset` 相同，只不过 `client` 不包含边框，`offset` 包含边框，获取到的宽度会有所不同

`scroll` 页面滚动条，可以获得内容的实际大小

`scollTop` 可视区外的上高度，

`scollLeft` 可视区外的左宽度

如果是整个页面滚动则为 `window.pageYOffset` 给整个页面加 `scoll` 事件

`offse` 多用来获取元素位置 left 和 top

`client` 获取元素大小 width 和 height

`scroll` 获取滚动距离，top 和 left

`mouseover` 鼠标经过自身会触发，经过子盒子也会触发(因为子盒子会冒泡到父盒子)

`mouseenter` 只会在经过本身是触发，和 `mouseleave` 搭配使用

立即执行函数，不需要调用，可以传参，多个立即执行函数用分号隔开，立即执行函数独立创建了一个作用域，避免命名冲突

`(function(){})()或(function(){}())`

`dpr` 为物理像素点

`resize` 事件监听页面尺寸变化

`pageshow` 事件，网页重载触发，有 `persisted` 属性，默认为 true，记载页面是否缓存

有些浏览器不支持 0.5 像素，需要进行调整

`callback&&callback()`；利用并集思想的短路原理

返回顶部 `window.scoll(0,0)`不加单位，即 y 轴为 0

如果需要有动画效果效果，添加动画函数即可
