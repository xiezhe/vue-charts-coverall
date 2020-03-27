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
            chartsOption:{
                type: Object
            },
            chartsData: {
                type: Object
            }
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
            // 设置坐标参数
            setAxis(option){
                let {type, name, data, visible, boundaryGap} = option;
                let axis = {
                    type: type || 'category',
                    name,
                    boundaryGap: boundaryGap || false,
                    show: visible,
                    axisLabel: {
                        formatter (v) {
                            return v + ''
                        }
                    }
                };
                if (data){
                    axis.data = data;
                }
                return [axis];
            },
            // 设置series
            setSeries(){
                let series = [];
                this.initSeriesModel();
                let obj = Object.assign({}, this.seriesModel);
                let {source} = this.chartsData;
                obj.data = source;
                return obj;
            },
            setCharts(){
                let { axisType, axisVisible, axisName, boundaryGap} = this.chartsOption;
                if (!axisType){
                    axisType = ['category', 'value'];
                }
                if (!axisName) axisName = ['',''];
                if (!axisVisible) axisVisible = [true, true];

                let series = this.setSeries();
                let legend = this.setLegend();
                let tooltip = this.setTooltip();
                this.echartsOption = {legend, series, xAxis: {}, yAxis:{}, tooltip};
            },
            setNormalOption(){
                this.setCharts();
            },
            setDatasetOption(){
                let {columns, rows} = this.chartsData;
                let {xAxis, yAxis} = this.chartsSetOption;
                let series = this.setSeries();
                let option = {dataset:{dimensions, source}, series, xAxis, yAxis};
                this.echartsOption = {...option};
            }
        },
        mounted(){
            let dataStyle = this.dataStyle;
            if (dataStyle === 'dataset'){
                this.setDatasetOption();
            } else{
                this.setNormalOption();
            }
            this.init();
        }
    }
</script>

<style lang="scss">
</style>
