<template>
    <div class="example-candlestick">
        <h1>k线图</h1>
        <div class="candlestick" v-for="item in renderData">
            <VueEchartsCandlestick :chartsData="item.chartsData" :chartsOption="item.chartsOption" :title="item.title"></VueEchartsCandlestick>
        </div>

    </div>
</template>

<script>
    import {renderData} from './data'
    import VueEchartsCandlestick from '_p/vue-echarts-candlestick'
    export default {
        name: "echarts-candlestick",
        components: {
            VueEchartsCandlestick
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
    .example-candlestick{
        height: 100%;
        .candlestick {
            height: 300px;
        }
    }
</style>

