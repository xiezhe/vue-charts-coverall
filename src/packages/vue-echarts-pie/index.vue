<template>
    <div class="vue-echarts-pie vue-chart" ref="echartsCanvas">

    </div>
</template>

<script>
    import 'echarts/lib/chart/pie';
    import {echartsCoreMixin} from "../echarts-core";
    import {pieData} from './data';
    //应用维度 encode
    export default {
        name: "vue-echarts-pie",
        mixins: [echartsCoreMixin],
        props: {
            chartOption: {
                type: Object,
                default: ()=>{
                    return {
                        // 坐标轴是否可见 xAxis: axisVisible[0], yAxis: axisVisble[1];
                        axisVisible: [true, true],
                        // 坐标轴展示数据类型 这两个参数配置不好图形展示会出现差异
                        axisName: ['', ''],

                        stackable: true,
                        // 针对x轴的起始
                        boundaryGap: false,
                        legend: {
                            left: 10,
                            visible: true,
                            orient: 'vertical',
                        },
                        /*tooltip: {
                            show: true,
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross',
                                label: {
                                    backgroundColor: '#6a7985'
                                }
                            }
                        },*/
                        // 针对 全局
                        seriesSetting: {
                            radius: ['50%', '70%'],
                            avoidLabelOverlap: false,
                            label: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                label: {
                                    show: true,
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    }
                }
            },

            chartsData: {
                type: Object,
                default: function () {
                    return pieData
                }
            },
            // seriesOption 但是在seriesData里面设置方便些
            chartsSeriesOption: {
                type: Object|Array
            }
        },
        data(){
            return {
                data: {

                },
                chartsOption: null,
                seriesModel: {
                    type: 'pie',
                    name: '',
                    radius: '55%',
                    center: ['50%', '50%'],
                    roseType: 'radius',
                    data: [],
                    label: {
                        show: true,
                        position: 'left'
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
                let { legend } = this.chartOption;
                let {dimensions, source} = this.chartsData;
                let dimension = dimensions[0];
                let renderLegend = null;
                if (legend && legend.visible){
                    if (legend.data){
                        renderLegend =  legend;
                    } else {
                        renderLegend = Object.assign({}, this.chartLegend, legend);
                        renderLegend.data = source.map((item)=>{
                            return item[dimension];
                        })
                    }
                }
                return renderLegend;
            },
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
                let { stackable } = this.chartOption;
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
            setPie(){
                let { axisType, axisVisible, axisName, boundaryGap} = this.chartOption;
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
                this.chartsOption = {legend, series, tooltip};
            },
            setNormalOption(){
                this.setPie();
            },
            setDatasetOption(){
                let {columns, rows} = this.chartsData;
                let {xAxis, yAxis} = this.chartsSetOption;
                let series = this.setSeries();
                let option = {dataset:{dimensions, source}, series, xAxis, yAxis};
                this.chartsOption = {...option};
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

<style lang="sass">

</style>
