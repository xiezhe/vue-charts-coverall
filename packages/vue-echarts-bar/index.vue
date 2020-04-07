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
        data(){
            return {
                echartsOption: null,
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
                /*let propsXAxis = this.xAxis;
                if (!propsXAxis) return;*/
                return xAxis;
            },
            // 设置yAxis
            setYAxis(option){
                let { axisType, axisVisible, axisName} = this.chartsOption;
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
            // 横向柱状图
            setBarChart(){
                let { axisType, axisVisible, axisName} = this.chartsOption;
                if (!axisType || !axisType.length){
                    axisType = ['value', 'category'];
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
                let xAxis = this.setAxis({type:axisType[0], visible: axisVisible[0], name:axisName[0]});
                let yAxis= this.setAxis({type:axisType[1], visible: axisVisible[1], name:axisName[1], data});
                let series = this.setSeries();
                let legend = this.setLegend();
                let tooltip = this.setTooltip();
                this.echartsOption = {legend,series, xAxis, yAxis, tooltip};
            },
            // 普通柱状图
            setHistogram(){
                let { axisType, axisVisible, axisName} = this.chartsOption;
                if (!axisName) axisName = ['', ''];
                if (!axisType){
                    axisType = ['category', 'value'];
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
            },
            setNormalOption(){
                let { type } = this.chartsOption;
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
                this.echartsOption = {...option};
                console.log(this.echartsOption);
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
