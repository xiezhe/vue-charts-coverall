<template>
    <div class="vue-echarts-pie vue-chart" ref="echartsCanvas">

    </div>
</template>

<script>
    import 'echarts/lib/chart/pie';
    import {echartsCoreMixin} from "../echarts-core";
    //应用维度 encode
    export default {
        name: "vue-echarts-pie",
        mixins: [echartsCoreMixin],
        props: {},
        data(){
            return {
                data: {

                },
                echartsOption: null,
                seriesModel: {
                    type: 'pie',
                    data: []
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
                let {dimensions, source} = this.chartsData;
                let { stackable } = this.chartsOption;
                let dimension = dimensions[0];
                let valuesKey = dimensions[1];
                series = source.map(item=>{
                    let itemData = [];
                    let obj = Object.assign({}, this.seriesModel);
                    source.forEach(item=>{
                        itemData.push({
                            value: item[valuesKey],
                            name: item[dimension]
                        });
                    });
                    obj.name = dimension;
                    obj.data = itemData;
                    return obj;
                });
                return series;
            },
            // 普通柱状图
            setCharts(){
                let { axisType, axisVisible, axisName, boundaryGap} = this.chartsOption;
                if (!axisType){
                    axisType = ['category', 'value'];
                }
                let {dimensions, source} = this.chartsData;
                let dimension = dimensions[0]
                let data = source.map(item=>{
                    return item[dimension];
                });
                let series = this.setSeries();
                let legend = this.setLegend();
                let tooltip = this.setTooltip();
                this.echartsOption = {legend, series, tooltip};
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
            this.setCharts();
            this.init();
        }
    }
</script>

<style lang="sass">

</style>
