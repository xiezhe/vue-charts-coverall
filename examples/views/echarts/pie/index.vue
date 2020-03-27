<template>
    <div class="example-pie">
        <h1>饼状图</h1>
        <div class="pie" v-for="item in renderData">
            <VueEchartsPie :chartsData="item.chartsData"
                           :chartsOption="item.chartsOption"
                           :title="item.title"
                           :backgroundColor="item.backgroundColor"
                           :visualMap="item.visualMap"></VueEchartsPie>
        </div>

    </div>
</template>

<script>
    import {renderData} from './data'
    import VueEchartsPie from '_p/vue-echarts-pie'
    export default {
        name: "echarts-pie",
        components: {
            VueEchartsPie
        },
        data(){
            return {
                renderData,
            }
        },
        mounted(){
        }
    }
</script>

<style lang="scss">
    .example-pie{
        height: 100%;
        .pie {
            height: 300px;
        }
    }
</style>

