import VueEchartsCore from './index'
VueEchartsCore.install = function (Vue) {
    Vue.component(VueEchartsCore.name, VueEchartsCore)
};
export default VueEchartsCore
