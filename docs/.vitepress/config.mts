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
            text: '技巧',
            collapsed: true,
            items: [
              { text: '常用正则', link: '/skill/常用正则' }
              // { text: 'JDK安装', link: '/skill/JDK安装' }
            ]
          },
          {
            text: '其他',
            collapsed: true,
            items: [
              { text: 'JDK安装', link: '/other/JDK安装' },
              { text: 'Dos命令', link: '/other/Dos命令' },
              { text: 'ESLint', link: '/other/ESLint' }
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
