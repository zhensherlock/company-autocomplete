import { version } from '../../package.json'
import zh_CN from './locales/zh-CN'

export default {
  title: 'Company Autocomplete',
  description: 'A company info autocomplete component',
  base: '/company-autocomplete/',
  head: [
    ['link', { rel: 'shortcut icon', href: '/company-autocomplete/favicons/favicon-64x64.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/company-autocomplete/favicons/apple-touch-icon.png' }],
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Guide', link: '/guide/what-is-this', activeMatch: '/guide/' },
      { text: 'Configs', link: '/config/', activeMatch: '/config/' },
      {
        text: version,
        items: [
          {
            text: 'Changelog',
            link: 'https://github.com/zhensherlock/company-autocomplete/blob/main/CHANGELOG.md'
          }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhensherlock/company-autocomplete' },
    ],
    sidebar: {
      '/guide': [
        {
          text: 'Guide',
          // collapsible: true,
          items: [
            { text: 'Introduce', link: '/guide/what-is-this' },
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Example', link: '/guide/example' }
          ]
        }
      ],
      '/config': [
        {
          text: 'Config',
          // collapsible: true,
          items: [
            { text: 'Basic Config', link: '/config/' }
          ]
        }
      ]
    },
    // algolia: {
    //   appId: 'V6CF28P0PS',
    //   apiKey: '692752b7b3c6f794997d8ae22aed79fa',
    //   indexName: 'dev_docs'
    // },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2021-present Michael Sun'
    },
    localeLinks: {
      text: 'English',
      items: [
        { text: 'English', link: '/' },
        { text: '简体中文', link: '/zh/' },
      ]
    },
  },
  markdown: {
    // lineNumbers: true
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    zh: {
      label: '中文',
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: zh_CN
    }
  }
}
