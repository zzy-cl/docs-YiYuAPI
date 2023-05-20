import {defaultTheme, defineUserConfig} from 'vuepress'
import {searchPlugin} from '@vuepress/plugin-search'

export default defineUserConfig({
    lang: 'zh-CN',
    title: '呓语API',
    description: '一款开源的API库，免费提供视频去水印和图集提取等功能的接口。',
    head: [['link', {rel: 'icon', href: '/images/logo.svg'}]],
    theme: defaultTheme({
        logo: '/images/logo.svg',
        navbar: [{text: '指南', link: '/guide/'}],
        repo: 'https://github.com/zzy-cl/YIYU-API',
        sidebar: {
            '/guide/': [{
                text: '指南', children: ['/guide/index.md', '/guide/rewm.md', '/guide/changelog.md']
            }]
        },
        sidebarDepth: 1,
        editLink: false,
        lastUpdatedText: '最近更新于',
        contributorsText: '贡献者',
        backToHome: '返回首页',
        openInNewWindow: '在新窗口中打开',
        notFound: ['页面丢失啦~', '您好像迷路啦~', '您怎么来到这里啦？', '您已失联，速速返航！', '这里好像没什么东西。'],
        tip: '提示',
        warning: '注意',
        danger: '警告',

    }),
    plugins: [searchPlugin({
        locales: {
            '/': {
                placeholder: '搜索',
            }
        }, // 排除首页
        isSearchable: (page) => page.path !== '/',
    })],
})