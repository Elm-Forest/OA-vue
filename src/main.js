import Vue from 'vue'
import {createPinia, PiniaVuePlugin} from 'pinia'
import App from './App.vue'
import router from './router'
import '../src/assets/css/global.css'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './plugins/element.js'
import './utils/tokenUtils.js'
import './utils/request.js'
import axios from './utils/request'
import websocket from "@/utils/websocket";

Vue.prototype.$axios = axios
Vue.prototype.$websocket = websocket
Vue.prototype.$path = Vue.prototype.$axios
Vue.use(ElementUI)
Vue.prototype.$ELEMENT = {};
Vue.config.productionTip = false
Vue.use(PiniaVuePlugin)
const pinia = createPinia()
new Vue({
    router,
    store,
    render: h => h(App),
    pinia
}).$mount('#app')