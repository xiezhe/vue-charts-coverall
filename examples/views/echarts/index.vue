<template>
    <div class="echarts-wrap">
        <component :is="`echarts-${type}`" class="vue-echarts"></component>
    </div>
</template>

<script>
    import echartsBar from './bar';
    import echartsLine from './line';
    export default {
        name: "echarts-view",
        components: {
            echartsBar,
            echartsLine
        },
        data(){
            return {
                type: null
            }
        },
        methods: {
            init () {
                this.type = this.$route.params.type;
            }
        },
        mounted(){

        },
        created(){
            this.init()
        },
        watch: {
            $route() {
                this.init()
            }
        }
    }
</script>

<style lang="scss">
.echarts-wrap{
    height: 100%;
    .vue-echarts{
        height: 300px;
    }
}
</style>
