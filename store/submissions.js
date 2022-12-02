export const state = () => ({
  selected: {

  }
})

export const getters = {
  getSubmission (state) {
    return state.selected
  }
}

export const mutations = {
  SET_SUBMISSION (state, submission) {
    state.selected = submission
  }
}

export const actions = {
  setSubmission ({ commit }, submission) {
    commit('SET_SUBMISSION', submission)
  }
}
