# JS 实现金额格式化

```js
moneyFormatter = function (money, num) {
  /*
   * 参数说明：
   * money：要格式化的数字
   * num：保留几位小数
   * */
  num = num > 0 && num <= 20 ? num : 2
  money = money + ''
  var index = money.indexOf('.') + 1
  if (index > 1 && money.substring(index, money.length).length > num) {
    money = money.substring(0, index + num)
  }
  money = parseFloat((money + '').replace(/[^\d.-]/g, '')).toFixed(num) + ''
  var l = money.split('.')[0].split('').reverse(),
    r = money.split('.')[1]
  var t = '',
    i
  for (i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 == 0 && i + 1 != l.length ? ',' : '')
  }
  return t.split('').reverse().join('') + '.' + r
}
```

## 如果金额有负数，需要判断是否为负数

```js
moneyFormatter = function (money, num) {
  /*
   * 参数说明：
   * money：要格式化的数字
   * num：保留几位小数
   * */
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
    // 判断为负数  将负号取出
    l = money.split('.')[0].substring(1, money.length).split('').reverse() // 整数部分
    isNegative = money.split('.')[0].substring(0, 1) // 负号
  } else {
    l = money.split('.')[0].split('').reverse()
  }
  r = money.split('.')[1] // 小数部分
  var t = '',
    i
  for (i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 == 0 && i + 1 != l.length ? ',' : '')
  }
  return isNegative + t.split('').reverse().join('') + '.' + r
}
```
