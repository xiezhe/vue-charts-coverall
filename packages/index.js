import VueEchartsCore from './vue-echarts-core'
import VueEchartsBar from './vue-echarts-bar'
import VueEchartsLine from './vue-echarts-line'
import VueEchartsPie from './vue-echarts-pie'
import VueEchartsScatter from './vue-echarts-scatter'
import VueEchartsEffectScatter from './vue-echarts-effectScatter'
import VueEchartsRadar from './vue-echarts-radar'
import VueEchartsTree from './vue-echarts-tree'
import VueEchartsTreemap from './vue-echarts-treemap'
import VueEchartsSunburst from './vue-echarts-sunburst'
import VueEchartsBoxplot from './vue-echarts-boxplot'
import VueEchartsCandlestick from './vue-echarts-candlestick'
import VueEchartsHeatmap from './vue-echarts-heatmap'
import VueEchartsMap from './vue-echarts-map'
import VueEchartsParallel from './vue-echarts-parallel'
import VueEchartsLines from './vue-echarts-lines'
import VueEchartsGraph from './vue-echarts-graph'
import VueEchartsSankey from './vue-echarts-sankey'
import VueEchartsFunnel from './vue-echarts-funnel'
import VueEchartsGauge from './vue-echarts-gauge'
import VueEchartsPictorialBar from './vue-echarts-pictorialBar'
import VueEchartsThemeRiver from './vue-echarts-themeRiver'
import VueEchartsCustom from './vue-echarts-custom'

const components = [
    VueEchartsCore,
    VueEchartsBar,
    VueEchartsLine,
    VueEchartsPie,
    VueEchartsScatter,
    VueEchartsEffectScatter,
    VueEchartsRadar,
    VueEchartsTree,
    VueEchartsTreemap,
    VueEchartsSunburst,
    VueEchartsBoxplot,
    VueEchartsCandlestick,
    VueEchartsHeatmap,
    VueEchartsMap,
    VueEchartsParallel,
    VueEchartsLines,
    VueEchartsGraph,
    VueEchartsSankey,
    VueEchartsFunnel,
    VueEchartsGauge,
    VueEchartsPictorialBar,
    VueEchartsThemeRiver,
    VueEchartsCustom
];
const install = function(Vue, opts = {}) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });

};
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
export default {
    version: process.env.VERSION,
    VueEchartsCore,
    VueEchartsBar,
    VueEchartsLine,
    VueEchartsPie,
    VueEchartsScatter,
    VueEchartsEffectScatter,
    VueEchartsRadar,
    VueEchartsTree,
    VueEchartsTreemap,
    VueEchartsSunburst,
    VueEchartsBoxplot,
    VueEchartsCandlestick,
    VueEchartsHeatmap,
    VueEchartsMap,
    VueEchartsParallel,
    VueEchartsLines,
    VueEchartsGraph,
    VueEchartsSankey,
    VueEchartsFunnel,
    VueEchartsGauge,
    VueEchartsPictorialBar,
    VueEchartsThemeRiver,
    VueEchartsCustom,
    install
}
