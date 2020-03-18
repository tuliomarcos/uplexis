import Vue from 'vue'
import App from './App.vue'
import router from './js/utils/router'
import store from './js/utils/store/store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
