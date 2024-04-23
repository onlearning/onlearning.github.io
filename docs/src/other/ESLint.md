# ESLint

一个检测代码风格的工具

规则报错可以去 [ESLint 官网](https://zh-hans.eslint.org/)查看以参照修改

插件：eslint

配置：setting.json

```js
//ESLint 插件配置
"editor.codeActionsOnSave":{
  "source.fixAll":true,
},
```

插件：Prettier

配置：setting.json

```js
//prettier、eslint、vetur 插件设置
"eslint.alwaysShowStatus": true,
"prettier.trailingComma": "none",
"prettier.semi": false,
"prettier.printWidth": 300,
//每行文字个数，超出将强制换行
"prettier.singleQuote": true,
//单引号替换为双引号
"prettier.arrowParens": "avoid",
"vetur.format.defaultFormatter.html": "js-beautify-html",
// 设置.vue 文件中，Html 代码的格式化插件
"vetur.ignoreProjectWarning": true,
"vetur.format.defaultFormatterOptions": {
  "js-beautify-html": {
    "wrap_attributes": "false"
  },
  "prettier": {
    "trailingComma":"none",
    "printWidth": 300,
    "singleQuote": true,
    "semi": false,
    "arrowParens":"avoid"
  }
}
```

最后，右键.vue 和.js 文件设置格式化文件的方式
