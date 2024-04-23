antd 框架踩坑
1、使用 antdPro 内的组件内置 request 时，如果依赖的参数来自外部，可能会触发两次请求，解决方案: 将参数先定义至 params，从 params 内传递给 request

使用 params 前

<ProFormSelect
debounceTime={300}
name="dayoff_id"
showSearch
label='标题'
request={async () => {
let res = await queryByOrgId({org_id: id});
if (res?.data) {
arr = res.data.map((v: any) => {
return {
　　 label: v.name,
　　 value: v.id
};
}
return arr;
　}}
/>  
使用 params 后

<ProFormSelect
debounceTime={300}
name="dayoff_id"
showSearch
label='标题'　　
params={id} // 此处重点
request={async (id) => { // 需要传入
let res = await queryByOrgId({org_id: id});
if (res?.data) {
arr = res.data.map((v: any) => {
return {
　　 label: v.name,
　　 value: v.id
};
}
return arr;
　　}}
/>  
 2、useRequest 内的入参可以在 onSuccess 内的第二个参数获取，以数组形式返回

3、useDispatch 的基本使用

const dispatch = useDispatch()
dispatch({
type: 'labelTask/queryTree',
payload: userId
})

// models.js

reducers: {
setTree(state, {patload}) {
return{ ...state, tree: payload }
}
}
effects:{
\*queryTree(action,{call,put}){
const {code,date} = yield call(queryTree, { id:userId })
if ( code === 200 ) {
yield put({ type: 'setTree', payload: data }) 　　　
} 　
}
}  
4、useSelector 使用

const labelTask = useSelector((state) => state?.labelTask)
5、使用 ProFormDependency 时，不属于依赖项的值最好不要在内部判断，否则可能导致更新 state 报错

错误写法

// 外部 flag
const flag = true
<ProFormDependency name={['name']}>
{({ name }) => {
if (flag && name === 'zs') {
return (
<ProFormSelect
options={[
{
value: 'chapter',
label: '盖章后生效',
},
]}
label={`与《${name}》合同约定生效方式`}
/>

        );
    }

}}
</ProFormDependency>
正确写法

// 外部 flag
const flag = true
{ flag && <ProFormDependency name={['name']}>
{({ name }) => {
return (
<ProFormSelect
options={[
{
value: 'chapter',
label: '盖章后生效',
},
]}
　　 label={`与《${name}》合同约定生效方式`}
/>
);
}}
</ProFormDependency> }
6、!!运算符

！将变量转换成 boolean 类型，null、undefined 和空字符串取反都为 false，其余都为 true。
！！常常用来做类型判断，在第一步!（变量）之后再做逻辑取反运算，判断变量是不是有值
var a;
if (a != null && typeof (a) != undefined && a != '') {
//a 有内容才执行的代码  
 }
这段代码可优化写成
var a;
if (!!a) {
//a 有内容才执行的代码...  
 }
7、table 切换分页数据丢失

加上属性 preserveSelectedRowKeys 即可

8、递归处理树

export const formatTree = (arr) => {
return arr?.map((item) => {
return item?.isLeaf === false ? {
key: item?.key,
title: item?.title,
valuse: item?.value,
children: formatTree(item?.children),
isLeaf: item?.isLeaf
} : {
key: item?.key,
title: item?.title,
valuse: item?.value,
data: item,
isLeaf: item?.isLeaf
}
})
}
9、校验字符串是否包含大小写字母+数字+特殊字符，并且长度为 8-12

^(?=._[a-z])(?=._[A-Z])(?=._\d)(?=._[!@#$%^&*()_+])[a-zA-Z\d!@#$%^&*()_+]{8,12}$
10、使用 toString()时不能用 null，否则报错，使用 JSON.parse 时不能传入 undefined、空字符串或空对象

11、使用 useState 的数据时最好做一层深拷贝

function deepClone(obj, hash = new WeakMap()) {
if (obj === null) return obj; // 如果是 null 或者 undefined 我就不进行拷贝操作
if (obj instanceof Date) return new Date(obj);
if (obj instanceof RegExp) return new RegExp(obj);
// 可能是对象或者普通的值 如果是函数的话是不需要深拷贝
if (typeof obj !== "object") return obj;
// 是对象的话就要进行深拷贝
if (hash.get(obj)) return hash.get(obj);
let cloneObj = new obj.constructor();
// 找到的是所属类原型上的 constructor,而原型上的 constructor 指向的是当前类本身
hash.set(obj, cloneObj);
for (let key in obj) {
if (obj.hasOwnProperty(key)) {
// 实现一个递归拷贝
cloneObj[key] = deepClone(obj[key], hash);
}
}
return cloneObj;
}

css
1、css 设置 transform: scale(x)后元素出现偏移

需要设置 transform-origin 即偏移原点，默认情况，变换的原点在元素的中心点，即是元素 X 轴和 Y 轴的 50%处

transform-origin 属性可以使用一个，两个或三个值来指定，其中每个值都表示一个偏移量。 没有明确定义的偏移将重置为其对应的初始值。

一个值： 必须是长度或百分比或 left, center, right, top, bottom 关键字中的一个。

两个值： 其中一个必须是长度或百分比或 left, center, right 关键字中的一个。 另一个必须是长度或百分比或 top, center, bottom 关键字中的一个。

三个值： 前两个值和只有两个值时的用法相同。 第三个值必须是长度值。它始终代表 Z 轴偏移量。

2、less 定义变量

@theme-color: #4285f4;

.button {

background-color: @theme-color;

}
3、sass 定义变量

$fontSize: 12px;

body{

font-size:$fontSize;

}
4、多行文本溢出

// display: -webkit-box;​​ 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。
​​// -webkit-box-orient​​ 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 。
​​// text-overflow: ellipsis;​​，可以用来多行文本的情况下，用省略号“…”隐藏超出范围的文本

overflow : hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;

// 单行文本溢出 ​​
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
