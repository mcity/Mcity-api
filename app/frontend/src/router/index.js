import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import Home from '@/components/Home'
import AuthComponent from '@mcity/mcity-vue-auth/src/components/AuthComponent.vue'
import { checkRequiresAuth } from '@mcity/mcity-vue-auth/dist/router/beforeEachHooks'

Vue.use(Router)
// Enables auth on routes if VUE_APP_TESTING env var is set to false
const testMode = process.env.VUE_APP_TESTING === 'false' || process.env.VUE_APP_TESTING == null
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      meta: {
        requiresAuth: testMode
      }
    },
    {
      path: '/authorized',
      name: 'OverviewAuth',
      components: {
        auth: AuthComponent
      },
      meta: {
        authorized: true
      }
    },
    {
      path: '*',
      name: 'Error',
      component: () => import('@mcity/mcity-vue-shared/components/NotFound')
    }
  ]
})

router.beforeEach(checkRequiresAuth.bind({ $store: store }))

export default router
