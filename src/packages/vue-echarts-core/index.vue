<template>
    <div class="vue-echarts-core" ref="echartsCanvas">

    </div>
</template>

<script>
    import echarts from 'echarts/lib/echarts'
    export default {
        name: "vue-echarts-core",
        props: {
            chartsData: {

            },
            chartsSeries: {

            },
            chartsOption: {

            },
            // echarts 主题
            theme: {
                type: String,
                default: 'light'
            },
            // init options
            initOptions: {
                type: Object,
                default: ()=> {
                    return {};
                }
            },
            isResize: {
                type: Boolean,
                default: true
            }
        },
        data(){
            return {
                chartsCanvas: null,
                option: null
            }
        },
        methods: {
            // echarts 实例化
            init(){
                if (this.chartsCanvas) return;
                const theme = this.theme;
                /*this.$nextTick(()=>{

                })*/
                console.log(this.$refs.echartsCanvas);
                this.chartsCanvas = echarts.init(this.$refs.echartsCanvas, theme, this.initOptions);
                if (this.isResize && this.chartsCanvas){
                    this.addResizeListener()
                }
                console.log(this.chartsCanvas);
                console.log(this.chartsOption);
                this.chartsCanvas.setOption(this.chartsOption);
                /*if (this.data) this.changeHandler()
                this.createEventProxy()
                if (this.resizeable) this.addResizeListener()*/
            },
            // 销毁实例
            echartsDispose(){
                this.chartsCanvas.dispose()
            },
            handleResize(){
                let charts = this.chartsCanvas;
                if (!charts) return;
                charts.resize();
            },
            // 需要加防抖动
            debounceResize(){

            },

            addResizeListener () {
                window.addEventListener('resize', this.handleResize)
            },
            removeResizeListener () {
                window.removeEventListener('resize', this.handleResize)
            }

        },
        mounted(){
            this.init();
        },
        created(){
            this.chartsCanvas = null
        },
        beforeDestroy(){
            if (this.isResize) this.removeResizeListener();
            this.echartsDispose();
        }
    }
</script>

<style lang="scss" scoped>
.vue-echarts-core{
    height: 100%;
}
</style>
