import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueEcharts from '../src/index';
import './styles/index.scss'
Vue.config.productionTip = false
Vue.use(vueEcharts);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
