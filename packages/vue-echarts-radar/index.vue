<template>
    <div class="vue-echarts-radar vue-chart" ref="echartsCanvas">

    </div>
</template>

<script>
    import 'echarts/lib/chart/radar';
    import 'echarts/lib/component/radar'
    import {echartsCoreMixin} from "../echarts-core";
    //应用维度 encode
    export default {
        name: "vue-echarts-radar",
        mixins: [echartsCoreMixin],
        props: {
            radar: Object
        },
        data(){
            return {
                seriesModel: {
                    type: 'radar',
                    name: '',
                    data: []
                }
            }
        },
        components: {
        },
        methods: {
            setRadar(){
                let {dimensions, source} = this.chartsData;
                let {indicatorMax} = this.chartsOption;
                let dimension = dimensions[0];
                let indicator = source.map((item, index)=>{
                    let obj = {
                        name: item[dimension]
                    };
                    if (indicatorMax && indicatorMax.length){
                        obj.max = indicatorMax[index];
                    }
                    return obj;
                });
                let radar = Object.assign({indicator}, this.radar);
                return radar
            },
            setSeries(){
                let series = [];
                this.initSeriesModel();
                let {dimensions, source} = this.chartsData;
                let columns = dimensions.slice(1);
                let seriesData = columns.map(key=>{
                    let dataObj = {value:[], name: key};
                    source.forEach(item=>{
                        dataObj.value.push(item[key]);
                    });
                    return dataObj;
                });
                let obj = Object.assign({}, this.seriesModel);
                obj.data = seriesData;
                series.push(obj);
                return series;
            },
            setCharts(){
                if (!this.chartsData) return;
                let series = this.setSeries();
                let radar = this.setRadar();
                let legend = this.setLegend();
                let tooltip = this.setTooltip();
                this.echartsOption = {legend, series, radar, tooltip};
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
