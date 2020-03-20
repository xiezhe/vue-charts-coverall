<template>
    <div class="example-scatter">
        <h1>scatter</h1>
        <div class="scatter" v-for="item in barData">
            <h2>{{item.title}}</h2>
            <VueEchartsScatter :chartsData="item.chartsData" :chartOption="item.chartOption"></VueEchartsScatter>
            <div>

            </div>
        </div>

    </div>
</template>

<script>
    import {barData} from './data'
    import VueEchartsScatter from '_p/vue-echarts-scatter'
    export default {
        name: "echarts-scatter",
        components: {
            VueEchartsScatter
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
    .example-scatter{
        height: 100%;
        .line {
            height: 300px;
        }
    }
</style>

