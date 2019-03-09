<template>
  <v-app>
    <div>
      <mcity-toolbar
        :fullname="fullname"
        :username="username"
        :presentation-text="presentationText"
        :isUserAdmin="isUserAdmin"
        :title="title"
      >
        <template slot="buttons">
        </template>
      </mcity-toolbar>
    </div>

    <v-content>
      <v-container fluid>
        <v-progress-circular 
          v-show="isUserLoading"
          indeterminate
          class="mb-2"
        >
        </v-progress-circular>
        <v-alert
          type="error"
          v-model="showRequestFailed"
          dismissible
        >
          {{ errorText }}
        </v-alert>
        <router-view/>
        <router-view name="auth"/>
        <auth-refresh
          v-if="getShowIframe"
        ></auth-refresh>
      </v-container>
    </v-content>

    <v-footer dark color="primary" fixed app>
      <span>&copy; 2019 The Regents of the University of Michigan</span>
      <v-spacer></v-spacer>
      <span class="mr-1">{{ username }} : {{ today }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapMutations, mapGetters, mapActions, mapState } from 'vuex'
import authRefresh from 'mcity-vue-auth/src/components/RefreshAuthiFrame.vue'
import McityToolbar from 'mcity-vue-shared/components/McityToolbar.vue'
import { dom } from '@fortawesome/fontawesome-svg-core'

export default {
  name: 'App',
  components: {
    authRefresh,
    McityToolbar
  },
  methods: {
    ...mapMutations([
      'logError',
    ])
  },
  watch: {
    errors (val) {
      this.showRequestFailed = true
      this.defultText = "Request Failed - If problem persists, please email mcity-engineering@umich.edu" + val[val.length - 1]
      this.errorText = val[val.length - 1].data || this.defultText
    }
  },
  computed: {
    ...mapGetters([
      'getShowIframe',
    ]),
    ...mapState({
      getPresentMode: state => state.presentMode,
      isUserAdmin: state => state.isUserAdmin,
      isUserLoading: state => state.isUserLoading,
      errors: state => state.errors,
      user: state => state.session.user,
      getShowIframe: state => state.session.showIframe
    }),
    presentationText () {
      return this.getPresentMode ? 'Private' : 'Presentation'
    },
    today () {
      let date = new Date()
      return date.toISOString().slice(0, 10)
    },
    username () {
      return this.user && this.user.username ? this.user.username : 'placeholder@email.com'
    },
    fullname () {
      const user = this.user
      return user && user.first_name && user.last_name
        ? `${user.first_name} ${user.last_name}` : `Firstname Lastname`
    }
  },
  data () {
    return {
      avatarMenu: false,
      clipped: false,
      showRequestFailed: false,
      errorText: null,
      iframeURL: '/refresh.html',
      title: 'API / Developer Documentation'
    }
  },
  mounted () {
    // Required for FontAwesome SVG icons
    dom.watch()
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f2f2f2;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.whiteM {
  fill:#fff;
  stroke: #fff;
}
.maizeM {
  fill:#f5c400;
}
.logo {
  display: block;
  width: 160px;
}
.small, small {
  font-size: 80%;
  font-weight: 400;
}
.presentation {
  font-size: 120% !important;
}
.date {
  position: absolute;
  bottom: 6px;
  right: 16px;
}
.link {
  display: block;
}
</style>
