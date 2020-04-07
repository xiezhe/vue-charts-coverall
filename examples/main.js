import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueCharts from '../packages/index';
import './styles/index.scss'
Vue.config.productionTip = false
Vue.use(vueCharts);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
