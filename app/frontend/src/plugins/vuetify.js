import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/pro-solid-svg-icons'
import { far } from '@fortawesome/pro-regular-svg-icons'
import Vuetify, {
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VCard,
  VBtn,
  VIcon,
  VToolbar,
  VSubheader,
  VDivider,
  VDataTable,
  VAvatar,
  VTextarea,
  VChip,
  VProgressLinear,
  VCheckbox,
  VTextField,
  VDialog,
  VDatePicker,
  VMenu,
  VSelect,
  VForm,
  VExpansionPanel,
  VRadioGroup,
  VTooltip,
  VAlert,
  VProgressCircular,
  VAutocomplete,
  VSwitch
} from 'vuetify/lib'
import { Ripple } from 'vuetify/lib/directives'
import 'vuetify/src/stylus/app.styl'

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)
library.add(fas, far)

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VCard,
    VBtn,
    VIcon,
    VToolbar,
    VSubheader,
    VDivider,
    VDataTable,
    VAvatar,
    VTextarea,
    VChip,
    VProgressLinear,
    VCheckbox,
    VTextField,
    VDialog,
    VDatePicker,
    VMenu,
    VSelect,
    VForm,
    VExpansionPanel,
    VRadioGroup,
    VTooltip,
    VAlert,
    VProgressCircular,
    VAutocomplete,
    VSwitch
  },
  directives: {
    Ripple
  },
  theme: {
    // Michigan colors http://med.umich.edu/branding/color.html
    primary: '#00274C',
    secondary: '#FFC400',
    pop: '#575294',
    accent: '#989c97',
    error: '#9A3324',
    arbblue: '#0174BB',
    canhamblue: '#587abc',
    lsaorange: '#cc6600',
    hillbrown: '#7a121c',
    rackhamgreen: '#83b2a8'
  },
  iconfont: 'faSvg'
})
