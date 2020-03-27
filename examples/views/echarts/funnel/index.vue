<template>
    <div class="example-funnel">
        <h1>漏斗图（funnel）</h1>
        <div class="funnel" v-for="item in renderData">
            <VueEchartsFunnel :chartsOption="item.chartsOption"
                                  :chartsData="item.chartsData"
                                    :grid="item.grid"
                                    :title="item.title"></VueEchartsFunnel>
        </div>
    </div>
</template>

<script>
    import {renderData} from './data'
    import VueEchartsFunnel from '_p/vue-echarts-funnel'
    export default {
        name: "echarts-funnel",
        components: {
            VueEchartsFunnel
        },
        data(){
            return {
                renderData
            }
        },
        methods: {

        },
        mounted(){
            console.log('-------');
            console.log('over');
            console.log('-------');
        }
    }
</script>

<style lang="scss">
    .example-funnel{
        height: 100%;
        .funnel {
            height: 300px;
        }
    }
</style>

