<template>
    <div class="vue-echarts-graph vue-chart" ref="echartsCanvas">

    </div>
</template>

<script>
    import 'echarts/lib/chart/graph';
    import {echartsCoreMixin} from "../echarts-core";
    //应用维度 encode
    export default {
        name: "vue-echarts-graph",
        mixins: [echartsCoreMixin],
        props: {

        },
        data(){
            return {
                seriesModel: {
                    type: 'graph',
                    layout: 'force',
                    data: [],
                    links: [],
                    roam: true,
                    label: {
                        position: 'right'
                    },
                    force: {
                        repulsion: 100
                    }
                }
            }
        },
        components: {
        },
        methods: {
            setLegend(){
                let { legend } = this.chartsOption;
                if (legend){
                    return legend;
                }
                return [];
            },
            setSeries(){
                let series = [];
                let seriesModel = this.initSeriesModel();
                let obj = Object.assign({}, seriesModel);
                let {nodes, links} = this.chartsData;
                obj.data = nodes;
                obj.links = links;
                series.push(obj);
                return series;
            },
            setCharts(){
                if(!this.chartsData) return;
                let series = this.setSeries();
                let legend = this.setLegend();
                let tooltip = this.setTooltip();
                this.echartsOption = {series, tooltip, legend};
            }
        },
        mounted(){
            this.setCharts();
            this.init();
        }
    }
</script>

<style lang="scss">
</style>
