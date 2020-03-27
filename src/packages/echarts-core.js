import echarts from 'echarts/lib/echarts'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'
import 'echarts/lib/component/dataZoom'
import 'echarts/lib/component/brush'
import 'echarts/lib/component/visualMap'
import 'echarts/lib/component/radar'
import {ECHARTS_ANIMATION, ECHARTS_RARELY, ECHARTS_COLORS, ECHARTS_FREQUENT} from "./constants";

export const echartsCoreMixin = {
    data(){
        return {
            chartsCanvas: null,
            option: null,
            chartLegend: {
                data: []
            },
            chartTooltip: {
                show: true,
                trigger: 'axis'
            }
        }
    },
    computed: {

    },
    props: {
        chartsData: [Object, Array],
        // 要分析渲染的数据
        dataStyle: {
            type: String,
            default: 'normal'
        },
        renderData: {
            type: [Object, Array],
            default:()=>({})
        },
        chartsOption: Object,
        backgroundColor: String,
        title: [Object, Array],
        legend: [Object, Array],
        grid: [Object, Array],
        xAxis: [Object, Array],
        yAxis: [Object, Array],
        polar: [Object, Array],
        radar: Object,
        dataZoom: [Object, Array],
        visualMap: [Object, Array],
        tooltip: Object,
        axisPointer: [Object, Array],
        toolbox: [Object, Array],
        brush: [Object, Array],
        geo: [Object, Array],
        timeline: [Object, Array],
        graphic: [Object, Array],
        calendar: [Object, Array],
        dataset: [Object, Array],
        series: [Object, Array],
        parallel:[Object, Array],
        parallelAxis:[Object, Array],
        singleAxis:[Object, Array],
        // 颜色
        colors: Array,
        // 动画里的参数
        animationOption: {
            type: Object
        },
        // 不频繁使用的参数
        rarelyOption: {
            type: Object
        },
        // 自定义主题
        theme: {
            type: [Object, String]
        },
        // 事件
        events: { type: Object },
        isResize: {
            type: Boolean,
            default: true
        }
    },
    data(){
        return {
            axisVisible: [true, true],
            axisName: ['', ''],
            axisType: ['category', 'value']
        }
    },
    methods: {
        setLegend(){
            let { legend } = this.chartsOption;
            let {dimensions} = this.chartsData;
            let renderLegend = null;
            renderLegend = Object.assign({}, this.chartLegend);
            renderLegend.data = dimensions.slice(1);
            if (legend){
                Object.assign(renderLegend, legend);
            }
            return renderLegend;
        },
        setTooltip(){
            let { tooltip } = this.chartsOption;
            if (tooltip){
                return tooltip;
            }
            return this.chartTooltip
        },
        initSeriesModel(){
            let {seriesSetting} = this.chartsOption;
            let seriesModel = Object.assign({}, this.seriesModel, seriesSetting);
            return seriesModel;
        },
        setOptionByKeys(options, propsObj, defaultKeys){
            let keys = Object.keys(propsObj);
            keys.forEach(key=>{
                if (defaultKeys.indexOf(key)>=0){
                    options[key] = propsObj[key]
                }
            });
        },
        setOptionByDefault(options, defaultKeys){
            defaultKeys.forEach(key=>{
                if (this[key]) options[key] = this[key];
            })
        },
        setAnimation(options){
            if (!this.animationOption) return;
            this.setOptionByKeys(options, this.animationOption, ECHARTS_ANIMATION)
        },
        // 设置罕见用到的属性
        setRarelyOption(options){
            if (!this.rarelyOption) return;
            this.setOptionByKeys(options, this.rarelyOption, ECHARTS_RARELY)
        },
        // 设置主题
        setTheme(){
            if (!this.theme) return;
            let theme = this.theme;
            if (typeof theme === 'object'){
                echarts.registerTheme('customTheme', theme);
                return 'customTheme'
            }
        },
        // 设置颜色
        setColors(options){
            let themeColors = this.theme && this.theme.color;
            options.color = this.colors || themeColors || ECHARTS_COLORS;
        },
        setFrequentOption(options){
            this.setOptionByDefault(options, ECHARTS_FREQUENT)
        },
        // 设置单独传入的参数
        setOptions(options){
            // 设置颜色
            this.setColors(options);
            // 设置罕见用到的参数
            this.setRarelyOption(options);
            // 设置动画
            this.setAnimation(options);
            // 设置常用参数
            this.setFrequentOption(options);
        },
        // 分解组件库定义的参数
        resolveOptions(options){

        },
        // echarts 实例化
        init(){
            if (this.chartsCanvas) return;
            //设置主题
            let themeName = this.setTheme() || 'light';
            // 初始化
            this.chartsCanvas = echarts.init(this.$refs.echartsCanvas,themeName );

            if (this.isResize && this.chartsCanvas){
                this.addResizeListener()
            };
            let option = {};
            this.setOptions(option);
            let mergeOptions = Object.assign({},this.echartsOption, option);
            console.log(mergeOptions);
            this.chartsCanvas.setOption(mergeOptions, true);
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
    created(){
        this.chartsCanvas = null
    },
    beforeDestroy(){
        if (this.isResize) this.removeResizeListener();
        this.echartsDispose();
    }
};
