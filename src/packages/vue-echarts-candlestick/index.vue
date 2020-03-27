<template>
    <div class="vue-echarts-candlestick vue-chart" ref="echartsCanvas">

    </div>
</template>

<script>
    import 'echarts/lib/chart/candlestick';
    import {echartsCoreMixin} from "../echarts-core";
    //应用维度 encode
    export default {
        name: "vue-echarts-candlestick",
        mixins: [echartsCoreMixin],
        data(){
            return {
                seriesModel: {
                    type: 'candlestick',
                    name: '',
                    data: []
                },
                axisVisible: [true, true],
                axisName: ['', ''],
                axisType: ['category', 'value']
            }
        },
        components: {
        },
        methods: {
            setAxis(option){
                let {type, name, data, visible} = option;
                let axis = {
                    type: type || 'category',
                    name,
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
                let columns = dimensions.slice(1);
                series = columns.map(key=>{
                    let itemData = [];
                    let obj = Object.assign({}, this.seriesModel);
                    source.forEach(item=>{
                        itemData.push(item[key]);
                    });
                    if(stackable){
                        obj.stack = dimensions[0]
                    }
                    obj.name = key;
                    obj.data = itemData;
                    return obj;
                });
                return series;
            },
            // 普通柱状图
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
                let yAxis= this.setAxis({type:axisType[1],visible: axisVisible[1], name:axisName[1]});

                let series = this.setSeries();
                let legend = this.setLegend();
                let tooltip = this.setTooltip();
                this.echartsOption = {legend, series, xAxis, yAxis, tooltip};
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
