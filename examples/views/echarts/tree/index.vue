<template>
    <div class="example-tree">
        <h1>树图（tree）</h1>
        <div class="tree" v-for="item in renderData">
            <VueEchartsTree :chartsData="item.chartsData" :chartsOption="item.chartsOption" :title="item.title" :series="item.series" :xAxis="item.xAxis" :yAxis="item.yAxis"></VueEchartsTree>
        </div>
    </div>
</template>

<script>
    import {renderData} from './data'
    import VueEchartsTree from '_p/vue-echarts-tree'
    export default {
        name: "echarts-tree",
        components: {
            VueEchartsTree
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
    .example-tree{
        height: 100%;
        .tree {
            height: 300px;
        }
    }
</style>

