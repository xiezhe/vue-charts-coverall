import VueEchartsTree from './index'
VueEchartsTree.install = function (Vue) {
    Vue.component(VueEchartsTree.name, VueEchartsTree)
};
export default VueEchartsTree
