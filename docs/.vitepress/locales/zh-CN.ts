import { version } from '../../../package.json'

export default {
  outlineTitle: '本页目录',
  lastUpdatedText: '上次更新',
  nav: [
    { text: '指南', link: '/zh/guide/what-is-this', activeMatch: '/guide/' },
    { text: '配置项', link: '/zh/config/', activeMatch: '/config/' },
    {
      text: version,
      items: [
        {
          text: '更新日志',
          link: 'https://github.com/zhensherlock/watermark-js-plus/blob/main/CHANGELOG.md'
        }
      ]
    }
  ],
  sidebar: {
    '/zh/guide': [
      {
        text: '向导',
        // collapsible: true,
        items: [
          { text: '介绍', link: '/zh/guide/what-is-this' },
          { text: '开始使用', link: '/zh/guide/getting-started' }
        ]
      }
    ]
  },
  footer: {
    message: '本中文文档内容版权为 Michael Sun 所有，保留所有权利。'
  },
}
