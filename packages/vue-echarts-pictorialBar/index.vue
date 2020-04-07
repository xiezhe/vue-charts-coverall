<template>
    <div class="vue-echarts-pictorialBar vue-chart" ref="echartsCanvas">

    </div>
</template>

<script>
    import 'echarts/lib/chart/pictorialBar';
    import {echartsCoreMixin} from "../echarts-core";
    //应用维度 encode
    export default {
        name: "vue-echarts-pictorialBar",
        mixins: [echartsCoreMixin],
        props: {

        },
        data(){
            return {
                seriesModel: {
                    type: 'pictorialBar',
                    data: []
                }
            }
        },
        components: {
        },
        methods: {
        },
        mounted(){
            this.init();
        }
    }
</script>

<style lang="scss">
</style>
