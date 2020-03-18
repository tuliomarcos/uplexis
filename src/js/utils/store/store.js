import Vue from 'vue'
import Vuex from 'vuex'
import * as apps from './modules/apps'
import * as sources from './modules/sources'

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
    apps,
    sources,
  },
})