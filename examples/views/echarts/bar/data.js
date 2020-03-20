function mockData() {
    let dimensions = ['类目', 'sin', 'cos'];
    let source = [];
    for (let i = 0; i < 100; i++) {
        source.push({
            '类目': '类目' + i,
            'sin': (Math.sin(i / 5) * (i / 5 -10) + i / 6) * 5,
            'cos': (Math.cos(i / 5) * (i / 5 -10) + i / 6) * 5
        })
    }
    return {
        dimensions,
        source
    }
}
let chartOption = {
    type: 'histogram', //histogram/bar
    // 是否堆叠
    stackable: false,
    // 坐标轴是否可见 xAxis: axisVisible[0], yAxis: axisVisble[1];
    axisVisible: [true, true],
    // 坐标轴展示数据类型 这两个参数配置不好图形展示会出现差异
    axisName: ['我是x轴', '我是y轴'],
    legend: {
        data: [],
        visible: true
    },
    tooltip: {
        show: true
    },
    seriesSetting: {
        label: {
            show: false,
            position: 'center'
        }
    }
};
let example0 = mockData();
export const barData = [
    {
        chartsData: example0,
        chartOption
    }
]
