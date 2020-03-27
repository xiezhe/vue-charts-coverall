const data1 =  {
    dimensions: ['状态', '数量'],
    source: [
        {数量: 60, 状态: '访问'},
        {数量: 40, 状态: '咨询'},
        {数量: 20, 状态: '订单'},
        {数量: 80, 状态: '点击'},
        {数量: 100, 状态: '展现'}
        ]
};
export const renderData = [
    {
        title: {
            text: '漏斗图',
            subtext: '纯属虚构',
            left: 'center',
            top: '0'
        },
        grid: {
            top: '20%'
        },
        chartsData: data1,
        chartsOption: {
            // 针对 全局
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c}%"
            },
            legend: {top: 50},
            seriesSetting: {
                name:'漏斗图',
                left: '10%',
                top: 80,
                bottom: 60,
                width: '80%',
                min: 0,
                max: 100,
                minSize: '0%',
                maxSize: '100%',
                sort: 'descending',
                gap: 2,
                label: {
                    show: true,
                    position: 'inside'
                },
                labelLine: {
                    length: 10,
                    lineStyle: {
                        width: 1,
                        type: 'solid'
                    }
                },
                itemStyle: {
                    borderColor: '#fff',
                    borderWidth: 1
                },
                emphasis: {
                    label: {
                        fontSize: 20
                    }
                }
            }
        }
    },
    {
        title: {
            text: '金字塔',
            subtext: '纯属虚构',
            left: 'center',
            top: '0'
        },
        grid: {
            top: '20%'
        },
        chartsData: data1,
        chartsOption: {
            // 针对 全局
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c}%"
            },
            legend: {top: 50},
            seriesSetting: {
                name:'金字塔',
                width: '40%',
                height: '45%',
                left: 'center',
                top: 'center',
                sort: 'ascending',
                maxSize: '50%'
            }
        }
    }
];
