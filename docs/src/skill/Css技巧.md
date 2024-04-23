清除浮动的四种方法 1.额外标签法：（在最后一个子元素浮动标签后，新加一个标签，给其 css 设置 clear：both；）

缺点：添加无意义标签，语义化差，不推荐

2.父级添加 overflow 属性（父元素添加 overflow:hidden，前提父元素要有宽度，如果要适配 ie6 浏览器还需要加\*zoom：1）

缺点：内容增多的时候容易造成不会自动换行导致内容被隐藏掉，无法显示要溢出的元素，不推荐

3.使用 after 伪元素清除浮动（推荐使用）clearfix 添加给父元素

.clearfix:after{
content: "";
display: block;
height: 0;
clear:both;
visibility: hidden;
}
.clearfix{
*zoom: 1;/*ie6 清除浮动的方式 _号只有 IE6-IE7 执行，其他浏览器不执行_/
} 4.使用 before 和 after 双伪元素清除浮动，同样给父元素添加样式

.clearfix:after,.clearfix:before{
content: "";
display: table;
}
.clearfix:after{
clear: both;
}
.clearfix{
*zoom: 1;/*ie6 清除浮动的方式 _号只有 IE6-IE7 执行，其他浏览器不执行_/
}
利用 after 伪元素实现倒三角效果
.picker {
margin-left: 8rpx;
position: relative;
}
.picker::after {
position: absolute;
top: 45%;
right: 20rpx;
content: '';
width: 0;
height: 0;
line-height: 0;
font-size: 0;
border: 10rpx solid transparent;
border-top-color: #bbb;/_ 此颜色控制倒三角的背景色 _/
}
效果图

开发技巧 1.开发中做导航栏不要直接用 a 标签，推荐使用 ul+li 标签+a 标签的方式（利于 SEO 优化），logo 里面放一个 h1 标签（利于 SEO），将 logo 设置为背景图

2.去掉 li 标签前面的自带的小点 list-style：none

3.网站底部推荐使用用 dl+dt+dd 制作

作用：
dl 表示一个定义列表
dt 表示一个定义的名称，可以理解为词典中的条目
dd 表示对一个定义的解释，可以理解为词典中对条目的解释。
注意：
这三个标签必须同时出现，而且 dt，dd 必须嵌套在 dl 内。dt 和 dd 是同级关系，并不是嵌套关系。dd 必须紧跟在 dt 之后，dd 前可以有多个 dt，但 dd 前面必须至少有一个 dt。dt 后面至少需要有一个 dd。dt 和 dd 是多对多的关系。 4.如果要限制 div 内的图片大小，则直接在样式里面限制即可，设置为容器的 div 宽、高的 100%，注意：如果一个盒子里面只有图片，要将图片宽度设为 100%，特别是移动端自适应布局

5.如果图片不想和父盒子一起缩放，则不要直接设置宽度，设置最大宽度为 100%。

6.网页的左上角都有图标叫 faviocn 图标，用比特虫网站将 png 格式转换为 ico 格式即可设置为网页图标

7.label 标签加 for 可以点击 label 标签从而定位输入框，比如点击姓名，定位姓名的输入框，优化用户体验

CSS 高级技巧
精灵图（sprites）
将网页的所有小图片整合到一张大图里面去，降低服务器压力，减少请求次数

1.主要针对背景图进行处理

2.之后进行 background-img 进行设置，只显示想显示的背景图

3.数字一般是负值 background-position 设置

字体图标
一些位置图标，搜索图标，下拉键图标、轮播图只有按钮本质是文字

1.字体图标下载（icomoon、iconfont）

2.字体图标下载完吧 font 文件夹放在根目录

3.进行 style 字体声明

4.为字体添加字体样式声明字体样式

5.字体追加将 json 文件上传就行然后重新生成

CSS 用户界面样式 1.更改用户鼠标样式，默认为 default 即常规的箭头

pointer 为小手

move 为移动的十字架

text 为文本

not-allowed 为禁止

2.表单轮廓线去除

outline 改为 none 或 0

3.禁止拖拽文本域（文本域代码最好放在一行，不然会导致光标位置出现问题）

resize 改为 none

4.vertical-align 实现垂直居中（只针对行内元素和行内块元素）

主要用于图片、表单+和文字对齐

默认 baseline

改为 top 可与顶端对齐

改为 middle 可居中对齐

改为 bottom 可以底部对齐

5.图片底部出现缝隙

1、给图片添加 vertical-align：middle、top、bottom

2、把图片转换为块级元素

6.溢出的文字省略号显示

1.单行文本

强制一行显示文本 white-space：nowrap

超出部分隐藏 overflow：hidden

超出部分省略号显示 text-overflow：ellipsis

2.多行文本省略号显示（适用于 webkit 移动端）有兼容性问题

overflow：hidden

text-overflow：ellipsis

display：-webkit-box 弹性伸缩盒子模型显示

-webkit-line-clamp：2 第几行显示省略号

-webkit-box-orient：vertical 设置或检索盒子内子元素的排列方式

CSS 初始化
也称 css reset

1.清除所有内外边距

2.em 和 i 设置不倾斜

3.去掉 li 的小圆点、

4.图片 border 改为 0，且垂直居中（为了消除图片和底部的空白缝隙）

5.按钮的鼠标样式设为小手

6.a 标签去掉下划线

7.一些字体为了溜溜球兼容会将宋体和黑体改为 unicode 编码

8.如果给盒子加边框或内边距会撑大盒子，因为 css 属性 box-sizing 默认为 content-box，如果改成 box-sizing：border-box 则不会撑大盒子

CSS3 其他特性
filter：blur（5px）将图像变模糊，数值越大图像越模糊

calc 函数，做一些+-\*/计算

CSS3 过渡
transition：要过渡的属性 花费时间 运动曲线 何时开始

要过渡的属性可以是宽、高或者颜色，如果是所有属性则为 all

花费时间以秒为单位

运动曲线默认为 ease（渐慢）linear（匀速）ease-in（加速）ease-out（减速）ease-in-out（先加速后减速）

开始时间，可以延长开始默认为 0s

搭配 hover 使用，要写多个属性可以使用逗号进行分割

2D 转换
使用 transform 来声明，配合 transition 做一些动画效果

translate 移动 只移动 X 轴 translateX 移动 Y 轴 translateY,不会影响其其他元素的位置

rotate 旋转 单位为 deg 可以配合 after 伪元素做小三角的动画效果

旋转分为顺时针和逆时针

旋转的中心点默认为元素的中心点，改变旋转的中心点使用 transform-origin，可以是像素也可以是方位名词

scale 缩放，里面跟数字不跟单位，同样不会影响其他盒子

综合写法用空格隔开，transla、rotate、scale 按先后顺序，不同顺序效果会不一样

CSS3 动画
animation，相对于过渡可以实现更多效果

使用@keyframes+动画名定义，使用百分比定义状态

animation-name 调用动画名

animation-duration 持续时间

animation-iteration-count 播放次数 infinite 无限

animation-fill-mode：设置为 forward 可以停止在结束状态

除了匀速等运动曲线，还可以用步长 steps 来展示

元素可以添加多个动画，用逗号分隔

3D 转换
translate3d 移动

x，y，z 三轴，xy 和 2D 一样，z 轴要换个透视相结合

简写用 transla3d 声明，不能省略某个值

透视 perspective

透视写在被观察的元素的父元素上，透视越小，物体越大

rotate3d 旋转

绕三个轴旋转

x 轴旋转方向左手拇指向右，其他四指方向为正方向

y 轴旋转方向左手拇指想下，其他四指方向为正方向

z 轴和 2d 旋转一样，比如抽奖的转盘

transform-style 控制子盒子是否保持 3d 空间 preserve-3d

有移动和其他动画要先移动再做其他动画

浏览器私有前缀
-moz- 火狐

-ms- IE

-webkit- safari chrome

-o-opera
