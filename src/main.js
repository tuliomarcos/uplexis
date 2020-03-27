import Vue from 'vue'
import App from './App.vue'
import router from './js/utils/router'
import store from './js/utils/store/store'
import './sass/app.scss';
import fontawesome from '@fortawesome/fontawesome';
import carousel from 'vue-owl-carousel'
import VueCarousel from 'vue-carousel'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faCoins, faMoneyBillAlt, faShareAlt, 
  faCheckSquare, faCar, faNetworkWired,
  faSearch, faFile, faAddressCard, faUserSecret,
  faMapMarkerAlt, faBullseye, faGlobe, faBriefcase,
  faUniversity, faTree, faGavel, faBan, faGlobeAmericas,
  faGem, faMale, faPiggyBank,faChevronLeft
} from '@fortawesome/free-solid-svg-icons'

fontawesome.library.add(faCoins, faMoneyBillAlt, faShareAlt, faCheckSquare, 
  faCar, faNetworkWired, faSearch, faFile, faAddressCard, faUserSecret, 
  faMapMarkerAlt, faBullseye, faGlobe, faBriefcase, faUniversity, faTree,
  faGavel, faBan, faGlobeAmericas, faGem, faMale, faPiggyBank, faChevronLeft)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('carousel', carousel)

Vue.use(VueCarousel)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')