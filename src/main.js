import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

import VueScrollactive from 'vue-scrollactive'
Vue.use(VueScrollactive);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
