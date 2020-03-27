<template>
    <div class="example-themeRiver">
        <h1>主题河流图（themeRiver）</h1>
        <div class="themeRiver" v-for="item in renderData">
            <VueEchartsThemeRiver :chartsOption="item.chartsOption"
                                  :chartsData="item.chartsData"
                                    :grid="item.grid"
                                    :title="item.title"
                                    :singleAxis="item.singleAxis"></VueEchartsThemeRiver>
        </div>

    </div>
</template>

<script>
    import {renderData} from './data'
    import VueEchartsThemeRiver from '_p/vue-echarts-themeRiver'
    export default {
        name: "echarts-themeRiver",
        components: {
            VueEchartsThemeRiver
        },
        data(){
            return {
                renderData
            }
        },
        methods: {

        },
        mounted(){
            console.log('---------');
            console.log('over');
            console.log('---------');
        }
    }
</script>

<style lang="scss">
    .example-themeRiver{
        height: 100%;
        .themeRiver {
            height: 300px;
        }
    }
</style>

