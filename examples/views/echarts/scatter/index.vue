<template>
    <div class="example-scatter">
        <h1>散点图（scatter）</h1>
        <div class="scatter" v-for="item in renderData">
            <VueEchartsScatter :chartsData="item.chartsData" :chartsOption="item.chartsOption" :title="item.title" :series="item.series" :xAxis="item.xAxis" :yAxis="item.yAxis"></VueEchartsScatter>
        </div>

    </div>
</template>

<script>
    import {renderData} from './data'
    import VueEchartsScatter from '_p/vue-echarts-scatter'
    export default {
        name: "echarts-scatter",
        components: {
            VueEchartsScatter
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
    .example-scatter{
        height: 100%;
        .scatter {
            height: 300px;
        }
    }
</style>

