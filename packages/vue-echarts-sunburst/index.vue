<template>
    <div class="vue-echarts-sunburst vue-chart" ref="echartsCanvas">

    </div>
</template>

<script>
    import 'echarts/lib/chart/sunburst';
    import {echartsCoreMixin} from "../echarts-core";
    export default {
        name: "vue-echarts-sunburst",
        mixins: [echartsCoreMixin],
        props: {

        },
        data(){
            return {
                seriesModel: {
                    type: 'sunburst',
                    name: '',
                    data: [],
                    label: {
                        show: false,
                        position: 'inside'
                    }
                }
            }
        },
        components: {
        },
        methods: {
            setLegend(){
                let { legend } = this.chartsOption;
                if (legend){
                    return legend;
                }
                return [];
            },
            setSeries(){
                let {seriesSettings} = this.chartsOption;
                let data = this.chartsData;
                let series;
                if (seriesSettings){
                    series = data.map((item, index)=>{
                        let obj = Object.assign({}, this.seriesModel, seriesSettings[index]);
                        obj.data = [item];
                        return obj;
                    })
                } else {
                    let seriesModel = this.initSeriesModel();
                    let {orient, layout} = this.chartsOption;
                    if (orient) seriesModel.orient = orient;
                    if (layout) seriesModel.layout = layout;
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
                let legend = this.setLegend();
                let tooltip = this.setTooltip();
                this.echartsOption = {series, legend, tooltip};
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
