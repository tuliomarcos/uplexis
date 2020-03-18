import Vue from 'vue'
import Vuex from 'vuex'
import * as apps from './modules/apps'
// import * as source from './modules/sources'

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
    apps,
  },
})