import Vuex from 'vuex'
import Vue from 'vue'
import session from '@mcity/mcity-vue-auth/dist/store/session'

Vue.config.devtools = true
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    session
  },
  state: {
    errors: [],
    presentMode: false,
    isUserAdmin: false,
    isUserLoading: false,
    mixpanelEnabled: process.env.NODE_ENV,
    adminRole: 'APIADMIN'
  },
  mutations: {
    logError (state, err) {
      // console.log(err.response)
      state.errors.push(err.response)
    },
    updatePresentationMode (state) {
      state.presentMode = !state.presentMode
    },
    setIsUserAdmin (state, payload) {
      state.isUserAdmin = payload
    },
    setIsUserLoading (state, payload) {
      state.isUserLoading = payload
    }
  },
  getters: {
    getPresentMode: state => state.presentMode,
    mixpanelEnabled: state => state.mixpanelEnabled === 'production',
    getErrors: state => state.errors,
    isUserAdmin: state => state.isUserAdmin
  }
})
