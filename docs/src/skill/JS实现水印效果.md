# JS 实现水印效果

```js
// 水印
// @param settings

const waterMark = settings => {
  // 每次添加水印时，都先清一遍水印，防止水印多次添加
  var waterMarkArr = window.sessionStorage.getItem('watermark')
  if (waterMarkArr) {
    var arr1 = waterMarkArr.split(',')
    for (var m = 0; m < arr1.length; m++) {
      var node = document.getElementById(arr1[m])
      if (node) {
        document.body.removeChild(node)
      }
    }
  }
  // 默认设置
  var defaultSettings = {
    watermark_txt: 'text',
    watermark_x: 20, // 水印起始位置 x 轴坐标
    watermark_y: 20, // 水印起始位置 Y 轴坐标
    watermark_rows: 20, // 水印行数
    watermark_cols: 20, // 水印列数
    watermark_x_space: 200, // 水印 x 轴间隔
    watermark_y_space: 100, // 水印 y 轴间隔
    watermark_color: '#000000', // 水印字体颜色
    watermark_alpha: 0.1, // 水印透明度
    watermark_fontsize: '12px', // 水印字体大小
    watermark_font: '微软雅黑', // 水印字体
    watermark_width: 110, // 水印宽度
    watermark_height: 30, // 水印长度
    watermark_angle: 15 // 水印倾斜度数
  }
  // 采用配置项替换默认值，作用类似jquery.extend
  if (arguments.length === 1 && typeof arguments[0] === 'object') {
    var src = arguments[0] || {}
    for (var key in src) {
      if (src[key] && defaultSettings[key] && src[key] === defaultSettings[key]) {
        continue
      } else if (src[key]) {
        defaultSettings[key] = src[key]
      }
    }
  }
  var oTemp = document.createDocumentFragment()
  // 获取页面最大宽度
  // var page_width = Math.max(document.body.scrollWidth,document.body.clientWidth);
  // 获取页面最大长度
  // var page_height = Math.max(document.body.scrollHeight,document.body.clientHeight);
  var div = document.getElementsByClassName('content-box content-collapse')
  // console.log(div);
  // 获取页面最大宽度
  var page_width = Math.max(div[0].scrollWidth, div[0].clientWidth)
  // 获取页面最大长度
  var page_height = Math.max(div[0].scrollHeight, div[0].clientHeight)
  // 如果将水印列数设置为0，或水印列数设置过大，超过页面最大宽度，则重新计算水印列数和水印x轴间隔
  if (defaultSettings.watermark_cols == 0 || parseInt(defaultSettings.watermark_x + defaultSettings.watermark_width * defaultSettings.watermark_cols + defaultSettings.watermark_x_space * (defaultSettings.watermark_cols - 1)) > page_width) {
    defaultSettings.watermark_cols = parseInt((page_width - defaultSettings.watermark_x + defaultSettings.watermark_x_space) / (defaultSettings.watermark_width + defaultSettings.watermark_x_space))
    defaultSettings.watermark_x_space = parseInt((page_width - defaultSettings.watermark_x - defaultSettings.watermark_width * defaultSettings.watermark_cols) / (defaultSettings.watermark_cols - 1))
  }
  // 如果将水印行数设置为0，或水印行数设置过大，超过页面最大长度，则重新计算水印行数和水印y轴间隔
  if (defaultSettings.watermark_rows == 0 || parseInt(defaultSettings.watermark_y + defaultSettings.watermark_height * defaultSettings.watermark_rows + defaultSettings.watermark_y_space * (defaultSettings.watermark_rows - 1)) > page_height) {
    defaultSettings.watermark_rows = parseInt((defaultSettings.watermark_y_space + page_height - defaultSettings.watermark_y) / (defaultSettings.watermark_height + defaultSettings.watermark_y_space))
    defaultSettings.watermark_y_space = parseInt((page_height - defaultSettings.watermark_y - defaultSettings.watermark_height * defaultSettings.watermark_rows) / (defaultSettings.watermark_rows - 1))
  }
  var arr = []

  for (var i = 1; i < defaultSettings.watermark_rows - 1; i++) {
    var y = defaultSettings.watermark_y + (defaultSettings.watermark_y_space + defaultSettings.watermark_height) * i
    for (var j = 0; j < defaultSettings.watermark_cols; j++) {
      var x = defaultSettings.watermark_x + (defaultSettings.watermark_width + defaultSettings.watermark_x_space) * j
      var mask_div = document.createElement('div')
      mask_div.id = 'mask_div' + i + j
      mask_div.appendChild(document.createTextNode(defaultSettings.watermark_txt))
      // 设置水印div倾斜显示
      mask_div.style.webkitTransform = 'rotate(-' + defaultSettings.watermark_angle + 'deg)'
      mask_div.style.MozTransform = 'rotate(-' + defaultSettings.watermark_angle + 'deg)'
      mask_div.style.msTransform = 'rotate(-' + defaultSettings.watermark_angle + 'deg)'
      mask_div.style.OTransform = 'rotate(-' + defaultSettings.watermark_angle + 'deg)'
      mask_div.style.transform = 'rotate(-' + defaultSettings.watermark_angle + 'deg)'
      mask_div.style.visibility = ''
      mask_div.style.position = 'absolute'
      mask_div.style.left = x + 'px'
      mask_div.style.top = y + 'px'
      mask_div.style.overflow = 'hidden'
      mask_div.style.zIndex = '9999'
      // mask_div.style.border="solid #eee 1px";
      mask_div.style.opacity = defaultSettings.watermark_alpha
      mask_div.style.fontSize = defaultSettings.watermark_fontsize
      mask_div.style.fontFamily = defaultSettings.watermark_font
      mask_div.style.color = defaultSettings.watermark_color
      mask_div.style.textAlign = 'center'
      mask_div.style.width = defaultSettings.watermark_width + 'px'
      mask_div.style.height = defaultSettings.watermark_height + 'px'
      mask_div.style.display = 'block'
      mask_div.style.pointerEvents = 'none'
      oTemp.appendChild(mask_div)
      arr.push(mask_div.id)
    }
  }
  fox.sessionStorage.put('watermark', arr)
  document.body.appendChild(oTemp)
}

waterMark({ watermark_txt: '测试用户' })
```
