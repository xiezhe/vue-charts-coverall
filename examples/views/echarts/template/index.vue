<template>
    <div class="echarts-wrap">
        <component :is="`echarts-${type}`" class="vue-echarts"></component>
    </div>
</template>
<script>
    import echartsBar from '../bar';
    import echartsLine from '../line';
    import echartsPie from '../pie';
    import echartsScatter from '../scatter';
    import echartsCandlestick from '../candlestick';
    import echartsRadar from '../radar';
    import echartsBoxplot from '../boxplot';
    import echartsThemeRiver from '../themeRiver';
    import echartsFunnel from '../funnel';
    import echartsGauge from '../gauge';
    import echartsSankey from '../sankey';
    import echartsPictorialBar from '../pictorialBar';
    import echartsSunburst from '../sunburst';
    import echartsTree from '../tree';
    export default {
        name: "echarts-view",
        components: {
            echartsBar,
            echartsLine,
            echartsPie,
            echartsScatter,
            echartsCandlestick,
            echartsRadar,
            echartsBoxplot,
            echartsThemeRiver,
            echartsFunnel,
            echartsGauge,
            echartsSankey,
            echartsPictorialBar,
            echartsSunburst,
            echartsTree
        },
        data(){
            return {
                type: null
            }
        },
        methods: {
            init () {
                this.type = this.$route.params.type;
            }
        },
        mounted(){

        },
        created(){
            this.init()
        },
        watch: {
            $route() {
                this.init()
            }
        }
    }
</script>

<style lang="scss">
    .echarts-wrap{
        height: 100%;
        .vue-echarts{
            height: 300px;
        }
    }
</style>

