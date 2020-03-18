import * as AppService from '../../services/AppService'

// export const namespaced = true

export const state = {
	apps: {},
}

export const mutations = {
	SET_APP(state, app) {
		state.apps = app
	},
}

export const actions = {
	setApps({ commit }) {
		return AppService
			.allApps()
			.then(resp => {
				commit('SET_APP', resp.apps)
			})
	},
}

export const getters = {
	isAppEmpty: app => app.length === 0,
}