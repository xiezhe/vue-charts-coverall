<template>
    <div class="vue-echarts-bar vue-chart" ref="echartsCanvas">

    </div>
</template>

<script>
    import 'echarts/lib/chart/bar';
    import {echartsCoreMixin} from "../echarts-core";
    //应用维度 encode
    export default {
        name: "vue-echarts-bar",
        mixins: [echartsCoreMixin],
        props: {
            chartOption: {
                type: Object,
                default: ()=>{
                    return {
                        type: 'histogram', //histogram/bar
                        // 是否堆叠
                         : true,
                        // 坐标轴是否可见 xAxis: axisVisible[0], yAxis: axisVisble[1];
                        axisType: [],
                        axisVisible: [true, true],
                        // 坐标轴展示数据类型 这两个参数配置不好图形展示会出现差异
                        axisName: ['我是x轴', '我是y轴'],
                        legend: {
                            data: [],
                            visible: true
                        },
                        tooltip: {
                            show: true
                        },
                        seriesLabel: {},
                    }
                }
            },

            chartsData: {
                type: Object,
                default: function () {
                    return {
                        /*xAxisData: [{
                            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                        }],
                        seriesData: [{
                            name: '直接访问',
                            data: [10, 52, 200, 334, 390, 330, 220]
                        }],*/
                        dimensions: ['日期', '访问用户', '下单用户', '下单率'],
                        source: [
                            { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
                            { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
                            { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
                            { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
                            { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
                            { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
                        ]
                    }
                }
            },
            // seriesOption 但是在seriesData里面设置方便些
            chartsSeriesOption: {
                type: Object|Array
            }
        },
        data(){
            return {
                chartsOption: null,
                seriesModel: {
                    type: 'bar',
                    name: '',
                    data: [],
                    label: {
                        show: false,
                        position: 'inside'
                    }
                },
                _type: 'histogram',
            }
        },
        components: {
        },
        methods: {
            // 设置xAxis
            setXAxis(option){
                let {type, name, data, visible} = option;
                let xAxis = [{
                    type: type,
                    name,
                    show: visible,
                    axisLabel: {
                        formatter (v) {
                            return v + ''
                        }
                    }
                }];
                if (data){
                    xAxis.data = data;
                }
                Object.assign({}, xAxis, this.xAxis);
                /*let propsXAxis = this.xAxis;
                if (!propsXAxis) return;*/
                return xAxis;
            },
            // 设置yAxis
            setYAxis(option){
                let { axisType, axisVisible, axisName} = this.chartOption;
                let type = axisType[1],visible = axisVisible[1],
                    name = axisName[1] || '';

                let yAxis = {
                    type: type || 'value',
                    name,
                    show: visible,
                    axisLabel: {
                        formatter (v) {
                            return v + ''
                        }
                    }
                };
                return yAxis;
            },
            setAxis(option, propsAxis){
                if (propsAxis){
                    if (typeof propsAxis === 'object'){

                    }
                }
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
                let {   } = this.chartOption;
                let columns = dimensions.slice(1);
                series = columns.map(key=>{
                    let itemData = [];
                    let obj = Object.assign({}, this.seriesModel);
                    source.forEach(item=>{
                        itemData.push(item[key]);
                    });
                    if( ){
                        obj.stack = dimensions[0]
                    }
                    obj.name = key;
                    obj.data = itemData;
                    return obj;
                });
                return series;
            },
            // 横向柱状图
            setBarChart(){
                let { axisType, axisVisible, axisName} = this.chartOption;
                if (!axisType || !axisType.length){
                    axisType = ['value', 'category'];
                }
                if (!axisName) axisName = ['', ''];
                let {dimensions, source} = this.chartsData;
                let dimension = dimensions[0];
                let data = source.map(item=>{
                    return item[dimension];
                });

                let xAxis = this.setAxis({type:axisType[0], visible: axisVisible[0], name:axisName[0]}, this.xAxis);
                let yAxis= this.setAxis({type:axisType[1], visible: axisVisible[1], name:axisName[1], data}, this.yAxis);


                let series = this.setSeries();
                let legend = this.setLegend();
                let tooltip = this.setTooltip();
                this.chartsOption = {legend,series, xAxis, yAxis, tooltip};
                console.log(this.chartsOption);
            },
            // 普通柱状图
            setHistogram(){
                let { axisType, axisVisible, axisName} = this.chartOption;
                if (!axisName) axisName = ['', ''];
                if (!axisType){
                    axisType = ['category', 'value'];
                }
                let {dimensions, source} = this.chartsData;
                let dimension = dimensions[0]
                let data = source.map(item=>{
                    return item[dimension];
                });
                let xAxis = this.setAxis({type:axisType[0],visible: axisVisible[0], name:axisName[0], data});
                let yAxis= this.setAxis({type:axisType[1],visible: axisVisible[1], name:axisName[1]});

                let series = this.setSeries();
                let legend = this.setLegend();
                let tooltip = this.setTooltip();
                this.chartsOption = {legend, series, xAxis, yAxis, tooltip};
            },
            setNormalOption(){
                let { type } = this.chartOption;
                let renderType = type || this._type;
                if (renderType == 'bar'){
                    this.setBarChart();
                    return;
                }
                this.setHistogram();
            },
            setDatasetOption(){
                let {columns, rows} = this.chartsData;
                let {xAxis, yAxis} = this.chartsSetOption;
                let series = this.setSeries();
                let option = {dataset:{dimensions, source}, series, xAxis, yAxis};
                this.chartsOption = {...option};
                console.log(this.chartsOption);
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
.vue-echarts-bar{
    height: 100%;
}
</style>
