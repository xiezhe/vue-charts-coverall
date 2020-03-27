<template>
    <div class="example-graph">
        <h1>关系图 (graph)</h1>
        <div class="graph" v-for="item in renderData">
            <VueEchartsGraph :chartsData="item.chartsData" :chartsOption="item.chartsOption" :title="item.title" :series="item.series" :xAxis="item.xAxis" :yAxis="item.yAxis"></VueEchartsGraph>
        </div>

    </div>
</template>

<script>
    import {renderData} from './data'
    import VueEchartsGraph from '_p/vue-echarts-graph'
    export default {
        name: "echarts-graph",
        components: {
            VueEchartsGraph
        },
        data(){
            return {
                renderData
            }
        },
        mounted(){
            console.log(this.renderData);
        }
    }
</script>

<style lang="scss">
    .example-graph{
        height: 100%;
        .graph {
            height: 300px;
        }
    }
</style>

