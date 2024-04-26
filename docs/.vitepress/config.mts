import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CH',
  title: 'JC',
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap', rel: 'stylesheet' }]
  ],
  description: 'Blog',
  lastUpdated: true,
  ignoreDeadLinks: true,
  themeConfig: {
    outline: [2, 5], // 识别<h2>-<h4>的标题
    outlineTitle: '本页目录',
    lastUpdatedText: '上次更新',
    search: {
      provider: 'local'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '个人博客', link: '/src/base/HTML基础' },
      { text: '我的博客园', link: 'https://www.cnblogs.com/JC30705' }
    ],
    sidebar: {
      '/src': {
        base: '/src',
        items: [
          {
            text: '前端基础',
            collapsed: false,
            items: [
              { text: 'HTML基础', link: '/base/HTML基础' },
              { text: 'H5新特性与ES6', link: '/base/H5新特性与ES6' },
              { text: 'JS基础', link: '/base/JS基础' },
              { text: 'HTTP状态码', link: '/base/HTTP状态码' },
              { text: 'Axios基础', link: '/base/Axios基础' },
              { text: 'Ajax基础', link: '/base/Ajax基础' },
              { text: 'JQuery基础', link: '/base/JQuery基础' },
              { text: 'NodeJS基础', link: '/base/NodeJS基础' },
              { text: 'webpack基础', link: '/base/webpack基础' },
              { text: '移动端基础', link: '/base/移动端基础' },
              { text: '小程序基础', link: '/base/小程序基础' }
            ]
          },
          {
            text: 'Vue&React',
            collapsed: true,
            items: [
              { text: 'Vue2基础', link: '/stack/Vue2基础' },
              { text: 'Vue2踩坑', link: '/stack/Vue2踩坑' },
              { text: 'ElementUI踩坑', link: '/stack/ElementUI踩坑' },
              { text: 'Vue3基础', link: '/stack/Vue3基础' },
              { text: 'React基础', link: '/stack/React基础' },
              { text: 'React踩坑', link: '/stack/React踩坑' }
            ]
          },
          {
            text: '技巧',
            collapsed: true,
            items: [
              { text: '常用正则', link: '/skill/常用正则' },
              { text: 'Array数组常用方法', link: '/skill/Array数组常用方法' },
              { text: 'CSS技巧', link: '/skill/CSS技巧' },
              { text: 'JS实现金额格式化', link: '/skill/JS实现金额格式化' },
              { text: 'JS实现水印效果', link: '/skill/JS实现水印效果' },
              { text: 'Echarts图例属性', link: '/skill/Echarts图例属性' },
              { text: 'vite和webpack对比', link: '/skill/vite和webpack对比' },
              { text: 'webpack优化', link: '/skill/webpack优化' },
              { text: '可选链与空值合并操作符', link: '/skill/可选链与空值合并操作符' }
            ]
          },
          {
            text: '其他',
            collapsed: true,
            items: [
              { text: '面试常见问题', link: '/other/面试常见问题' },
              { text: '前端埋点', link: '/other/前端埋点' },
              { text: 'git常用命令', link: '/other/git常用命令' },
              { text: 'Day.js', link: '/other/DayJs' },
              { text: 'ESLint', link: '/other/ESLint' },
              { text: 'Dos命令', link: '/other/Dos命令' },
              { text: 'JDK安装', link: '/other/JDK安装' }
            ]
          }
        ]
      }
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/onlearning/onlearning.github.io' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-JC'
    }, // 网站底部
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    }
  },
  markdown: {
    // 代码块风格
    // theme: 'material-theme-palenight',
    theme: 'github-light',
    // 代码块显示行数
    lineNumbers: true
  }
})
