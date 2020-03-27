<template>
    <div class="vue-echarts-funnel vue-chart" ref="echartsCanvas">

    </div>
</template>

<script>
    import 'echarts/lib/chart/funnel';
    import {echartsCoreMixin} from "../echarts-core";
    //应用维度 encode
    export default {
        name: "vue-echarts-funnel",
        mixins: [echartsCoreMixin],
        props: {

        },
        data(){
            return {
                seriesModel: {
                    type: 'funnel',
                    data: []
                }
            }
        },
        components: {
        },
        methods: {
            setLegend(){
                let { legend } = this.chartsOption;
                let {dimensions, source} = this.chartsData;
                let renderLegend = null;
                renderLegend = Object.assign({}, this.chartLegend);
                let dimension = dimensions[0];
                renderLegend.data = source.map((item)=>{
                    return item[dimension];
                });
                if (legend){
                    Object.assign(renderLegend, legend);
                }
                return renderLegend;
            },
            setSeries(){
                let series = [];
                let seriesModel = this.initSeriesModel();
                let {dimensions, source} = this.chartsData;
                let dimension = dimensions[0];
                let obj = Object.assign({}, seriesModel);
                obj.data = source.map((item)=>{
                    let temp = {
                        name: item[dimension],
                        value: item[dimensions[1]]
                    };
                    return temp;
                })
                series.push(obj);
                return series;
            },
            setCharts(){
                if (!this.chartsData) return;
                let series = this.setSeries();
                let legend = this.setLegend();
                let tooltip = this.setTooltip();
                this.echartsOption = {legend, series, tooltip};
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
