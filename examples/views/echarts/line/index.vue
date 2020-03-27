<template>
    <div class="example-line">
        <h1>line</h1>
        <div class="line" v-for="item in renderData">
            <VueEchartsLine :chartsData="item.chartsData"
                            :chartsOption="item.chartsOption"
                            :title="item.title"
                            :dataZoom="item.dataZoom"
                            :grid="item.grid"
                            :visualMap="item.visualMap"></VueEchartsLine>
            <div>

            </div>
        </div>

    </div>
</template>

<script>
    import {renderData} from './data'
    import VueEchartsLine from '_p/vue-echarts-line'
    export default {
        name: "echarts-line",
        components: {
            VueEchartsLine
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
    .example-line{
        height: 100%;
        .line {
            height: 300px;
        }
    }
</style>

