const data1 = {
    dimensions:['Experiment', 'upper', 'Q3', 'median', 'Q1', 'lower'],
    source: [
        {'Experiment': 'expr0','upper':1070,'Q3':980,'median':940,'Q1':850,'lower':655},
        {'Experiment': 'expr1','upper':960,'Q3':885,'median':845,'Q1':800,'lower':760},
        {'Experiment': 'expr2','upper':940,'Q3':880,'median':855,'Q1':840,'lower':780},
        {'Experiment': 'expr3','upper':920,'Q3':865,'median':815,'Q1':767.5,'lower':720},
        {'Experiment': 'expr4','upper':950,'Q3':870,'median':810,'Q1':807.5,'lower':740}
    ]
};
export const renderData = [
    {
        title: [
            {
                text: 'Michelson-Morley Experiment',
                left: 'center',
            },
            {
                text: 'upper: Q3 + 1.5 * IQR \nlower: Q1 - 1.5 * IQR',
                borderColor: '#999',
                borderWidth: 1,
                textStyle: {
                    fontSize: 14
                },
                left: '10%',
                bottom: 0
            }
        ],
        xAxis: {
            type: 'category',
            boundaryGap: true,
            nameGap: 30,
            splitArea: {
                show: false
            },
            axisLabel: {
                formatter: 'expr {value}'
            },
            splitLine: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            name: 'km/s minus 299,000',
            splitArea: {
                show: true
            }
        },
        grid: {
            left: '10%',
            right: '10%',
            bottom: '15%'
        },
        chartsData: data1,
        chartsOption: {
            // 针对 全局
            legend: {
                show: false
            },
            tooltip: {
                trigger: 'item',
                axisPointer: {
                    type: 'shadow'
                }
            },
            boundaryGap: true,
            seriesSetting: {
                name: 'boxplot',
                tooltip: {
                    formatter: function (param) {
                        return [
                            'Experiment ' + param.name + ': ',
                            'upper: ' + param.data[5],
                            'Q3: ' + param.data[4],
                            'median: ' + param.data[3],
                            'Q1: ' + param.data[2],
                            'lower: ' + param.data[1]
                        ].join('<br/>');
                    }
                }
            }
        }
    },
    {
        title: [
            {
                text: 'Michelson-Morley Experiment',
                left: 'center',
            },
            {
                text: 'upper: Q3 + 1.5 * IRQ \nlower: Q1 - 1.5 * IRQ',
                borderColor: '#999',
                borderWidth: 1,
                textStyle: {
                    fontSize: 14
                },
                left: '10%',
                bottom: 0
            }
        ],
        grid: {
            left: '10%',
            right: '10%',
            bottom: '15%'
        },
        xAxis: {
            type: 'value',
            name: 'km/s minus 299,000',
            splitArea: {
                show: true
            }
        },
        yAxis: {
            type: 'category',
            boundaryGap: true,
            nameGap: 30,
            splitArea: {
                show: false
            },
            axisLabel: {
                formatter: 'expr {value}'
            },
            splitLine: {
                show: false
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
                axisPointer: {
                    type: 'shadow'
                }
            },
            boundaryGap: true,
            seriesSetting: {
                name: 'boxplot',
                tooltip: {
                    formatter: function (param) {
                        return [
                            'Experiment ' + param.name + ': ',
                            'upper: ' + param.data[5],
                            'Q3: ' + param.data[4],
                            'median: ' + param.data[3],
                            'Q1: ' + param.data[2],
                            'lower: ' + param.data[1]
                        ].join('<br/>');
                    }
                }
            }
        }
    }
];
