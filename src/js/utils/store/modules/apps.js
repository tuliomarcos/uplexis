import * as AppService from '../../services/AppService'
import * as appIcons from '../../icons/appIcons'

// export const namespaced = true

export const state = {
	apps: {},
	infoPage: {},
}

export const mutations = {
	SET_APP(state, app) {
		state.apps = app
	},
	SET_INFO_PAGE(state, data) {
		state.infoPage = data
	},
}

export const actions = {
	setApps({ commit }) {
		return AppService
			.allApps()
			.then(resp => {
				let updateApp = resp.apps.map((app, index) => {
          app.icon = appIcons.icons().map(icon => icon.code)[index]
          return app
        })
				commit('SET_APP', updateApp)
			})
	},
	callCardKnowMore({ dispatch }, data) {
		dispatch('cardKnowMore', data)
	},
	cardKnowMore({ commit }, data) {
		commit('SET_INFO_PAGE', data)
	}
}

export const getters = {
	isAppEmpty: app => app.length === 0,
}