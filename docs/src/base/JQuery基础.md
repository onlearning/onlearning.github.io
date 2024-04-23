# JQuery 基础

## 简介

jQuery 是封装了一些 js 方法的 js 库

优化了 Dom 操作，事件处理和 Ajax 的交互

引用完之后加载两种方法，相当于 DomContentLoaded

1.`$(document).ready(function(){})`

2.`$(function(){})` 常用

`$`是 jQuery 的简写，使用这个符号就可以调用 jQuery 方法

jQuery 获取到的对象是 jQuery 对象，本质是对 dom 元素进行封装

jQuery 对象只能使用 jQuery 方法，不能使用原生的方法，如果是原生的 dom 对象也不能用 jQuery 方法

DOM 对象和 jQuery 对象互相转换

`$(对象名)` 可以将 dom 对象转换为 jQuery 对象

`$('div')[0]` `$('div').get(0)`;都可以转换为 dom 对象

## 常用 API

### jQuery 选择器

`$('选择器名')`，可以选择所有名字相同的选择器

`$('ul li:first')` 选择第一个元素

`$('ul li:last')` 选择最后一个元素

`$('ul li:eq(n)')` 选择第 n 个元素

`$('ul li:odd')` 选择奇数的元素

`$('ul li:even')` 选择偶数的元素

`$('.son').parent()`返回最近一级的父元素

`$('ul').childern('li')` 相当于 ul>li

`$('ul').find('li')` 相当于 ul li 选择所有的 li

`$('.first').siblings('li')` 查找所有兄弟节点

`$('.first').nextAll()`查找当前元素之后所有的同级元素

`$('.first').prevAll()`查找当前元素之前所有的同级元素

`$('.first').has(类名)` 检查是否含有某个类，含有则返回 true

`$('.first').eq(3)`相当于之前的 `li：eq(3)`，从第四个元素开始

`show()`显示元素

`hide()`隐藏元素

排他思想

```js
$('button').click(function(){
​ $(this).css();
​ $(this).siblings('button').css()
})
```

`$(this).index()`获得当前元素的索引

`$(this).css().siblings().css()` 链式编程（简洁），需要明确 this 指向

### 修改样式

`$('div').css（'属性名'，'属性值'）` 修改一个样式

`$('div').css('background','pink')` 设置背景色为粉色

修改多个样式，以对象的形式

```js
$('div').css({
  '属性名':'属性值'，
  '属性名':'属性值'，
})
```

`$('div').addClass(类名)`，相当于 classList，添加类，但 classList 要 IE10+

`$('div').removeClass(类名)`，删除类名

`$('div').toggleClass(类名)`，切换类名

以下括号内可以没参数

`show(s,e,f)`显示元素

`hide(s,e,f)`隐藏元素

`toggle(s,e,f)`切换显示和隐藏

`slideUp(s,e,f)`上拉滑动

`slideDown(s,e,f)`下滑动

`slideToggle(s,e,f)`滑动切换

`feadIn(s,e,f)`淡入效果

`fadeOut(s,e,f)`淡出效果

`fadeToggle(s,e,f）`淡入淡出切换

`fadeTo(s,o,e,f)`修改透明度，需要时间的 o 透明度参数

`animate(对象,s,e,f)` 对象以键值对存在

s 可以是 fast、normal、fast 或毫秒数

e 是切换效果，默认是 swing，可以改成 linear

f 是回调函数

事件切换 hover（鼠标经过函数，鼠标离开函数）

可以简写成 hover（切换隐藏和显示函数）

动画具有排队效果，如果短时间触发多次函数，可以使用 `stop()`函数，需要写在动画的前面

`$(this).children('ul').stop().slideToggle()`

### 属性操作

获取元素固有属性 `.prop('属性名')`

修改元素固有属性 `.prop('属性名'，'属性值')`

获取自定义属性 `.attr('属性名')`

修改元素自定义属性 `.attr('属性名'，'属性值')`

获取 h5 自定义 data 开头的属性 `.data('属性名(不含 data-)')`

复选框选中状态判断：checked `$('box:checked')`

获取内容文本值

`.html()` 获取设置元素的内容

`.text()` 获取设置元素文本值

`.val()` 获取设置表单值

查找指定的祖先元素`.parents('元素名')`

保留 n 位小数 `toFixed(n)`

### 元素操作

同一类会有隐式迭代，做相同的操作

如果需要不同的操作，使用 `each(回调函数)` 方法，回调函数第一个参数为索引号，第二个为 dom 元素，需要转换为 jQuery 元素

`$('div').each(function(index,dom){})`

`$.each(obj,function(i,ele){})`用来遍历数组或对象

创建元素`$('<li></li>')`

添加元素

`.append()` 内部添加默认在后面（父子关系）

`.prepend()` 内部添加放在前面（父子关系）

`.after()` 外部添加在后面，兄弟关系

`.bdfore()` 外部添加在前面，兄弟关系

`.remove()` 删除元素

`.empty()` 删除子元素

`.html()` 和 empty 相同

### 尺寸操作

`width()`/`height()`宽度和高度

`innerWidth()`/`innerHeight()`包含 padding 的宽度和高度

`outerWidth()`/`outerHeight()`包含边框

`outerWidth(true)`/`outerHeight(true)`包含边框、padding 和 margin

`offset()`元素距离文档的距离，可以通过 top 和 left 设置距离

`position()`只能获取父元素的距离，不能设置

`scollTop()`/`scollLeft()`已滚动的距离

文档滚动距离`$(document).scollTop()`

返回顶部不能用 document

要使用`$('body,html').stop().animate({scrollTop:0})`

## 事件

事件注册，和原生 js 一样

事件处理，on,内部以键值组成

```js
$('div').on(){
  mouseenter:function(){}
  click:function(){}
}
```

on 可以实现事件委托

`$('ul li').click()`

可以写成`$('ul').on('click','li',function)`

`on()` 可以给未来创建的动态元素绑定元素

`off()` 可以解绑 on 绑定的事件，为空解绑所有事件，加入对应方法可以删除对应方法

`one()` 可以绑定只触发一次的函数

`tigger()` 自动触发事件

`tiggerHandler()` 自动触发事件，不会触发默认行为，比如 input 获得焦点就会有光标

`event.stopPropagation()` 阻止冒泡事件

### 拷贝对象

`$.extend(deep,target,obj)`

deep 默认为 false，浅拷贝，改为 true 则是深拷贝

多库共存

如果是$符号冲突，使用 jquery 命名

还可以释放控制权 jQuery.noConflict()；

## jQuery 插件

jquery 之家和 jquery22

瀑布流插件

图片懒加载（提升网页加载速度，减轻服务器压力）

全屏滚动插件

bootstrap 插件
