import * as SourceService from '../../services/SourceService'
import * as sourceIcons from '../../icons/sourceIcons'

export const state = {
  sources: {},
  viewSource: ''
}

export const mutations = {
  SET_SOURCE(state, source) {
    state.sources = source
  },
  SET_VIEW_SOURCE(state, filter) {
    state.viewSource = filter
  },
}

export const actions = {
  setSources({ commit }) {
    return SourceService
      .allSources()
      .then(resp => {
        let updateSources = resp.sources.map((source, index) => {
          source.path = sourceIcons.icons().map(icon => icon.path)[index]
          return source
        })
        commit('SET_SOURCE', updateSources)
      })
  },
  filterSource({ commit }, filter) {
    console.log(filter)
    commit('SET_VIEW_SOURCE', filter)
  },
}