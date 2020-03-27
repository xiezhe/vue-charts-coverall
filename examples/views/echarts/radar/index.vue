<template>
    <div class="example-radar">
        <h1>雷达图图（radar）</h1>
        <div class="radar" v-for="item in renderData">
            <VueEchartsRadar :chartsData="item.chartsData"
                             :chartsOption="item.chartsOption"
                             :title="item.title"
                             :radar="item.radar"
                             :grid="item.grid"></VueEchartsRadar>
        </div>

    </div>
</template>

<script>
    import {renderData} from './data'
    import VueEchartsRadar from '_p/vue-echarts-radar'
    export default {
        name: "echarts-radar",
        components: {
            VueEchartsRadar
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
    .example-radar{
        height: 100%;
        .radar {
            height: 300px;
        }
    }
</style>

