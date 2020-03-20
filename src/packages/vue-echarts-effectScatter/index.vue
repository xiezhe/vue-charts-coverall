<template>
    <div class="vue-echarts-effectScatter vue-chart" ref="echartsCanvas">

    </div>
</template>

<script>
    import 'echarts/lib/chart/effectScatter';
    import {echartsCoreMixin} from "../echarts-core";
    //应用维度 encode
    export default {
        name: "vue-echarts-effectScatter",
        mixins: [echartsCoreMixin],
        props: {

        },
        data(){
            return {

            }
        },
        components: {
        },
        methods: {

        },
        mounted(){

        }
    }
</script>

<style lang="scss">
</style>
