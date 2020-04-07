<template>
    <div class="vue-echarts-boxplot vue-chart" ref="echartsCanvas">

    </div>
</template>

<script>
    import 'echarts/lib/chart/boxplot';
    import {echartsCoreMixin} from "../echarts-core";
    //应用维度 encode
    export default {
        name: "vue-echarts-boxplot",
        mixins: [echartsCoreMixin],
        props: {

        },
        data(){
            return {
                echartsOption: null,
                seriesModel: {
                    type: 'boxplot',
                    name: '',
                    data: [],
                    label: {
                        show: true,
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
            setSeries(){
                this.initSeriesModel();
                let {dimensions, source} = this.chartsData;
                let columns = dimensions.slice(1);
                let seriesData = columns.map(key=>{
                    let itemData = [];
                    source.forEach(item=>{
                        itemData.push(item[key]);
                    });
                    return itemData;
                });
                let series = Object.assign({}, this.seriesModel);
                series.data = seriesData;
                return series;
            },
            setCharts(){
                let { axisType, axisVisible, axisName} = this.chartsOption;
                if (!axisType){
                    axisType = this.axisType;
                }
                if (!axisVisible){
                    axisVisible = this.axisVisible;
                }
                if (!axisName){
                    axisName = this.axisName;
                }
                let {dimensions, source} = this.chartsData;
                let dimension = dimensions[0];
                let data = source.map(item=>{
                    return item[dimension];
                });
                let xAxis = this.setAxis({type:axisType[0],visible: axisVisible[0], name:axisName[0], data});
                let yAxis = this.setAxis({type:axisType[1],visible: axisVisible[1], name:axisName[1]});
                let series = this.setSeries();
                let legend = this.setLegend();
                let tooltip = this.setTooltip();
                this.echartsOption = {legend, xAxis, yAxis, series, tooltip};
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
