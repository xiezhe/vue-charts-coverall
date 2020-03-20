<template>
    <div class="vue-echarts-tree vue-chart" ref="echartsCanvas">

    </div>
</template>

<script>
    import 'echarts/lib/chart/tree';
    import {echartsCoreMixin} from "../echarts-core";
    //应用维度 encode
    export default {
        name: "vue-echarts-tree",
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
