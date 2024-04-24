<!-- 1、将两个复杂对象数组内相同的元素删除
// 例如下方两个数组删除相同元素之后 arr1 剩下【赵六】和【孙七】 arr2 剩下【王五】
const arr1 = [
{ pid: '2023', name: '张三' },
{ pid: '2024', name: '李四' },
{ pid: '2026', name: '赵六' },
{ pid: '2027', name: '孙七' }
]
const arr2 = [
{ id: '2024', name: '李四' },
{ id: '2023', name: '张三' },
{ id: '2025', name: '王五' }
]
const arrId = arr2.map(item => item.id)
const someArr = arr1.filter(item => arrId.includes(item.pid))
const someId = someArr.map(item => item.pid)
arr1 = arr1.filter(item => !someId.includes(item.pid))
arr2 = arr2.filter(item => !someId.includes(item.id))
console.log(arr1, arr2)// arr1 [{ pid: '2026', name: '赵六' },{ pid: '2027', name: '孙七' }] arr2 [{ id: '2025', name: '王五' }]



2、根据数组的相同时间项对数组进行重构
const arr = [
{ time: '2022-11-1', name: '张三' },
{ time: '2022-11-1', name: '李四' },
{ time: '2022-11-2', name: '王五' },
{ time: '2022-11-2', name: '赵六' },
{ time: '2022-11-3', name: '孙七' }
]
const timeArr = [...new Set(arr.map(item => item.time))]
let newArr = []
timeArr.forEach(item => {
newArr.push({ time: item, list: [] })
})
newArr.forEach(it => {
arr.forEach(item => {
if (it.time == item.time) {
it.list.push({ name: item.name })
}
})
})
console.log(newArr)
// 重构后的数组
[
{time: '2022-11-1', list: [ {naem: '张三'}， {name: '李四'} ]},
{time: '2022-11-2', list: [ {naem: '王五'}， {name: '赵六'} ]},
{time: '2022-11-3', list: [ {naem: '孙七'}]}
]
3、常用方法（不改变原数组）
1.concat()
concat() 方法用于连接两个或多个字符串。

该方法没有改变原有字符串，但是会返回连接两个或多个字符串新字符串。

2.every()
every() 方法用于检测数组所有元素是否都符合指定条件（通过函数提供）。

every() 方法使用指定函数检测数组中的所有元素：

如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测。
如果所有元素都满足条件，则返回 true。

数组.every 常用来判断是否全选，只有条件全部满足才返回 true

const arr=[
{id：1，name:'zs',state:true},
{id：2，name:'zs',state:false},
{id：3，name:'zs',state:true},
]
const result = arr.every(item=>item.state)
3.some()
some() 方法用于检测数组中的元素是否满足指定条件（函数提供）。

some() 方法会依次执行数组的每个元素：

如果有一个元素满足条件，则表达式返回 true , 剩余的元素不会再执行检测。
如果没有满足条件的元素，则返回 false。
注意： some() 不会对空数组进行检测。

注意： some() 不会改变原始数组。

数组.forEach 方法会循环数组，且会进行一个完整的循环，无法被终止，浪费性能

数组.some 方法在找到数据后就可以使用 return true 终止 some

const arr =[1,2,3,4] ;
arr.some((item,index)=>{
if(item==="3"){
console.log(index);
retuen true
}
})
4.filter()
filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。

注意： filter() 不会对空数组进行检测。

注意： filter() 不会改变原始数组。

filter 方法可以过滤符合条件的数值，返回一个新数组，可以利用 filter 和 indexOf 进行数组去重操作（indexOf 返回的是该数组内的值第一次出现的索引，若无该值返回-1）

var arr =[1,2,3,4,4,2] ;
arr = arr.filter((item,index)=>{(item, index) =>
　　 arr.indexOf(item) === index
})//arr--[1,2,3,4]
5.map()
map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。

map() 方法按照原始数组元素顺序依次处理元素。

注意： map() 不会对空数组进行检测。

注意： map() 不会改变原始数组。

6.slice()
slice() 方法可从已有的数组中返回选定的元素。

slice()方法可提取字符串的某个部分，并以新的字符串返回被提取的部分。

注意： slice() 方法不会改变原始数组。

7.reduce()
数组.reduce 是一个函数循环累加器

const arr=[
{id：1，name:'西瓜',state:true,price:10,count:1},
{id：2，name:'榴莲',state:true,price:20,count:2},
{id：3，name:'草莓',state:true,price:30,count:3},
]
//累加选中的水果价格
//普通做法
let sum = 0;
arr.filter(item=>item.state).forEach(item=>{
sum += item.price*item.count
})
//使用 reduce,不用在外面定义 sum，直接在方法内定义
//arr.filter(item=>item.state).reduce((结果，item)=>{}，初始值)
arr.filter(item=>item.state).reduce((sum，item)=>{
return sum += item.price*item.count
}，0)
4、会改变原数组
1.pop()
pop() 方法用于删除数组的最后一个元素并返回删除的元素。

注意：此方法改变数组的长度！

提示： 移除数组第一个元素，请使用 shift() 方法。

2.push()
push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。

注意： 新元素将添加在数组的末尾。

注意： 此方法改变数组的长度。

提示： 在数组起始位置添加元素请使用 unshift()。

3.shift()
shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。

注意： 此方法改变数组的长度！

提示: 移除数组末尾的元素可以使用 pop() 方法。

4.unshift()
unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。

注意： 该方法将改变数组的数目。

提示: 将新项添加到数组末尾，请使用 push() 方法。

5.reverse()
reverse() 方法用于颠倒数组中元素的顺序。

6.sort()
sort() 方法用于对数组的元素进行排序。

排序顺序可以是字母或数字，并按升序或降序。

默认排序顺序为按字母升序。

注意：当数字是按字母顺序排列时"40"将排在"5"前面。

使用数字排序，你必须通过一个函数作为参数来调用。

函数指定数字是按照升序还是降序。

注意： 这种方法会改变原始数组！。

7.splice()
splice() 方法用于添加或删除数组中的元素。

注意：这种方法会改变原始数组。 -->
