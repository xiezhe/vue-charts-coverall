<template>
    <div class="example-gauge">
        <h1>仪表盘（gauge）</h1>
        <div class="gauge" v-for="item in renderData">
            <VueEchartsGauge :chartsOption="item.chartsOption"
                                  :chartsData="item.chartsData"
                                    :grid="item.grid"
                                    :title="item.title"
                                    :singleAxis="item.singleAxis"></VueEchartsGauge>
        </div>

    </div>
</template>

<script>
    import {renderData} from './data'
    import VueEchartsGauge from '_p/vue-echarts-gauge'
    export default {
        name: "echarts-gauge",
        components: {
            VueEchartsGauge
        },
        data(){
            return {
                renderData
            }
        },
        methods: {

        },
        mounted(){
            console.log(
                {
                    min: 0,
                    max: 7,
                    endAngle: 45,
                    splitNumber: 7
                }
            )
        }
    }
</script>

<style lang="scss">
    .example-gauge{
        height: 100%;
        .gauge {
            height: 300px;
        }
    }
</style>

