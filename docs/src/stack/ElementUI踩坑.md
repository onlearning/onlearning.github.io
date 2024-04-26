# ElementUI 踩坑

## tree 树形控件 checkChange 事件不触发

需求---需要通过父节点选择子叶节点，且部分子叶节点因为权限需要禁用

问题---默认父节点不展开，通过父节点选中子节点时，若父节点未展开过且子节点含有 disabled 节点，check-change 事件将只触发一次，则会出现点击父节点选择子节点，但再次点击父节点不取消选择子节点

解决---将 check-change 事件改为 check 事件

```js
<template>
  <div>
    <el-tree :data = "data" ref="tree" show-checkbox node-key="id" :props = "defaultProps" check-on-click-node @check = "check" @check-change = "checkChange"> </el-tree>
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
```

## 禁用未来时间

```js
<el-date-picker v-model="value1" type="date" placeholder="选择日期" :picker-options = "pickerOptions">

<script>
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
</script>
```

## 表格复选框禁用及筛选

```js
<el-table :data = "tableData" style="width: 100%" @filter-change = "filterChange">
  <el-table-column type="selection" :selectable = "selectable"> </el-table-column>
  <el-table-column prop="date" label="日期" :filters="type" column-key="filterKey"> </el-table-column>
  <el-table-column prop="name" label="姓名"> </el-table-column>
</el-table>

<script>
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
</script>
```

## 表格样式调整

ElementUI 表格样式需要加载行内以对象的形式存

```js
<el-table
  :data = "tableData"
  :summary-method = "getSummaries"
  :header-cell-style = "{ height: '2.5rem' }"
  :row-style = "{ height: '2.5rem' }"
  :cell-style = "{ padding: '0' }"
>
```

header-cell-style 设置表头样式

row-style 设置每行的高度

cell-style 将默认的 padding 去除

### 去掉表格默认的高亮效果

```js
/deep/.el-table__row:hover > td {
　　 background-color: transparent;
}
// 如果表格有使用 fixed 进行固定，使用上面的方法会导致部分 fixed 固定的列的高亮无法取消，推荐使用下面的方法
/deep/.el-table__body tr.hover-row > td.el-table__cell {
  background-color: transparent;
}
```

### 修改表格下划线颜色

```js
/deep/.el-table td.el-table__cell,
.el-table th.el-table__cell.is-leaf {
  border-bottom: 1px solid #e6e6e6;
}
```

## 去除进度条的圆角

```js
/deep/.el-progress-bar__outer {
　　border-radius: 0;
}
/deep/.el-progress-bar__inner {
　　border-radius: 0;
}
/deep/.el-progress-bar__inner {
　　"#5b8ff9;
}
```

## cascader 动态加载次级项视图不更新问题

使用 ElementUI 的级联选择器时，选中一级动态渲染次级时数据添加进去但是不显示解决办法，使用 `this.$set` 方法

```js
handleChange(val) {
  this.options.filter(item => {
    if (item.id === val[0]) {
      // item.children = this.children 此方法可以将数据添加进去但不会更新视图，需要使用 this.$set方法
      this.$set(item, 'children', this.children)
    }
  })
  console.log(this.options)
}
```

cascader 点击文本选中当前 label

```js
mounted() {
  setInterval(() => {
    document.querySelectorAll('.el-cascader-node__label').forEach(el => {
      el.onclick = function() {
        if (this.previousElementSibling) this.previousElementSibling.click()
      }
    })
  }, 500)
},
```

## table 相邻单元格合并

```js

<div class="right_content">
  <el-table :data = "skuListInfo" :span-method = "objectSpanMethod" border>
    <el-table-column prop="name" label="名称"> </el-table-column>
    <el-table-column prop="storeIds" label="适应门店"> </el-table-column>
    <el-table-column prop="feeTypeInfo" label="费用类型"> </el-table-column>
    <el-table-column prop="productInfo" label="适用产品"> </el-table-column>
    <el-table-column prop="billing" label="计费方法"> </el-table-column>
  </el-table>
</div>

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

```
