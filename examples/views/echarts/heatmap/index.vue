<template>
    <div class="example-heatmap">
        <h1>热力图（heatmap）</h1>
        <div class="heatmap" v-for="item in renderData">
            <VueEchartsHeatmap :chartsData="item.chartsData" :chartsOption="item.chartsOption" :title="item.title"></VueEchartsHeatmap>
        </div>

    </div>
</template>

<script>
    import {renderData} from './data'
    import VueEchartsHeatmap from'_p/vue-echarts-heatmap'
    export default {
        name: "echarts-heatmap",
        components: {
            VueEchartsHeatmap
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
    .example-scatter{
        height: 100%;
        .scatter {
            height: 300px;
        }
    }
</style>

