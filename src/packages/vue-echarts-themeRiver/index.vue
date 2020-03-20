<template>
    <div class="vue-echarts-themeRiver vue-chart" ref="echartsCanvas">

    </div>
</template>

<script>
    import 'echarts/lib/chart/themeRiver';
    import {echartsCoreMixin} from "../echarts-core";
    //应用维度 encode
    export default {
        name: "vue-echarts-themeRiver",
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
