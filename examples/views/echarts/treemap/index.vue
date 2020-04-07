<template>
    <div class="example-treemap">
        <h1>树图（treemap）</h1>
        <div class="treemap" v-for="item in renderData">
            <VueEchartsTreemap :chartsData="item.chartsData" :chartsOption="item.chartsOption" :title="item.title" :series="item.series" :xAxis="item.xAxis" :yAxis="item.yAxis"></VueEchartsTreemap>
        </div>
    </div>
</template>

<script>
    import {renderData} from './data'
    import VueEchartsTreemap from '_p/vue-echarts-treemap'
    export default {
        name: "echarts-treemap",
        components: {
            VueEchartsTreemap
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
    .example-treemap{
        height: 100%;
        .treemap {
            height: 300px;
        }
    }
</style>

