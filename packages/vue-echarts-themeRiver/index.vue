<template>
    <div class="vue-echarts-themeRiver vue-chart" ref="echartsCanvas">

    </div>
</template>

<script>
    import 'echarts/lib/chart/themeRiver';
    import {echartsCoreMixin} from "../echarts-core";
    //应用维度 encode
    export default {
        name: "vue-echarts-themeRiver",
        mixins: [echartsCoreMixin],
        props: {

        },
        data(){
            return {
                seriesModel: {
                    type: 'themeRiver',
                    data: []
                }
            }
        },
        components: {
        },
        methods: {
            setSeries(){
                let seriesModel = this.initSeriesModel();
                let {dimensions, source} = this.chartsData;
                let obj = Object.assign({}, seriesModel);
                let dimension = dimensions[0];
                let columns = dimensions.slice(1);
                let data = source.map(item=>{
                    let itemData = [];
                    columns.forEach((key, index)=>{
                        if (index< columns.length){
                            itemData.push([item[dimension],item[columns[index]], columns[index]]);
                        }
                    });
                    return itemData;
                });
                obj.data = [];
                data.forEach(list=>{
                     list.forEach(item=>{
                         obj.data.push(item);
                    })
                });
                return obj;
            },
            setCharts(){
                if (!this.chartsData) return;
                let series = this.setSeries();
                let legend = this.setLegend();
                let tooltip = this.setTooltip();
                this.echartsOption = {legend, series, tooltip};
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
