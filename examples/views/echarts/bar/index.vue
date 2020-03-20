<template>
    <div class="example-bar">
        <h1>bar</h1>
        <div class="bar" v-for="item in barData">
            <h2>histogram柱状图</h2>
            <VueEchartsBar :chartsData="item.chartsData" :chartOption="item.chartOption"></VueEchartsBar>
            <div>

            </div>
        </div>

    </div>
</template>

<script>
    import {barData} from './data'
    import VueEchartsBar from '_p/vue-echarts-bar'
    export default {
        name: "echarts-bar",
        components: {
            VueEchartsBar
        },
        data(){
            return {
                barData,
            }
        },
        mounted(){
            console.log(this.barData);
        }
    }
</script>

<style lang="scss">
.example-bar{
    height: 100%;
    .bar {
        height: 300px;
    }
}
</style>
