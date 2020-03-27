import * as SourceService from '../../services/SourceService'
import * as sourceIcons from '../../icons/sourceIcons'

export const state = {
  sources: {},
}

export const mutations = {
  SET_SOURCE(state, source) {
    state.sources = source
  },
}

export const actions = {
  setSources({ commit }) {
    return SourceService
      .allSources()
      .then(resp => {
        let updateSources = resp.sources.map((source, index) => {
          source.icon = sourceIcons.icons().map(icon => icon.code)[index]
          return source
        })
        commit('SET_SOURCE', updateSources)
      })
  },
}