import * as AppService from '../../services/AppService'
import * as appIcons from '../../icons/appIcons'

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
				let updateApp = resp.apps.map((app, index) => {
          app.path = appIcons.icons().map(icon => icon.path)[index]
          return app
        })
				commit('SET_APP', updateApp)
			})
	},
}

export const getters = {
	isAppEmpty: app => app.length === 0,
}