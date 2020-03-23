import Vue from 'vue'
import App from './App.vue'
import router from './js/utils/router'
import store from './js/utils/store/store'
import './sass/app.scss';
import fontawesome from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faCoins, faMoneyBillAlt, faShareAlt, 
  faCheckSquare, faCar, faNetworkWired,
  faSearch, faFile, faAddressCard, faUserSecret,
  faMapMarkerAlt, faBullseye, faGlobe, faBriefcase,
  faUniversity, faTree, faGavel, faBan, faGlobeAmericas,
  faGem, faMale, faPiggyBank
} from '@fortawesome/free-solid-svg-icons'

fontawesome.library
  .add(faCoins, faMoneyBillAlt, faShareAlt, faCheckSquare, faCar, faNetworkWired,
    faSearch, faFile, faAddressCard, faUserSecret, faMapMarkerAlt, faBullseye,
    faGlobe, faBriefcase, faUniversity, faTree, faGavel, faBan, faGlobeAmericas,
    faGem, faMale, faPiggyBank)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(fontawesome)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
