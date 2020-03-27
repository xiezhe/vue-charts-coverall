const data1 =  {
    dimensions: ['日期', 'DQ', 'TY', 'SS', 'QG', 'SY', 'DD'],
    source: [
        {'日期':'2015/11/09', 'DQ':10 , 'TY': 8, 'SS':22, 'QG':12, 'SY':32, 'DD':11},
        {'日期':'2015/11/10', 'DQ':12 , 'TY': 12, 'SS':18, 'QG':30, 'SY':18, 'DD':9},
        {'日期':'2015/11/11', 'DQ':80 , 'TY': 22, 'SS':10, 'QG':11, 'SY':22, 'DD':30}
        ]
};
export const renderData = [
    {
        title: {
            text: '象形柱图(PictorialBar)',
            left: 'center',
            top: '0'
        },
        grid: {
            top: '20%'
        },
        singleAxis: {
            top: 50,
            bottom: 50,
            axisTick: {},
            axisLabel: {},
            type: 'time',
            axisPointer: {
                animation: true,
                label: {
                    show: true
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    opacity: 0.2
                }
            }
        },
        chartsData: data1,
        chartsOption: {
            // 针对 全局
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'line',
                    lineStyle: {
                        color: 'rgba(0,0,0,0.2)',
                        width: 1,
                        type: 'solid'
                    }
                }
            },
            boundaryGap: 200,
            legend: {
                top: 30,
                data: ['DQ', 'TY', 'SS', 'QG', 'SY', 'DD']
            }
        }
    }
];
