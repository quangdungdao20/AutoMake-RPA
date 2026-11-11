import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AutoMake Documentation',
  description: 'Tài liệu hướng dẫn sử dụng AutoMake – RPA Studio trên .NET 10 + WPF',

  themeConfig: {
    nav: [
      { text: 'Trang chủ', link: '/' },
      { text: 'Hướng dẫn', link: '/manual/user-guide' },
      { text: 'Kiến trúc', link: '/architecture/overview' },
      { text: 'Phát triển', link: '/development/setup' },
      { text: 'API', link: '/api/api-reference' },
    ],

    sidebar: {
      '/manual/': [
        {
          text: 'Hướng dẫn sử dụng',
          items: [
            { text: 'Giới thiệu', link: '/manual/user-guide' },
            { text: 'Cài đặt', link: '/manual/installation' },
            { text: 'Hướng dẫn bắt đầu', link: '/manual/getting-started' },
            { text: 'Workflow Designer', link: '/manual/workflow-designer' },
            { text: 'Desktop Automation', link: '/manual/desktop-automation' },
            { text: 'Browser Automation', link: '/manual/browser-automation' },
            { text: 'Node Reference', link: '/manual/node-reference' },
            { text: 'Troubleshooting', link: '/manual/troubleshooting' },
          ],
        },
      ],
      '/architecture/': [
        {
          text: 'Kiến trúc',
          items: [
            { text: 'Tổng quan', link: '/architecture/overview' },
            { text: 'Cấu trúc dự án', link: '/architecture/project-structure' },
            { text: 'Workflow Engine', link: '/architecture/workflow-engine' },
            { text: 'Node System', link: '/architecture/node-system' },
          ],
        },
      ],
      '/development/': [
        {
          text: 'Phát triển',
          items: [
            { text: 'Cài đặt môi trường', link: '/development/setup' },
            { text: 'Quy ước viết code', link: '/development/coding-conventions' },
            { text: 'Build và Release', link: '/development/build-and-release' },
          ],
        },
      ],
      '/api/': [
        {
          text: 'API Reference',
          items: [
            { text: 'API Reference', link: '/api/api-reference' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-org/AutoMake' },
    ],
  },
})