<template>
    <div class="vue-echarts-scatter vue-chart" ref="echartsCanvas">

    </div>
</template>

<script>
    // 离散图
    import 'echarts/lib/chart/scatter';
    import {echartsCoreMixin} from "../echarts-core";
    export default {
        name: "vue-echarts-scatter",
        mixins: [echartsCoreMixin],
        props: {

        },
        data(){
            return {
                seriesModel: {
                    type: 'scatter',
                    name: '',
                    data: [],
                    label: {
                        show: false,
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

        },
        mounted(){

        }
    }
</script>

<style lang="scss">
</style>
