import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh',
  title: 'JC',
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap', rel: 'stylesheet' }]
  ],
  description: 'Blog',
  lastUpdated: true,
  themeConfig: {
    outline: [2, 5], // 识别<h2>-<h4>的标题
    outlineTitle: '本页目录',
    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/src/前端基础/HTML基础' }
    ],
    sidebar: {
      '/src': {
        base: '/src',
        items: [
          {
            text: '前端基础',
            collapsed: false,
            items: [
              { text: 'HTML基础', link: '/前端基础/HTML基础' },
              { text: 'H5新特性', link: '/前端基础/H5新特性' }
              // { text: 'HTML基础', link: '/前端基础/HTML基础' }
            ]
          },
          {
            text: 'JAVA',
            collapsed: true,
            items: [
              { text: 'JDK安装', link: '/JAVA/JDK安装' }
              // { text: 'JDK安装', link: '/JAVA/JDK安装' }
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
