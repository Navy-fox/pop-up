import './assets/global.scss'
import Vue from 'vue'
import App from './App.vue'
import PortalVue from 'portal-vue'
Vue.use(PortalVue)
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
