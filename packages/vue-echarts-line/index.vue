<template>
    <div class="vue-echarts-line vue-chart" ref="echartsCanvas">

    </div>
</template>

<script>
    import 'echarts/lib/chart/line';
    import {echartsCoreMixin} from "../echarts-core";
    //应用维度 encode
    export default {
        name: "vue-echarts-bar",
        mixins: [echartsCoreMixin],
        props: {},
        data(){
            return {
                data: {

                },
                echartsOption: null,
                seriesModel: {
                    type: 'line',
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
            initSeriesModel(){
                let {seriesSetting} = this.chartsOption;
                this.seriesModel = Object.assign(this.seriesModel, seriesSetting);
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
            setLine(){
                let { axisType, axisVisible, axisName, boundaryGap} = this.chartsOption;
                if (!axisType){
                    axisType = ['category', 'value'];
                }
                if (!axisName) axisName = ['',''];
                if (!axisVisible) axisVisible = [true, true];
                let {dimensions, source} = this.chartsData;
                let dimension = dimensions[0]
                let data = source.map(item=>{
                    return item[dimension];
                });
                let xAxis = this.setAxis({type:axisType[0],visible: axisVisible[0], name:axisName[0], data, boundaryGap: boundaryGap});
                let yAxis= this.setAxis({type:axisType[1],visible: axisVisible[1], name:axisName[1]});

                let series = this.setSeries();
                let legend = this.setLegend();
                let tooltip = this.setTooltip();
                this.echartsOption = {legend, series, xAxis, yAxis, tooltip};
            },
            setNormalOption(){
                this.setLine();
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
.vue-echarts-line{
    height: 100%;
}
</style>
