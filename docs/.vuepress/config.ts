

module.exports = {
    lang: 'zh-CN',
    title: '咚咚咚',
    base : '/myPress/',
    description: '这是我的第一个 VuePress 站点',
    head: [['link', { rel: 'icon', href: './public/images/logo.png' }]],
    logo: './public/images/logo.png',
    themeConfig : {
        nav : [
            {
                text: '前端开发',
                items: [
                    {text: 'vue开发', link: ''},
                    {text: '小程序开发', link: ''},
                ]
            },
            {
                text: '摄影',
                items: [
                    {text: '个人分享', link: ''},
                    {text: '拍摄教程', link: ''},
                    {text: '后期教程', link: ''},
                ]
            },
            { text: '软件工具', link: '/api' },
            { text: '其他', link: '/error' }
        ],
        sidebarDepth : 2,
        sidebar: 'auto',
        searchMaxSuggestions: 10,
    }
}