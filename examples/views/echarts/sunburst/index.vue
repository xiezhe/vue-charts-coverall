<template>
    <div class="example-sunburst">
        <h1>旭日图（sunburst）</h1>
        <div class="sunburst" v-for="item in renderData">
            <VueEchartsSunburst :chartsData="item.chartsData" :chartsOption="item.chartsOption" :title="item.title" :series="item.series" :xAxis="item.xAxis" :yAxis="item.yAxis"></VueEchartsSunburst>
        </div>

    </div>
</template>

<script>
    import {renderData} from './data'
    import VueEchartsSunburst from '_p/vue-echarts-sunburst'
    export default {
        name: "echarts-sunburst",
        components: {
            VueEchartsSunburst
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
    .example-sunburst{
        height: 100%;
        .sunburst {
            height: 300px;
        }
    }
</style>

