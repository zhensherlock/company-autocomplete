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
          { text: '开始使用', link: '/zh/guide/getting-started' },
          { text: '示例', link: 'zh/guide/example' }
        ]
      }
    ],
    '/zh/config': [
      {
        text: '配置',
        // collapsible: true,
        items: [
          { text: '基础配置项', link: '/zh/config/' }
        ]
      }
    ]
  },
  footer: {
    message: '本中文文档内容版权为 Michael Sun 所有，保留所有权利。'
  },
  algolia: {
    appId: 'V6CF28P0PS',
    apiKey: '692752b7b3c6f794997d8ae22aed79fa',
    indexName: 'company-autocomplete-docs',
    placeholder: '请输入关键词',
    buttonText: '搜索',
  },
}
