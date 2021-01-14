import '@babel/polyfill'
import Vue from 'vue'
import VueMultianalytics from 'vue-multianalytics'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import setupInterceptors from './interceptors'

setupInterceptors()

Vue.config.productionTip = true

if (process.env.NODE_ENV === 'production') {
  Vue.use(VueMultianalytics, {
    modules: {
      mixpanel: { token: process.env.VUE_APP_MIXPANEL_TOKEN || null }
    },
    routing: {
      vueRouter: router
    }
  })
}

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
