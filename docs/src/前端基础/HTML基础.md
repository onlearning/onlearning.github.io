# HTML 基础

## 基础

### 第一行代码

```js
<!DOCTYPE html>
```

!DOCTYPE 声明文档类型

lang 定义语言，en 代表英语，zh-CN 代表中文

charset 字符集 utf-8 为万国码（没有会乱码）

它告知浏览器的解析器使用哪种 HTML 规范或版本来解析页面。DOCTYPE 声明对大小写不敏感。

网页为 html 格式的文件（Hyper Text Maekup Language）由图片、文字、声音及链接组成。

### 浏览器

五大浏览器：IE、火狐、谷歌、Safari、Opera

浏览器内核：读取网页内容（进行渲染）

### WEB 标准

W3C 标准（浏览器不同导致页面和排版有差异）

由结构（h5）、表现（css）和行为构成（js），三者相分离编写

## HTML 标签

### 常用标签

```js
标题标签<h1-h6>
段落标签<p>
换行<br/>
加粗<strong>
斜体<em>
删除线<del>
下划线<ins>
盒子<div> 每个 div 占一行，<span>一行可以有多个
图片<img>
// 注：alt 属性：替换文本，图片显示不出来用文字替代
// title：提示文本，鼠标浮动提示的文字
// width 宽度 height 高度 border 边框
相对路径：同级+ 文件名 下一级 /+文件名 上一级 ../+文件名
绝对路径（很少使用）：盘符位置开始或网址路径
超连接：<a>href+链接地址
// target 指页面打开方式 self 为默认，blank 为新窗口 href+#为空链接
锚点链接：#+名字 比如#life
注释快捷键 ctrl+/
空格 &nbsp
小于号 &lt
大于号 &gt
```

### 表格标签

table: tr 行 td 单元格

th 表头 文字会加粗居中显示

表格属性

align 对齐属性 left center right

border 边框

cellpadding 文字和边框的距离，默认为 1

cellspacing 单元格之间的距离，默认为 2

thead 表格头部区域

tbody 表格主体区域

rowspan 竖向跨行合并

colspan 横向跨列合并

### 列表标签

**无序列表（常用）** ul --- li

有序列表 ol ---- li

自定义列表（多用于页脚） dl ---- dt（父） dd（子）

### 表单标签

form 标签定义

action 提交给 url

method 提交方式 post，get

name 表单名字

#### 表单控件

input 输入

select 下拉 和 option 标签配套使用

使用 selected 可设置默认值

textarea 文本域

radio 单选按钮（和复选框一样，需要所有按钮名字相同）

value 值，为元素默认值，可现实在前端

checked 值，默认选中，页面打开即加载

maxlength，限制输入最大长度

submit 提交表单

reset 重置表单

label 标注标签 比如男为 radio 标签 点击男也可以实现选择 需要加 id 值 for='id'

```js
<label for="male">男</label>
<input type="radio" name="sex" id="male" value="male">
```

## CSS

### CSS 三大特性

1.层叠性（哪个样式近调用哪个）

2.继承性（子标签会继承父元素的属性）行高也可以继承

3.优先级（选择器权重）

id 选择器大于类选择器，被继承的权重为 0

复合选择器权重可以叠加

### 基础选择器

标签选择器、类选择器、ID 选择器、通配符选择器，除了基础选择器外还有复合选择器

.代表 class（常用）class 属性可以有多个类名 类名用空格隔开

#代表 id，比较少用，因为 id 只能调用一次，和 JS 搭配使用

通配符用星号`*`表示，会选取所有标签

### 复合选择器

复合选择器可以更准确、高效的选择目标，由两个或多个选择器通过不同方式组合而成。

主要包括后代选择器、子选择器、并集选择器、伪类选择器

后代选择器又称包含选择器，可选择父元素内的子元素

```js
// 选择ul内的所有li
ul li {样式声明}
```

子选择器用大于号进行分隔开，选择离父元素的最近的子元素

```js
// 选择div内的所有最近一级的P元素
div > p {样式声明}
```

并集选择器用逗号来分割

```js
// 选择test1和test2元素
test1,test2 {样式声明}
```

伪类选择器用冒号来声明，比如鼠标浮动:hover

为确保鼠标相关的 css 生效，使用 link-visited-hover-active 顺序

```js
a:link {样式声明}
a:visited {样式声明}
a:hover {样式声明}
a:active {样式声明}
```

focus 伪类选择器指获得焦点时改变样式

```js
input: focus {样式声明}
```

### 字体属性

font-family 字体，多个单词代表的字体用引号隔开，单引号双引号都行

font-size 设置字体大小

font-weight 设置字体粗细 normal bold bolder lighter 可以是数字 700 等于加粗 正常是 400 不要跟单位 px

font-style normal 正常 italic 斜体 用的较多是设置为不倾斜

#### 复合字体属性

以上可进行简写（一般不推荐）

font：font-style，font-weight，font-size/line-height,font-family

其中，size 和 family 不可省略 不能换顺序

### 文本属性

color 表示颜色，可用颜色的单词，或 16 进制的颜色，或 RGB 代码

text-align 设置字体水平对齐 left，center，right（默认左对齐）

text-decoration 设置文本的装饰（默认为 none）其他属性为：underline（下划线）line-through（删除线）overline（上划线）

text-indent 首行缩进 em 为相对本样式的字体大小的单位 正常设置 2em 即本样式两个文字大小

line-height 设置行高 设置 26 像素就是上间距+下间距+文字高度

### 样式表

1.内部样式表：放在 Style 标签内

2.行内样式表：放在标签内用 style 修饰，权重高

3.外部样式表：使用 link rel 标签引入 herf 指定路径

### CSS 元素

#### 块元素

以 DIV 为典型，自己独占一行，可以设置宽高，默认为 100%，可以包含任何标签

#### 行内元素

span 是最典型的行内元素 一行可以有多个

无法设置宽高 默认为本省内容的宽度 行内元素只能容纳文本

#### 行内块元素

一行可以有多个行内块元素，比如图片 img 和 input 框，可以设置宽度和高度也一行多个

#### 元素转换

a 标签使用 `disaplay：block`可以转换为块级元素

div 使用 `display：inline`转换为行内元素

将块级元素或行内元素转换为行内块元素`display：inline-block`

### 背景 background

背景颜色 background-color 将背景颜色设置为透明 background-color:transparent

背景图片 background-image 多用于 LOGO 制作默认为 none（无背景图片）或 url

背景平铺 background-repeat 有以下属性：repeat（默认为平铺）no-repeat（不平铺）repeat-x（x 轴平铺）repeat-y（y 轴平铺）

背景图片位置 background-position 有以下属性：left top center bottom ，若只有一个则另一个默认居中 也可以是精确单位第一个为 X 轴，第二个为 Y 轴 还可以混合使用

背景图像固定 background-attachment 默认为 scroll 滚动，fixed 固定

背景元素可以简写，只用 background 声明，用空格隔开

背景半透明 background:rgba(0,0,0,0.3)最后一个值代表 alpha 通道，0 为全透明，1 为不透明

### 定位 position

固定盒子位置，或让盒子在另一个盒子内自由移动位置

定位=定位模式+边偏移（top left bottom right）

static 静态，无定位

relative 相对，根据原来的位置定位，原来的位置依旧占有，用来限制绝对定位

absolute 绝对，没有父元素或父元素没定位会以浏览器为父元素，不占原来的位置

fixed 固定：以浏览器的可视窗口为参照点，和父元素无关，不会随着滚动条滚动，不占原来的位置（是一种特殊的绝对定位）

sticky 粘性定位 以浏览器的可视窗口为参照点，但会占有原来的位置（兼容性较差）

z-index：叠放次序，数字越大越上面，默认是 auto（定位的盒子才有的属性，标准流和浮动流没有）

行内元素加绝对定位可以设置宽度和高度

浮动、绝对定位、固定定位不会有外边距合并的问题

浮动会压住盒子但不会压住文字（为了用来做文字环绕效果），绝对定位和固定定位会压住文字

### 元素的显示和隐藏

**display**

none：隐藏（不占有原来的位置）

block：（除了转换为块级元素）也是显示

**visibility**

inherit（继承父元素可见即可见，父元素不可见则不可见）

hidden：隐藏但位置依旧占有

visible：元素可见

**overflow**

visible：默认显示超出的部分

hidden：隐藏超出的部分

auto：在需要的时候添加滚动条，如果没有超出则不显示滚动条

scroll：溢出的部分显示滚动条，不溢出也显示滚动条

### 通用样式

#### border 边框

border-width 宽度

border-style 样式 实线 soild 虚线 dashed 点线 dotted

border-color 颜色

所以 border 可以简写 border:1px soild red

表格边框合并单元格之间的边框宽度即两个边框变为一个边框 border-collapse：collapse

边框会增加盒子的实际大小(如果给盒子加边框或内边距会撑大盒子，因为 css 属性 box-sizing 默认为 content-box，如果改成 box-sizing：border-box 则不会撑大盒子)

#### padding 内边距

可以简写为一个值，即设置四个边距

两个值代表第一个是上下，第二个是左右

三个值第一个是上，第二个是左右，第三个是下

四个值是上右下左 按顺时针排序

padding 会影响盒子实际大小，如果没有宽度则不会影响

遇到文字字数不一样可以设置 padding，而不是去固定盒子的宽度，让文字撑开盒子

#### margin 外边距

简写和内边距相同

外边距可以让盒子水平居中，必须有宽度，将左右外边距设为 auto，因为 auto 会平分剩余空间 margin: 0 auto

给行内元素或行内块元素的父元素加 text-align：center 也可以水平居中

如果同时有两个盒且同时有外边距会导致外边距合并

解决方案：

为父元素定义上边框，可将边框颜色设为透明

或只写一个外边距

为父元素定义上内边距

为父元素添加 overflow：hidden

如果盒子有浮动或定位则不会产生塌陷

清除默认内外边距

用通配符

```js
*{
margin: 0;
padding: 0;
}
```

### 技巧

1、把图片的宽度设置为和盒子宽度大小即可限制图片大小

2、用 margin 外边距不会撑开盒子，用 padding 内边距会撑大盒子

3、在盒子没有固定宽度的时候建议用 padding

4、去掉 li 的小圆点 list-style：none

5、圆角边框 border-radius 将数值设为正方形的一半可做圆形即 50% 可以简写，按左上、右上、右下、左下对每个角进行分别设置

6、盒子阴影 box-shadow 不占用空间 按以下顺序设置

h-shadow 水平阴影位置可为负值

v-shadow 垂直阴影位置可为正值

blur 代表模糊距离 blur:0 为实体

spread 阴影尺寸

color 颜色

inset 内部阴影

outset 外部阴影

7、文字阴影 text-shadow 不占用空间 按以下顺序设置

h-shadow 水平阴影

v-shadow 垂直阴影

blur 模糊距离

color 颜色

8、 浮动

标准流：按默认的方式进行排列

浮动流：none left right 浮动后不保留位置，给行内元素加浮动会将元素转换为行内块元素

多个块级元素纵向排列使用标准流，横向排列使用浮动流

浮动盒子会影响后面的标准流，不影响前面的标准流
