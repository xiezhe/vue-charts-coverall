<template>
    <div class="container">
        <div class="middle">
            <router-view></router-view>
        </div>
        <div class="left">
            <side-bar :nav-list="navList"></side-bar>
        </div>
    </div>
</template>

<script>
    import sideBar from '../sidebar';
    export default {
        name: "echarts-view",
        components: {
            sideBar
        },
        data(){
            return {
                type: null,
                navList: [
                    {
                        title: '折线图ok',
                        name: 'line'
                    },
                    {
                        title: '柱状图ok',
                        name: 'bar'
                    },
                    {
                        title: '饼图ok',
                        name: 'pie',
                    },
                    {
                        title: '散点图ok',
                        name: 'scatter'
                    },
                    {
                        title: 'K线图',
                        name: 'candlestick'
                    },
                    {
                        title: '雷达图',
                        name: 'radar'
                    },
                    {
                        title: '盒须图',
                        name: 'boxplot'
                    },
                    {
                        title: '关系图ok',
                        name: 'graph'
                    },
                    {
                        title: '树图ok',
                        name: 'tree'
                    },
                    {
                        title: '矩形树图ok',
                        name: 'treemap'
                    },
                    {
                        title: '旭日图ok',
                        name: 'sunburst'
                    },
                    {
                        title: '平行坐标系ok',
                        name: 'parallel'
                    },
                    {
                        title: '桑基图ok',
                        name: 'sankey'
                    },
                    {
                        title: '漏斗图ok',
                        name: 'funnel'
                    },
                    {
                        title: '仪表盘ok',
                        name: 'gauge'
                    },
                    {
                        title: '象形柱图ok',
                        name: 'pictorialBar'
                    },
                    {
                        title: '主题河流图ok',
                        name: 'themeRiver'
                    },
                    {
                        title: '自定义系列',
                        name: 'custom'
                    },
                    {
                        title: '地理坐标/地图',
                        name: 'map'
                    },
                    {
                        title: '路径图',
                        name: 'lines'
                    },
                    {
                        title: '热力图',
                        name: 'heatmap'
                    }
                ]
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
.container{
    height: 100%;
    padding: 0 0 0 200px;
    overflow: hidden;
    min-width: 800px;
    .middle,.left{
        position:relative;
        float: left;
        height:100%;
        overflow: auto;
    }
    .left{
        width:200px;
        background:pink;
        margin-left:-100%;
        right: 200px;
    }
    .middle{
        width: 100%;
    }
    .vue-echarts{
        height: 300px;
    }
}
</style>
