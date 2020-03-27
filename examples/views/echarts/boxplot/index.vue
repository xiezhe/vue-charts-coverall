<template>
    <div class="example-boxplot">
        <h1>盒须图（Boxplot）</h1>
        <div class="boxplot" v-for="item in renderData">
            <VueEchartsBoxplot :chartsData="item.chartsData"
                           :chartsOption="item.chartsOption"
                           :title="item.title"
                           :xAxis="item.xAxis"
                           :yAxis="item.yAxis"
                           :backgroundColor="item.backgroundColor"
                           :visualMap="item.visualMap"></VueEchartsBoxplot>
        </div>

    </div>
</template>

<script>
    import {renderData} from './data'
    import VueEchartsBoxplot from '_p/vue-echarts-boxplot'
    export default {
        name: "echarts-boxplot",
        components: {
            VueEchartsBoxplot
        },
        data(){
            return {
                renderData
            }
        },
        mounted(){
        }
    }
</script>

<style lang="scss">
    .example-boxplot{
        height: 100%;
        .boxplot {
            height: 300px;
        }
    }
</style>

