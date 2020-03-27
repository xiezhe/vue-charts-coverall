<template>
    <div class="example-sankey">
        <h1>桑基图（Sankey）</h1>
        <div class="sankey" v-for="item in renderData">
            <VueEchartsSankey :chartsData="item.chartsData" :chartsOption="item.chartsOption" :title="item.title" :series="item.series"></VueEchartsSankey>
        </div>

    </div>
</template>

<script>
    import {renderData} from './data'
    import VueEchartsSankey from '_p/vue-echarts-sankey'
    export default {
        name: "echarts-sankey",
        components: {
            VueEchartsSankey
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
    .example-sankey{
        height: 100%;
        .sankey {
            height: 300px;
        }
    }
</style>

