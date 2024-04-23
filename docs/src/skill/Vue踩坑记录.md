1、虚拟 DOM 不渲染数据
问题描述：消息已读和未读的功能，点击消息，消息会变成已读，重新请求数据，在重新请求数据前会先清空旧数据，但是因为两次的数据一样，导致 vue 的 diff 算法默认不更新视图，使用 this.$set 和 this.$forceUpdate 等方法都不能解决问题

解决方法：在 v-for 的父元素加个 v-if v-if=“list.length > 0”。 vue 的 diff 算法会监测数组变化，响应式地渲染列表。

2、复杂对象数组去重
使用 reduce 方法进行复杂对象数组去重

let arr = [
{ id: 1, name: 'zs' },
{ id: 2, name: 'ls' },
{ id: 1, name: 'zs' },
]
const obj = {}
arr = arr.reduce((pre, item) => {
if (!obj[item.id]) {
obj[item.id] = true
pre.push(item)
}
return pre
}, [])
console.log(arr) // {id: 1, name: 'zs'}{id: 2, name: 'ls'}
3、正则判断是否数据是否以负号或 0-9 的数字开头(含小数)
const isSum = /^(-|\+)?\d+(\.\d+)?$/
cosnt sunA = 1
console.log(isSum.test(sumA))
4、数字格式化：千分位及并保留两位小数（多用于金额格式化）
moneyFormatter = function (money, num) {
/\*
_ 参数说明：
_ money：要格式化的数字
_ num：保留几位小数
_ _/
num = num > 0 && num <= 20 ? num : 2;
money = money + '';
var index = money.indexOf('.') + 1;
if (index > 1 && money.substring(index, money.length).length > num) {
money = money.substring(0, index + num);
}
money = parseFloat((money + '').replace(/[^\d.-]/g, '')).toFixed(num) + '';
var l = money.split('.')[0].split('').reverse(), r = money.split('.')[1];
var t = '', i;
for (i = 0; i < l.length; i++) {
t += l[i] + ((i + 1) % 3 == 0 && i + 1 != l.length ? ',' : '');
}
return t.split('').reverse().join('') + '.' + r;
}
以上适用于无负数格式化,如果金额有负数，需要判断是否为负数
moneyFormatter = function(money, num) {
/_
_ 参数说明：
_ money：要格式化的数字
_ num：保留几位小数
_ \*/
num = num > 0 && num <= 20 ? num : 2
money = money + ''
var index = money.indexOf('.') + 1
if (index > 1 && money.substring(index, money.length).length > num) {
money = money.substring(0, index + num)
}
money = parseFloat((money + '').replace(/[^\d.-]/g, '')).toFixed(num) + ''
var l
let isNegative = ''
if (money.startsWith('-')) {
// 判断为负数 将负号取出
l = money
.split('.')[0]
.substring(1, money.length)
.split('')
.reverse() // 整数部分
isNegative = money.split('.')[0].substring(0, 1) // 负号
} else {
l = money
.split('.')[0]
.split('')
.reverse()
}
r = money.split('.')[1] // 小数部分
var t = '',
i
for (i = 0; i < l.length; i++) {
t += l[i] + ((i + 1) % 3 == 0 && i + 1 != l.length ? ',' : '')
}
return (
isNegative +
t
.split('')
.reverse()
.join('') +
'.' +
r
)
}
5、字符串 toLocaleString()方法
toLocaleString() 方法可根据本地时间把 Date 对象转换为字符串，并返回结果

var d=new Date();
var n=d.toLocaleString();// 2021/11/29 下午 4:24:49
　除此之外：还可以将数字变成千分位格式

let num=12345678;
console.log(num.toLocaleString()); // 12,345,678
　还可以将时间转换为 24 小时制

// 2021/11/29 下午 4:25:06
console.log(new Date().toLocaleString()

// 2021/11/29 16:25:06
console.log(new Date().toLocaleString('chinese',{hour12:false}))
6、ElementUI 表格样式调整
ElementUI 表格样式需要加载行内以对象的形式存

<el-table :data="tableData" :summary-method="getSummaries" :header-cell-style="{ height: '2.5rem' }" :row-style="{ height: '2.5rem' }" :cell-style="{ padding: '0' }">
header-cell-style设置表头样式

row-style 设置每行的高度

cell-style 将默认的 padding 去除

去掉表格默认的高亮效果

.el-table\_\_row:hover > td {
　　 background-color: transparent;
}
修改表格下划线颜色

/deep/.el-table td.el-table**cell,
.el-table th.el-table**cell.is-leaf {
border-bottom: 1px solid #e6e6e6;
}
去除进度条的圆角

/deep/.el-progress-bar**outer {
　　 border-radius: 0;
}
/deep/.el-progress-bar**inner {
　　 border-radius: 0;
}
/deep/.el-progress-bar\_\_inner {
　　">#5b8ff9;
}
ElementUI 普通表格取消高亮

/deep/.el-table\_\_row:hover > td {
　　 background-color: transparent;
}
如果表格有使用 fixed 进行固定，使用上面的方法会导致部分 fixed 固定的列的高亮无法取消，推荐使用下面的方法

/deep/.el-table**body tr.hover-row > td.el-table**cell {
background-color: transparent;
}
7、eventBus 传值及累加触发问题、created 的值在 mounted 内获取
1、eventBus 在兄弟组件之间传值如果且触发了路由跳转（A 页面跳转至 B 页面）会导致第一次传值失败
原因：B 页面没有被创建导致发送失败，如果在 B 页面 creted 内使用 bus.$on会发生bus.$on 先触发，A 页面的 bus.$emit 后触发，导致 B 页面接收不到参数

解决方法：

// 在发送方 A 页面使用 this.this.$nextTick(()=>{})
this.$nextTick(() => {
bus.$emit('eleOpen', this.openEle)
        console.log('bus.$emit')
})
// 在接收方 B 页面正常接收即可
2、bus.$on多次触发的问题
这个$on 事件是不会自动清除销毁的，需要我们手动来销毁，如果不进行销毁可能会导致事件多次触发

// 在 B 组件页面中添加以下语句，在组件 beforeDestory 的时候销毁。
beforeDestroy () {
bus.$off('get', this.myhandle)
},
3、在 created 里面发起请求或接收兄弟组件的参数，在 mounted 内无法调用到 created 内参数值
原因：虽然按照生命周期是 created 在前，mounted 在后，但生命周期异步加载需要时间，如果延迟时间是可以获取到数据的，但是问题是不知道需要延迟多久，所以最好不要使用定时器处理。

解决方法：

1.在 created 生命周期内进行异步数据的请求，且将获取到的数据赋值给 this.data。

2.此时如果在 mounted 生命周期里获取 this.data 是获取不到的。

3.不要在 mounted 内处理数据在 watch 内使用 this.$nextTick 处理即可

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
注：Vue.js中this.$nextTick()的使用

this.$nextTick()将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。它跟全局方法 Vue.nextTick 一样，不同的是回调的 this 自动绑定到调用它的实例上。

假设我们更改了某个 dom 元素内部的文本，而这时候我们想直接打印出这个被改变后的文本是需要 dom 更新之后才会实现的，也就好比我们将打印输出的代码放在 setTimeout(fn, 0)中

8、cascader 动态加载次级项视图不更新问题
使用 ElementUI 的级联选择器时，选中一级动态渲染次级时数据添加进去但是不显示解决办法，使用 this.$set 方法

handleChange(val) {
this.options.filter(item => {
if (item.id === val[0]) {
// item.children = this.children 此方法可以将数据添加进去但不会更新视图，需要使用 this.$set方法
          this.$set(item, 'children', this.children)
}
})
console.log(this.options)
}
cascader 点击文本选中当前 label

mounted() {
setInterval(() => {
document.querySelectorAll('.el-cascader-node\_\_label').forEach(el => {
el.onclick = function() {
if (this.previousElementSibling) this.previousElementSibling.click()
}
})
}, 500)
},
9、keep-alive 缓存页面的生命周期
使用 keep-alive 将页面缓存后，页面会有两个特殊的生命周期 activated 和 deactivated

9.1、activated(组件激活（展示）时)
被 keep-alive 缓存的组件激活时调用，此方法会在每次组件激活时重新调用

被缓存的页面数据要进行更新，请求等初始化操作放在 activated 里面即可

9.2、deactivated(组件停用（隐藏）时)
被 keep-alive 缓存的组件停用时调用。组件调用 deactived，可以在里面进行一些善后操作

因为一旦切换组件，组件被缓存不会被销毁，组件将不会执行销毁阶段的钩子函数(beforeDestory 和 destoryed)，所以善后操作需要放在 deactived 里面。

10、vue 打包报错 Failed to load resource: net::ERR_FILE_NOT_FOUND

解决方法：

在项目根目录创建名为 vue.config.js 的文件夹

在该文件内输入

module.exports = {
publicPath: './'
}
重新打包即可
11、vue 路由传参
项目中很多情况下都需要进行路由之间的传值，可以使用 sessionstorage/localstorage/cookie 进行离线缓存存储也可以，用 vuex 也可以，如果只是简单的传值可以使用 vue 自带的路由传参方法

参考官方文档：https://router.vuejs.org/zh/guide/essentials/passing-props.html

想要实现点击当前页的某个按钮或链接跳转到另外一个页面去，并将某个参数带过去

<div @click="insurance(123)">我要传参</div>
第一种方法 页面刷新数据不会丢失

methods：{
insurance(id) {
//直接调用$router.push 实现携带参数的跳转
        this.$router.push({
path: `/particulars/${id}`,
})
}
需要对应路由配置如下：可以看出需要在 path 中添加/:id 来对应 $router.push 中 path 携带的参数。在子组件中可以使用来获取传递的参数值

{
path: '/particulars/:id',
name: 'particulars',
component: particulars
}
目标页面获取参数方法：

this.$route.params.id
第二种方法 页面刷新数据会丢失 类似 post 请求

通过路由属性中的 name 来确定匹配的路由，通过 params 来传递参数。

methods：{
insurance(id) {
this.$router.push({
name: 'particulars',
params: {
id: id
}
})
}
对应路由配置: 注意这里不需要使用:/id 来传递参数了，因为组件中，已经使用 params 来携带参数了。

{
path: '/particulars',
name: 'particulars',
component: particulars
}
目标页面获取参数方法：

this.$route.params.id
第三种方法 query 传递的参数会显示在 url 后面以【?id=？】的形式，类似 get 请求

使用 path 来匹配路由，然后通过 query 来传递参数

methods：{
insurance(id) {
this.$router.push({
path: '/particulars',
query: {
id: id
}
})
}
对应路由配置：

{
path: '/particulars',
name: 'particulars',
component: particulars
}
目标页面获取参数方法：

this.$route.query.id

12、将后台返回的数据进行相邻单元格合并
html 内容区

<div class="right_content">
        <el-table :data="skuListInfo" :span-method="objectSpanMethod" border>
          <el-table-column prop="name" label="名称"> </el-table-column>
          <el-table-column prop="storeIds" label="适应门店"> </el-table-column>
          <el-table-column prop="feeTypeInfo" label="费用类型"> </el-table-column>
          <el-table-column prop="productInfo" label="适用产品"> </el-table-column>
          <el-table-column prop="billing" label="计费方法"> </el-table-column>
        </el-table>
</div>
script方法区

<script>
export default {
  data() {
    return {
      skuListInfo: [
        {
          id: 1,
          name: '普通门店',
          storeIds: [1, 2, 3, 4],
          storeIdInfo: '[1, 2, 3, 4]',
          productType: '1',
          productInfo: '日托',
          mergeId: 1,
          feeType: '1',
          feeTypeInfo: '学费',
          billing: '月/季/年制度'
        },
        {
          id: 2,
          name: '普通门店',
          storeIds: [1, 2, 3, 4],
          storeIdInfo: '[1, 2, 3, 4]',
          productType: '2',
          productInfo: '晚托',
          feeType: '1',
          mergeId: 1,
          feeTypeInfo: '学费',
          billing: '月/季/年制度'
        },
        {
          id: 3,
          name: '普通门店',
          storeIds: [1, 2, 3, 4],
          storeIdInfo: '[1, 2, 3, 4]',
          productType: '3',
          productInfo: '临时托',
          feeType: '1',
          mergeId: 1,
          feeTypeInfo: '学费',
          billing: '月/季/年制度'
        },
        {
          id: 4,
          name: '普通门店',
          storeIds: [1, 2, 3, 4],
          storeIdInfo: '[1, 2, 3, 4]',
          productType: '4',
          productInfo: '越拖',
          feeType: '1',
          mergeId: 1,
          feeTypeInfo: '学费',
          billing: '月/季/年制度'
        },
        {
          id: 9,
          name: '普通门店',
          storeIds: [1, 2, 3, 4],
          storeIdInfo: '[1, 2, 3, 4]',
          productType: '4',
          productInfo: '全部',
          feeType: '2',
          mergeId: 1,
          feeTypeInfo: '定金',
          billing: '月/季/年制度'
        },
        {
          id: 10,
          name: '普通门店',
          storeIds: [1, 2, 3, 4],
          storeIdInfo: '[1, 2, 3, 4]',
          productType: '4',
          productInfo: '全部',
          feeType: '3',
          mergeId: 1,
          feeTypeInfo: '学杂费',
          billing: '月/季/年制度'
        },
        {
          id: 5,
          name: '团购',
          storeIds: [1, 2, 3, 4],
          storeIdInfo: '[1, 2, 3, 4]',
          productType: '5',
          productInfo: '寒假托',
          feeType: '2',
          mergeId: 1,
          feeTypeInfo: '定金',
          billing: '月/季/年制度'
        },
        {
          id: 6,
          name: '团购',
          storeIds: [1, 2, 3, 4],
          storeIdInfo: '[1, 2, 3, 4]',
          productType: '5',
          productInfo: '日托',
          feeType: '1',
          mergeId: 1,
          feeTypeInfo: '学费',
          billing: '月/季/年制度'
        },
        {
          id: 7,
          name: '团购',
          storeIds: [1, 2, 3, 4],
          storeIdInfo: '[1, 2, 3, 4]',
          productType: '5',
          productInfo: '晚托',
          feeType: '1',
          mergeId: 1,
          feeTypeInfo: '学费',
          billing: '月/季/年制度'
        },
        {
          id: 8,
          name: '大客户',
          storeIds: [1, 2, 3, 4],
          storeIdInfo: '[1, 2, 3, 4]',
          productType: '6',
          productInfo: '暑假托',
          feeType: '3',
          mergeId: 1,
          feeTypeInfo: '学杂费',
          billing: '月/季/年制度'
        }
      ],
      typeNameArr: [],
      typeNamePos: 0,
      storeArr: [],
      storePos: 0,
      feeArr: [],
      feePos: 0,
      hoverOrderArr: []
    }
  },
  mounted() {
    this.merage()
  },
  methods: {
    merageInit() {
      this.typeNameArr = []
      this.typeNamePos = 0
      this.storeArr = []
      this.storePos = 0
      this.feeArr = []
      this.feePos = 0
    },
    merage() {
      this.merageInit()
      for (let i = 0; i < this.skuListInfo.length; i += 1) {
        if (i === 0) {
          // 第一行必须存在
          this.typeNameArr.push(1)
          this.typeNamePos = 0
          this.storeArr.push(1)
          this.storePos = 0
          this.feeArr.push(1)
          this.feePos = 0
        } else {
          // 判断当前元素与上一个元素是否相同,eg：this.typeNamePos 是 this.typeNameArr序号
          // 第一列
          // eslint-disable-next-line no-lonely-if
          if (this.skuListInfo[i].name === this.skuListInfo[i - 1].name) {
            this.typeNameArr[this.typeNamePos] += 1
            this.typeNameArr.push(0)
          } else {
            this.typeNameArr.push(1)
            this.typeNamePos = i
          }
          // 第二列
          if (this.skuListInfo[i].storeIdInfo === this.skuListInfo[i - 1].storeIdInfo && this.skuListInfo[i].name === this.skuListInfo[i - 1].name) {
            this.storeArr[this.storePos] += 1
            this.storeArr.push(0)
          } else {
            this.storeArr.push(1)
            this.storePos = i
          }
          // 第三列
          if (this.skuListInfo[i].feeType === this.skuListInfo[i - 1].feeType && this.skuListInfo[i].storeIdInfo === this.skuListInfo[i - 1].storeIdInfo && this.skuListInfo[i].name === this.skuListInfo[i - 1].name) {
            this.feeArr[this.feePos] += 1
            this.feeArr.push(0)
          } else {
            this.feeArr.push(1)
            this.feePos = i
          }
        }
      }
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      // if (columnIndex === 0) { // 用于设置要合并的列
      //   if (rowIndex % 2 === 0) { // 用于设置合并开始的行号
      //     return {
      //       rowspan: 2, // 合并的行数
      //       colspan: 1, // 合并的猎术, 设置为0则直接不显示
      //     };
      //   }
      //   return {
      //     rowspan: 0,
      //     colspan: 0,
      //   };
      // }
      if (columnIndex === 0) {
        // 第一列的合并方法
        const row1 = this.typeNameArr[rowIndex]
        const col1 = row1 > 0 ? 1 : 0 // 如果被合并了row = 0; 则他这个列需要取消
        console.log(row1)
        return {
          rowspan: row1,
          colspan: col1
        }
      } else if (columnIndex === 1) {
        // 第二列的合并方法
        const row2 = this.storeArr[rowIndex]
        const col2 = row2 > 0 ? 1 : 0 // 如果被合并了row = 0; 则他这个列需要取消
        return {
          rowspan: row2,
          colspan: col2
        }
      } else if (columnIndex === 2) {
        // 第三列的合并方法
        const row3 = this.feeArr[rowIndex]
        const col3 = row3 > 0 ? 1 : 0 // 如果被合并了row = 0; 则他这个列需要取消
        return {
          rowspan: row3,
          colspan: col3
        }
      }
    }
  }
}
</script>

13、axios 跨域问题解决方法 1.打开 vue.config.js 进行配置

devServer: {
proxy: {
'/api': {
target: 'http://www.xxx.com.cn/', // 要请求的 API
changeOrigin: true, // 是否开启跨域
pathRewrite: {
'^/api': '' // 重写路由
}
}
}
} 2.请求时进行后缀请求，比如请求/menu 则请求/api/menu 即可
