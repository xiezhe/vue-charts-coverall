#line

## chartsData

数据格式采用维度的方式进行设置可参考echart dataset


- dimensions type Array

- source


| dimension[0] | dimension[1] | dimension[2] |
| --- | --- | --- |
| Soure[0][dimension[0]] | Soure[0]dimension[1] | Soure[0]dimension[2] |
| Soure[1][dimension[1]] | Soure[1]dimension[2] | Soure[1]dimension[2] |
| Soure[2][dimension[1]] | Soure[2]dimension[2] | Soure[2]dimension[2] |


## chartOption

| 属性名  | 类型 | 说明 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| stackable | Boolean |是否堆叠| false  | true/false  |
| boundaryGap | Boolean/Array |坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样| false  | true/false  |
| axisVisible | Array | x轴和y轴是否显示 | [true, true] | -- |
| axisType | Array | x轴和y轴数据的展示类型  | histogram [category,value]bar[value, category] |category/value |
| axisName | Array | x轴y轴的名称 | [‘’, ''] | 自己定义 |
| legend | Object | 图例组件,设置参考echarts legend |   |  |
| tooltip | Object | 提示， 设置参考 echarts tooltip |   |  |
| seriesSetting | Object | 每一项series通用的设置 参考 series:[{type:line}] |  {type: 'bar',name: '',label:{show: true,position: 'inside'}|  |
