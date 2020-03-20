<template>
    <div class="example-line">
        <h1>line</h1>
        <div class="line" v-for="item in barData">
            <h2>{{item.title}}</h2>
            <VueEchartsLine :chartsData="item.chartsData" :chartOption="item.chartOption"></VueEchartsLine>
            <div>

            </div>
        </div>

    </div>
</template>

<script>
    import {barData} from './data'
    import VueEchartsLine from '_p/vue-echarts-line'
    export default {
        name: "echarts-line",
        components: {
            VueEchartsLine
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
    .example-line{
        height: 100%;
        .line {
            height: 300px;
        }
    }
</style>

