import * as SourceService from '../../services/SourceService'

export const state = {
  sources: {}
}

export const mutations = {
  SET_SOURCE(state, source) {
    state.sources = source
  }
}

export const actions = {
  setSources({ commit }) {
    return SourceService
      .allSources()
      .then(resp => {
        commit('SET_SOURCE', resp.sources)
      })
  }
}