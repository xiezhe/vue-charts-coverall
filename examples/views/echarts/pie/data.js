const data1 = {
    dimensions:['访问来源', '数量'],
    source: [
        {'访问来源': '直接访问', '数量': 335},
        {'访问来源': '邮件营销', '数量': 310},
        {'访问来源': '联盟广告', '数量': 274},
        {'访问来源': '视频广告', '数量': 235},
        {'访问来源': '搜索引擎', '数量': 400},
    ]
};
const data2 = {
    dimensions:['访问来源', '数量'],
    source: [
        {'访问来源': '直接访问', '数量': 335},
        {'访问来源': '邮件营销', '数量': 310},
        {'访问来源': '联盟广告', '数量': 234},
        {'访问来源': '视频广告', '数量': 135},
        {'访问来源': '搜索引擎', '数量': 1548},
    ]
};
export const renderData = [
    {
        backgroundColor: '#2c343c',
        title: {
            text: '定制图（Customized Pie）',
            left: 'center',
            top: 20,
            textStyle: {
                color: '#ccc'
            }
        },
        grid: {
            top: '20%'
        },
        visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
                colorLightness: [0, 1]
            }
        },
        chartsData: data1,
        chartsOption: {
            // 针对 全局
            legend: {
                show: false
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            seriesSetting: {
                name: '访问来源',
                radius: '55%',
                center: ['50%', '50%'],
                roseType: 'radius',
                label: {
                    color: 'rgba(255, 255, 255, 0.3)'
                },
                labelLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                },
                itemStyle: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },

                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            },
            boundaryGap: 200,
            indicatorMax: [6500, 16000, 30000, 38000, 52000, 25000],
        }
    },
    {
        title: {
            text: '环形图(Basic Radar Chart)',
            left: 'center',
            top: '0'
        },
        grid: {
            top: '20%'
        },
        chartsData: data2,
        chartsOption: {
            legend: {
                orient: 'vertical',
                left: 10,
                data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
            },
            // 针对 全局
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            seriesSetting: {
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                }
            },
            boundaryGap: 200,
            indicatorMax: [6500, 16000, 30000, 38000, 52000, 25000],
        }
    }
];
