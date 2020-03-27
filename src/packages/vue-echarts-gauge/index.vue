<template>
    <div class="vue-echarts-gauge vue-chart" ref="echartsCanvas">

    </div>
</template>

<script>
    import 'echarts/lib/chart/gauge';
    import {echartsCoreMixin} from "../echarts-core";
    export default {
        name: "vue-echarts-gauge",
        mixins: [echartsCoreMixin],
        props: {

        },
        data(){
            return {
                seriesModel: {
                    type: 'gauge',
                    data: [],
                    splitNumber: 10,
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            width: 10
                        }
                    }
                }
            }
        },
        methods: {
            setSeries(){
                let {seriesSettings} = this.chartsOption;
                let data = this.chartsData;
                console.log(data);
                let series;
                if (seriesSettings){
                    series = data.map((item, index)=>{
                        let obj = Object.assign({}, this.seriesModel, seriesSettings[index]);
                        obj.data = [item];
                        return obj;
                    })
                } else {
                    let seriesModel = this.initSeriesModel();
                    series = data.map((item)=>{
                        let obj = Object.assign({}, this.seriesModel, seriesModel);
                        obj.data = [item];
                        return obj;
                    })
                }
                return series;
            },
            setCharts(){
                if (!this.chartsData) return;
                let series = this.setSeries();
                let tooltip = this.setTooltip();
                this.echartsOption = {series, tooltip};
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
