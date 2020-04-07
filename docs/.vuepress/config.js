module.exports = {
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'vue-charts-coverall',
            description: '基于echarts.js封装的可视化组件',
        }
    },
    themeConfig: {
        lastUpdated: 'Last Updated',
        activeHeaderLinks: false,
        locales: {
            '/': {
                label: '简体中文',
                selectText: '选择语言',
                editLinkText: '在 GitHub 上编辑此页',
                nav:[
                    {
                        text: 'echarts',
                        link: '/zh/echarts/'
                    }
                ],
                sidebar: [
                    {
                        title: '介绍',
                        path: '/zh/'
                    },
                    {
                        title: '安装',
                        path: '/zh/installation'
                    },
                    {
                        title: 'echarts',
                        path: '/zh/echarts/',
                        children: [
                            {
                                title: '介绍',
                                path: '/zh/echarts/guide.md'
                            },
                            {
                                title: '开始使用',
                                path: '/zh/echarts/start.md'
                            },
                            {
                                title: '图表',
                                children: [
                                    {
                                        title: '折线图',
                                        path: '/zh/echarts/line.md'
                                    },
                                    {
                                        title: '柱状图',
                                        path: '/zh/echarts/bar.md'
                                    },
                                    {
                                        title: '饼图',
                                        path: '/zh/echarts/pie.md'
                                    },
                                    {
                                        title: '散点图',
                                        path: '/zh/echarts/scatter.md'
                                    },
                                    {
                                        title: 'K 线图',
                                        path: '/zh/echarts/candlestick.md'
                                    },
                                    {
                                        title: '雷达图图',
                                        path: '/zh/echarts/radar.md'
                                    },
                                    {
                                        title: '盒须图',
                                        path: '/zh/echarts/boxplot.md'
                                    },
                                    {
                                        title: '热力图',
                                        path: '/zh/echarts/heatmap.md'
                                    },
                                    {
                                        title: '关系图',
                                        path: '/zh/echarts/graph.md'
                                    },
                                    {
                                        title: '路径图',
                                        path: '/zh/echarts/lines.md'
                                    },
                                    {
                                        title: '树图',
                                        path: '/zh/echarts/tree.md'
                                    },
                                    {
                                        title: '矩形树图',
                                        path: '/zh/echarts/treemap.md'
                                    },
                                    {
                                        title: '旭日图',
                                        path: '/zh/echarts/sunburst.md'
                                    },
                                    {
                                        title: '平行坐标系',
                                        path: '/zh/echarts/parallel.md'
                                    },
                                    {
                                        title: '桑基图',
                                        path: '/zh/echarts/sankey.md'
                                    },
                                    {
                                        title: '漏斗图',
                                        path: '/zh/echarts/funnel.md'
                                    },
                                    {
                                        title: '仪表盘',
                                        path: '/zh/echarts/gauge.md'
                                    },
                                    {
                                        title: '象形柱图',
                                        path: '/zh/echarts/pictorialBar.md'
                                    },
                                    {
                                        title: '主题河流图',
                                        path: '/zh/echarts/themeRiver.md'
                                    },
                                    {
                                        title: '日历坐标系',
                                        path: '/zh/echarts/calendar.md'
                                    },
                                    {
                                        title: '自定义系列',
                                        path: '/zh/echarts/custom.md'
                                    },
                                    {
                                        title: '词云',
                                        path: '/zh/echarts/wordcloud.md'
                                    },
                                    {
                                        title: '地理坐标/地图',
                                        path: '/zh/echarts/map.md'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    }
}
