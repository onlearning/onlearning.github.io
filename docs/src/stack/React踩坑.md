# React 踩坑

## requset

使用 `antdPro` 内的组件内置 `request` 时，如果依赖的参数来自外部，可能会触发两次请求，解决方案: 将参数先定义至 `params`，从 `params` 内传递给 `request`

```js
// 使用 params 前
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
    }
  }}
/>
// 使用 params 后

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
    }
  }}
/>
```

## ProFormDependency

使用 `ProFormDependency` 时，不属于依赖项的值最好不要在内部判断，否则可能导致更新 state 报错

```js
// 错误写法
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
// 正确写法

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
```

## table

table 切换分页数据丢失 加上属性 preserveSelectedRowKeys 即可

## tree

递归处理树

```js
export const formatTree = arr => {
  return arr?.map(item => {
    return item?.isLeaf === false
      ? {
          key: item?.key,
          title: item?.title,
          valuse: item?.value,
          children: formatTree(item?.children),
          isLeaf: item?.isLeaf
        }
      : {
          key: item?.key,
          title: item?.title,
          valuse: item?.value,
          data: item,
          isLeaf: item?.isLeaf
        }
  })
}
```

## 其他

1、使用 toString()时不能用 null，否则报错，使用 JSON.parse 时不能传入 undefined、空字符串或空对象

2、使用 useState 的数据时最好做一层深拷贝

3、useRequest 内的入参可以在 onSuccess 内的第二个参数获取，以数组形式返回

4、使用 treeSelect 时 如果有为 null 的 key 可能导致展示异常 解决方法 利用 uuid 给一个随机 key

5、useDispatch 的基本使用

```js
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
    *queryTree(action,{call,put}){
        const {code,date} = yield call(queryTree, { id:userId })
        if ( code === 200 ) {
            yield put({ type: 'setTree', payload: data }) 　　　
        } 　
    }
}
```

6、useSelector 使用

```js
const labelTask = useSelector(state => state?.labelTask)
```
