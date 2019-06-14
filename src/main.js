import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

import VueScrollactive from 'vue-scrollactive'
Vue.use(VueScrollactive);

import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false

new Vue({
  created () {
    AOS.init({
      duration: 800,
      easing: 'ease-in-sine',
      once: true
    })
  },
  render: h => h(App),
}).$mount('#app')
