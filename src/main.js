import Vue from 'vue'
import VuePageTitle from 'vue-page-title'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'

Vue.config.productionTip = false
Vue.use(VuePageTitle, { router,  suffix: '- CBAH' })

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
