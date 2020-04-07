<template>
    <div class="example-parallel">
        <h1>旭日图（parallel）</h1>
        <div class="parallel" v-for="item in renderData">
            <VueEchartsParallel :chartsData="item.chartsData"
                                :chartsOption="item.chartsOption"
                                :title="item.title" :parallelAxis="item.parallelAxis" :xAxis="item.xAxis" :yAxis="item.yAxis"></VueEchartsParallel>
        </div>

    </div>
</template>

<script>
    import {renderData} from './data'
    import VueEchartsParallel from '_p/vue-echarts-parallel'
    export default {
        name: "echarts-parallel",
        components: {
            VueEchartsParallel
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
    .example-parallel{
        height: 100%;
        .parallel {
            height: 300px;
        }
    }
</style>

