import VueEchartsCore from './packages/vue-echarts-core'
import VueEchartsBar from './packages/vue-echarts-bar'
import VueEchartsLine from './packages/vue-echarts-line'
import VueEchartsPie from './packages/vue-echarts-pie'
import VueEchartsScatter from './packages/vue-echarts-scatter'
import VueEchartsEffectScatter from './packages/vue-echarts-effectScatter'
import VueEchartsRadar from './packages/vue-echarts-radar'
import VueEchartsTree from './packages/vue-echarts-tree'
import VueEchartsTreemap from './packages/vue-echarts-treemap'
import VueEchartsSunburst from './packages/vue-echarts-sunburst'
import VueEchartsBoxplot from './packages/vue-echarts-boxplot'
import VueEchartsCandlestick from './packages/vue-echarts-candlestick'
import VueEchartsHeatmap from './packages/vue-echarts-heatmap'
import VueEchartsMap from './packages/vue-echarts-map'
import VueEchartsParallel from './packages/vue-echarts-parallel'
import VueEchartsLines from './packages/vue-echarts-lines'
import VueEchartsGraph from './packages/vue-echarts-graph'
import VueEchartsSankey from './packages/vue-echarts-sankey'
import VueEchartsFunnel from './packages/vue-echarts-funnel'
import VueEchartsGauge from './packages/vue-echarts-gauge'
import VueEchartsPictorialBar from './packages/vue-echarts-pictorialBar'
import VueEchartsThemeRiver from './packages/vue-echarts-themeRiver'
import VueEchartsCustom from './packages/vue-echarts-custom'

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
