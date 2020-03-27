<template>
    <div class="vue-echarts-core" ref="echartsCanvas">

    </div>
</template>

<script>
    import {echartsCoreMixin} from "../echarts-core";
    export default {
        name: "vue-echarts-core",
        mixins: [echartsCoreMixin],
        data(){
            return {
            }
        },
        methods: {


        },
        mounted(){

        },
        created(){
        },
        beforeDestroy(){

        }
    }
</script>

<style lang="scss" scoped>
.vue-echarts-core{
    height: 100%;
}
</style>
