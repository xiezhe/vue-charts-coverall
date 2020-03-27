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
const areaPiecesData = {
    dimensions: ['日期','数值'],
    source: [
        {'日期': '2019-10-10', '数值': 200},
        {'日期': '2019-10-11', '数值': 400},
        {'日期': '2019-10-12', '数值': 650},
        {'日期': '2019-10-13', '数值': 500},
        {'日期': '2019-10-14', '数值': 250},
        {'日期': '2019-10-15', '数值': 300},
        {'日期': '2019-10-16', '数值': 450},
        {'日期': '2019-10-17', '数值': 300},
        {'日期': '2019-10-18', '数值': 100},
    ]
};
export const renderData = [
    {
        title:{
            text:'普通折线图(Basic Line Chart)',
            left: 'center',
        },
        chartsData: data,
        chartsOption: {
            legend: {top: 30},
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
        title:{
            text:'区域折线图(Basic area chart)',
            left: 'center',
        },
        chartsData: data,
        chartsOption: {
            axisVisible: [true, true],
            // 坐标轴展示数据类型 这两个参数配置不好图形展示会出现差异
            axisName: ['', ''],
            // 针对x轴的起始
            boundaryGap: false,
            legend: {top: 30},
            // 针对 全局
            seriesSetting: {
                smooth: true,
                areaStyle: {},
            }
        }
    },
    {
        title:{
            text:'柔顺过渡折线图(Smoothed line chart)',
            left: 'center',
        },
        chartsData: data,
        chartsOption: {
            axisVisible: [true, true],
            // 坐标轴展示数据类型 这两个参数配置不好图形展示会出现差异
            axisName: ['', ''],
            // 针对x轴的起始
            boundaryGap: false,
            legend: {top: 30},
            // 针对 全局
            seriesSetting: {
                smooth: true
            }
        }
    },
    {
        title:{
            text:'堆叠区域折线图(Stacked area chart)',
            left: 'center',
        },
        chartsData: stackData,
        chartsOption: {
            axisVisible: [true, true],
            // 坐标轴展示数据类型 这两个参数配置不好图形展示会出现差异
            axisName: ['', ''],
            stackable: true,
            // 针对x轴的起始
            boundaryGap: false,
            legend: {top: 30},
            // 针对 全局
            seriesSetting: {
                smooth: true,
                areaStyle: {},
            }
        }
    },
    {
        title:{
            text:'堆叠折线图(Stacked line chart)',
            left: 'center',
        },
        chartsData: stackData,
        chartsOption: {
            axisVisible: [true, true],
            // 坐标轴展示数据类型 这两个参数配置不好图形展示会出现差异
            axisName: ['', ''],
            stackable: true,
            // 针对x轴的起始
            boundaryGap: false,
            legend: {top: 30}
        }
    },
    {
        title:{
            text:'区域段折线图(Area Pieces)',
            left: 'center',
        },
        chartsData: areaPiecesData,
        visualMap: {
            type: 'piecewise',
            show: false,
            dimension: 0,
            seriesIndex: 0,
            pieces: [{
                gt: 1,
                lt: 3,
                color: 'rgba(0, 180, 0, 0.5)'
            }, {
                gt: 5,
                lt: 7,
                color: 'rgba(0, 180, 0, 0.5)'
            }]
        },
        chartsOption: {
            axisVisible: [true, true],
            // 坐标轴展示数据类型 这两个参数配置不好图形展示会出现差异
            axisName: ['', ''],
            stackable: true,
            // 针对x轴的起始
            boundaryGap: false,
            legend: {top: 30},
            tooltip:{
                left: 'center',
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    restore: {},
                    saveAsImage: {}
                }
            },
            seriesSetting: {
                smooth: 0.6,
                symbol: 'none',
                lineStyle: {
                    color: 'green',
                    width: 5
                },
                markLine: {
                    symbol: ['none', 'none'],
                    label: {show: false},
                    data: [
                        {xAxis: 1},
                        {xAxis: 3},
                        {xAxis: 5},
                        {xAxis: 7}
                    ]
                },
                areaStyle: {},
            }
        }
    }
];
