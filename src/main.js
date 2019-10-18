import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import 'babel-polyfill'
import axios from 'axios'
import Es6Promise from 'es6-promise'
// import vuescroll from 'vuescroll/dist/vuescroll-native'
// Vue.use(vuescroll)
Es6Promise.polyfill()
Vue.config.productionTip = false
Vue.prototype.$axios = axios
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
