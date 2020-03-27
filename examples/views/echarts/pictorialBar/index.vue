<template>
    <div class="example-pictorialBar">
        <h1>象形柱图(PictorialBar) 过于个性化，所以采用原始series</h1>
        <div class="pictorialBar" v-for="item in renderData">
            <VueEchartsPictorialBar :chartsOption="item.chartsOption"
                                  :chartsData="item.chartsData"
                                    :grid="item.grid"
                                    :title="item.title"
                                    :singleAxis="item.singleAxis"></VueEchartsPictorialBar>
        </div>

    </div>
</template>

<script>
    import {renderData} from './data'
    import VueEchartsPictorialBar from '_p/vue-echarts-pictorialBar'
    export default {
        name: "echarts-pictorialBar",
        components: {
            VueEchartsPictorialBar
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
            console.log('over太个性了，直接采用外部参数配置，不支持chartsData')
            console.log('-------')
        }
    }
</script>

<style lang="scss">
    .example-pictorialBar{
        height: 100%;
        .pictorialBar {
            height: 300px;
        }
    }
</style>

