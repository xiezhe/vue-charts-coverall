<template>
    <div class="vue-echarts-scatter vue-chart" ref="echartsCanvas">

    </div>
</template>

<script>
    // 离散图
    import 'echarts/lib/chart/scatter';
    import {echartsCoreMixin} from "../echarts-core";
    export default {
        name: "vue-echarts-scatter",
        mixins: [echartsCoreMixin],
        props: {
        },
        data(){
            return {
                seriesModel: {
                    type: 'scatter',
                    name: '',
                    data: [],
                    label: {
                        show: false,
                        position: 'inside'
                    },
                },
                defaultXAxis: {
                    type: 'value',
                    splitLine: {
                        lineStyle: {
                            type: 'dashed'
                        }
                    },
                },
                defaultYAxis: {
                    type: 'value',
                    splitLine: {
                        lineStyle: {
                            type: 'dashed'
                        }
                    }
                },
                chartLegend: {
                    data: []
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
            setLegend(){
                let { legend } = this.chartsOption;
                if (legend){
                    return legend;
                }
                return [];
            },
            setSeries(){
                let {seriesSettings} = this.chartsOption;
                let data = this.chartsData;
                let series;
                if (seriesSettings){
                    series = data.map((item, index)=>{
                        let obj = Object.assign({}, this.seriesModel, seriesSettings[index]);
                        obj.data = [item];
                        return obj;
                    })
                } else {
                    let seriesModel = this.initSeriesModel();
                    let {orient, layout} = this.chartsOption;
                    if (orient) seriesModel.orient = orient;
                    if (layout) seriesModel.layout = layout;
                    series = data.map((item)=>{
                        let obj = Object.assign({}, this.seriesModel, seriesModel);
                        obj.data = item;
                        return obj;
                    })
                }
                return series;
            },
            setCharts() {
                if (!this.chartsData) return;
                let series = this.setSeries();
                let legend = this.setLegend();
                let tooltip = this.setTooltip();
                let xAxis = this.defaultXAxis;
                let yAxis = this.defaultYAxis;
                this.echartsOption = {series, legend, tooltip, xAxis, yAxis};
            }
        },
        mounted(){
            let dataStyle = this.dataStyle;
            if (dataStyle === 'dataset'){
                this.setDatasetOption();
            } else{
                this.setCharts();
            }
            this.init();
        }
    }
</script>

<style lang="scss">
</style>
