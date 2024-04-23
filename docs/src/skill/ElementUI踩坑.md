1、Element-UI tree 树形控件 checkChange 事件不触发
需求---需要通过父节点选择子叶节点，且部分子叶节点因为权限需要禁用

问题---默认父节点不展开，通过父节点选中子节点时，若父节点未展开过且子节点含有 disabled 节点，check-change 事件将只触发一次，则会出现点击父节点选择子节点，但再次点击父节点不取消选择子节点

解决---将 check-change 事件改为 check 事件

<template>
  <div>
    <el-tree :data="data" ref="tree" show-checkbox node-key="id" :props="defaultProps" check-on-click-node @check="check" @check-change="checkChange"> </el-tree>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [],
      data: [
        {
          id: 1,
          label: '一级 1',
          children: [
            {
              id: 4,
              label: '二级 1-1',
              children: [
                {
                  id: 9,
                  label: '三级 1-1-1',
                  disabled: true
                },
                {
                  id: 10,
                  label: '三级 1-1-2'
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: '一级 2',
          children: [
            {
              id: 5,
              label: '二级 2-1'
            },
            {
              id: 6,
              label: '二级 2-2',
              children: [
                {
                  id: 99,
                  label: '三级 2-2-2'
                },
                {
                  id: 100,
                  label: '三级 9-1-2'
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    check() {
      this.arr = this.$refs.tree.getCheckedKeys(true)
      console.log(this.arr, '数据改变')
    },
    checkChange() {
      console.log('我是节点事件')
    }
  }
}
</script>

2、禁用未来时间
<el-date-picker v-model="value1" type="date" placeholder="选择日期" :picker-options="pickerOptions">

data() {
return {
　　　　// 禁用未来时间
pickerOptions: {
disabledDate(time) {
return time.getTime() > Date.now()
}
}
　　}
}
3、表格复选框禁用及筛选
<el-table :data="tableData" style="width: 100%" @filter-change="filterChange">
　　<el-table-column type="selection" :selectable="selectable"> </el-table-column>
<el-table-column prop="date" label="日期" :filters="type" column-key="filterKey"> </el-table-column>
<el-table-column prop="name" label="姓名"> </el-table-column>
</el-table>

export default {
data() {
return {
tableData: [
{
date: '2016-05-02',
name: '王小虎'
},
{
date: '2016-05-04',
name: '王小虎'
},
{
date: '2016-05-01',
name: '张小虎'
},
{
date: '2016-05-03',
name: '李小虎'
}
],
type: [
{ text: '2016-05-01', value: '2016-05-01' },
{ text: '2016-05-02', value: '2016-05-02' },
{ text: '2016-05-03', value: '2016-05-03' },
{ text: '2016-05-04', value: '2016-05-04' }
]
}
},
methods: {
// 表格筛选
filterChange(val) {
// val 的[filterKey]即表格的 column-key 属性
console.log(val.filterKey)
},
// 复选框禁用
selectable(row) {
// selectable 只能返回布尔值 返回 true 为可选
return row.name === '王小虎'
}
}
}
