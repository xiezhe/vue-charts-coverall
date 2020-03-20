const data =  {
    dimensions: ['星期', '步数'],
    source: [
        {'星期': 'Mon', '步数': 820},
        {'星期': 'Tue', '步数': 932},
        {'星期': 'Wed', '步数': 901},
        {'星期': 'Thu', '步数': 934},
        {'星期': 'Fri', '步数': 1290},
        {'星期': 'Sat', '步数': 1330},
        {'星期': 'Sun', '步数': 1320}
    ]
};
const stackData = {
    dimensions: ['星期', '邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
    source: [
        {'星期': 'Mon', '邮件营销': 120, '联盟广告':220 , '视频广告':150, '直接访问':320, '搜索引擎':820},
        {'星期': 'Tue', '邮件营销': 132, '联盟广告':182, '视频广告':232, '直接访问':332, '搜索引擎':932},
        {'星期': 'Wed', '邮件营销': 101, '联盟广告':191, '视频广告':201, '直接访问':301, '搜索引擎':901},
        {'星期': 'Thu', '邮件营销': 134, '联盟广告':234 , '视频广告':154, '直接访问':334, '搜索引擎':934},
        {'星期': 'Fri', '邮件营销': 90,  '联盟广告':290, '视频广告':190, '直接访问':390, '搜索引擎':1290},
        {'星期': 'Sat', '邮件营销': 230, '联盟广告':330, '视频广告':330, '直接访问':330, '搜索引擎':1330},
        {'星期': 'Sun', '邮件营销': 210, '联盟广告':230, '视频广告':410, '直接访问':320, '搜索引擎':1320}
    ]
};
export const barData = [
    {
        title: '普通折线图(Basic Line Chart)',
        chartsData: data,
        chartOption: {
            // 针对 全局
            seriesSetting: {
                label: {
                    show: false,
                    position: 'center'
                }
            }
        }
    },
    {
        title:'区域折线图(Basic area chart)',
        chartsData: data,
        chartOption: {
            axisVisible: [true, true],
            // 坐标轴展示数据类型 这两个参数配置不好图形展示会出现差异
            axisName: ['', ''],
            // 针对x轴的起始
            boundaryGap: false,
            legend: {
                visible: true
            },
            // 针对 全局
            seriesSetting: {
                smooth: true,
                areaStyle: {},
            }
        }
    },
    {
        title:'柔顺过渡折线图(Smoothed line chart)',
        chartsData: data,
        chartOption: {
            axisVisible: [true, true],
            // 坐标轴展示数据类型 这两个参数配置不好图形展示会出现差异
            axisName: ['', ''],
            // 针对x轴的起始
            boundaryGap: false,
            legend: {
                visible: true
            },
            // 针对 全局
            seriesSetting: {
                smooth: true
            }
        }
    },
    {
        title:'堆叠区域折线图(Stacked area chart)',
        chartsData: stackData,
        chartOption: {
            axisVisible: [true, true],
            // 坐标轴展示数据类型 这两个参数配置不好图形展示会出现差异
            axisName: ['', ''],
            stackable: true,
            // 针对x轴的起始
            boundaryGap: false,
            legend: {
                visible: true
            },
            // 针对 全局
            seriesSetting: {
                smooth: true,
                areaStyle: {},
            }
        }
    },
    {
        title:'堆叠折线图(Stacked line chart)',
        chartsData: stackData,
        chartOption: {
            axisVisible: [true, true],
            // 坐标轴展示数据类型 这两个参数配置不好图形展示会出现差异
            axisName: ['', ''],
            stackable: true,
            // 针对x轴的起始
            boundaryGap: false,
            legend: {
                visible: true
            }
        }
    }
];
