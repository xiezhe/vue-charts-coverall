<template>
    <div class="vue-echarts-sankey vue-chart" ref="echartsCanvas">

    </div>
</template>

<script>
    import 'echarts/lib/chart/sankey';
    import {echartsCoreMixin} from "../echarts-core";
    //应用维度 encode
    export default {
        name: "vue-echarts-sankey",
        mixins: [echartsCoreMixin],
        props: {

        },
        data(){
            return {
                seriesModel:{
                    type: 'sankey',
                    data: [],
                    links: []
                },
                chartTooltip: {
                    show: true,
                    trigger: 'axis'
                }
            }
        },
        components: {
        },
        methods: {
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
                let tooltip = this.setTooltip();
                this.echartsOption = {series, tooltip};
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
