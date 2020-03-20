<template>
    <div class="vue-echarts-custom vue-chart" ref="echartsCanvas">

    </div>
</template>

<script>
    import 'echarts/lib/chart/custom';
    import {echartsCoreMixin} from "../echarts-core";
    //应用维度 encode
    export default {
        name: "vue-echarts-custom",
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
