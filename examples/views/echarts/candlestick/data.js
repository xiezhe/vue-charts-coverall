const data1 =  {
    dimensions: ['日期', '数值'],
    source: [
        {'日期': '2017-10-24', '数值': [20, 30, 10, 35]},
        {'日期': '2017-10-25', '数值': [40, 35, 30, 55]},
        {'日期': '2017-10-26', '数值': [33, 38, 33, 40]},
        {'日期': '2017-10-27', '数值': [40, 40, 32, 42]}
    ]
};
export const renderData = [
    {
        title: {
            text: '基本K线图(Basic Candlestick)'
        },
        chartsData: data1,
        chartsOption: {
        }
    }
];
