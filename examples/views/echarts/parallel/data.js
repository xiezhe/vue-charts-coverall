const data1 = [
    [12.99, 100, 82, 'Good'],
    [9.99, 80, 77, 'OK'],
    [20, 120, 60, 'Excellent']
];
export const renderData = [
    {
        title: {
            text: '平行坐标(parallel)'
        },
        parallelAxis: [
            {dim: 0, name: 'Price'},
            {dim: 1, name: 'Net Weight'},
            {dim: 2, name: 'Amount'},
            {
                dim: 3,
                name: 'Score',
                type: 'category',
                data: ['Excellent', 'Good', 'OK', 'Bad']
            }
        ],
        chartsData: data1,
        chartsOption: {
            // 针对 全局
            seriesSetting: {
                lineStyle: {
                    width: 4
                }
            }
        }
    }
];
