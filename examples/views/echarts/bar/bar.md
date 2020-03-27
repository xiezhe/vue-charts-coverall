#bar

## chartsData

数据格式采用维度的方式进行设置可参考echart dataset


- dimensions type Array

- source


| dimension[0] | dimension[1] | dimension[2] |
| --- | --- | --- |
| Soure[0][dimension[0]] | Soure[0]dimension[1] | Soure[0]dimension[2] |
| Soure[1][dimension[1]] | Soure[1]dimension[2] | Soure[1]dimension[2] |
| Soure[2][dimension[1]] | Soure[2]dimension[2] | Soure[2]dimension[2] |


## chartsOption

| 属性名  | 类型 | 说明 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| type | String | Bar的显示类型，histogram为普通柱状图； bar 为横向展示的条形图 | histogram  | histogram/bar  |
| stackable | Boolean |是否堆叠| false  | true/false  |
| axisVisible | Array | x轴和y轴是否显示 | [true, true] | -- |
| axisType | Array | x轴和y轴数据的展示类型  | histogram [category,value]bar[value, category] |category/value |
| axisName | Array | x轴y轴的名称 | [‘’, ''] | 自己定义 |
| legend | Object | 图例组件,设置参考echart legend |   |  |
| seriesSetting | Object | 每一项series通用的设置 |  {type: 'bar',name: '',label:{show: true,position: 'inside'}|  |
