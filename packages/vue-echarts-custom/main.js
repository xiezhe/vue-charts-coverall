import VueEchartsCustom from './index'
VueEchartsCustom.install = function (Vue) {
    Vue.component(VueEchartsCustom.name, VueEchartsCustom)
};
export default VueEchartsCustom
