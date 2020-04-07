# 介绍

:::tip 版本说明
 依赖 `echarts@4.6.0+` 的二次封装
:::

### 基本属性

基本属性分为数据（chartsData）和图表设置(chartsOption)属性


## echarts原始属性

| 参数        | 说明           | 类型  |
| ------------- |-------------| -----|
| title      |标题组件，包含主标题和副标题。[参考文档](https://www.echartsjs.com/zh/option.html#title) | object/array |
| legend     |图例组件。[参考文档](https://www.echartsjs.com/zh/option.html#legend)|   object/array |
| grid       |直角坐标系内绘图网格，单个 grid 内最多可以放置上下两个 X 轴，左右两个 Y 轴。[参考文档](https://www.echartsjs.com/zh/option.html#grid)|   object/array |
| xAxis      |直角坐标系 grid 中的 x 轴[参考文档](https://www.echartsjs.com/zh/option.html#grid)|   object/array |
| yAxis      |直角坐标系 grid 中的 y 轴[参考文档](https://www.echartsjs.com/zh/option.html#yAxis)|   object/array |
| polar     |极坐标系，可以用于散点图和折线图。[参考文档](https://www.echartsjs.com/zh/option.html#polar)|   object/array |
| radiusAxis|极坐标系的径向轴。[参考文档](https://www.echartsjs.com/zh/option.html#radiusAxis)|   object/array |
| angleAxis     |极坐标系的角度轴。[参考文档](https://www.echartsjs.com/zh/option.html#angleAxis)|   object/array |
| radar     |雷达图坐标系组件，只适用于雷达图。[参考文档](https://www.echartsjs.com/zh/option.html#radar)|   object/array |
| dataZoom     |用于区域缩放。[参考文档](https://www.echartsjs.com/zh/option.html#dataZoom)|   object/array |
| visualMap     |视觉映射组件。[参考文档](https://www.echartsjs.com/zh/option.html#visualMap)|   object/array |
| tooltip     |提示框组件。[参考文档](https://www.echartsjs.com/zh/option.html#tooltip)|   object/array |
| axisPointer     |这是坐标轴指示器（axisPointer）的全局公用设置。[参考文档](https://www.echartsjs.com/zh/option.html#axisPointer)|   object/array |
| toolbox     |工具栏。[参考文档](https://www.echartsjs.com/zh/option.html#toolbox)|   object/array |
| brush     |区域选择组件。[参考文档](https://www.echartsjs.com/zh/option.html#brush)|   object/array |
| geo     |地理坐标系组件。[参考文档](https://www.echartsjs.com/zh/option.html#geo)|   object/array |
| parallel     |平行坐标系。[参考文档](https://www.echartsjs.com/zh/option.html#parallel)|   object/array |
| parallelAxis     |平行坐标系中的坐标轴。[参考文档](https://www.echartsjs.com/zh/option.html#parallelAxis)|   object/array |
| singleAxis     |单轴。[参考文档](https://www.echartsjs.com/zh/option.html#singleAxis)|   object/array |
| timeline     |timeline 组件。[参考文档](https://www.echartsjs.com/zh/option.html#timeline)|   object/array |
| graphic     |原生图形元素组件。[参考文档](https://www.echartsjs.com/zh/option.html#graphic)|   object/array |
| calendar     |日历坐标系组件。[参考文档](https://www.echartsjs.com/zh/option.html#calendar)|   object/array |
| dataset     |数据集。[参考文档](https://www.echartsjs.com/zh/option.html#dataset)|   object/array |
| aria     |aria。[参考文档](https://www.echartsjs.com/zh/option.html#aria)|   object/array |
| dataset     |dataset。[参考文档](https://www.echartsjs.com/zh/option.html#dataset)|   object/array |
| series     |系列列表。[参考文档](https://www.echartsjs.com/zh/option.html#series)|   object/array |
| color     |调色盘颜色列表。[参考文档](https://www.echartsjs.com/zh/option.html#color)|   object/array |
| backgroundColor     |背景色。[参考文档](https://www.echartsjs.com/zh/option.html#backgroundColor)|   object/array |
| textStyle     |全局的字体样式。[参考文档](https://www.echartsjs.com/zh/option.html#textStyle)|   object/array |
| animation     |是否开启动画。[参考文档](https://www.echartsjs.com/zh/option.html#animation)|   object/array |
| animationThreshold     |是否开启动画的阈值，当单个系列显示的图形数量大于这个阈值时会关闭动画。[参考文档](https://www.echartsjs.com/zh/option.html#animationThreshold)|   object/array |
| animationDuration     |初始动画的时长，支持回调函数，可以通过每个数据返回不同的时长实现更戏剧的初始动画效果。[参考文档](https://www.echartsjs.com/zh/option.html#animationDuration)|   object/array |
| animationEasing     |初始动画的缓动效果.[参考文档](https://www.echartsjs.com/zh/option.html#animationEasing)|   object/array |
| animationDelay     |初始动画的延迟。[参考文档](https://www.echartsjs.com/zh/option.html#animationDelay)|   object/array |
| animationDurationUpdate     |数据更新动画的时长。[参考文档](https://www.echartsjs.com/zh/option.html#animationDurationUpdate)|   object/array |
| animationEasingUpdate     |数据更新动画的缓动效果。[参考文档](https://www.echartsjs.com/zh/option.html#animationEasingUpdate)|   object/array |
| animationDelayUpdate     |数据更新动画的延迟。[参考文档](https://www.echartsjs.com/zh/option.html#animationDelayUpdate)|   object/array |
| blendMode     |图形的混合模式。[参考文档](https://www.echartsjs.com/zh/option.html#blendMode)|   object/array |
| hoverLayerThreshold     |图形数量阈值，决定是否开启单独的 hover 层。[参考文档](https://www.echartsjs.com/zh/option.html#hoverLayerThreshold)|   object/array |
| useUTC     |是否使用 UTC 时间。[参考文档](https://www.echartsjs.com/zh/option.html#useUTC)|   object/array |

