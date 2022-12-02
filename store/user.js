export const state = () => ({
  auth: {
    user: {},
    loggedIn: false
  }
})

export const getters = {
  getUser (state) {
    return state.auth.user
  }
}

export const mutations = {
  SET_USER (state, user) {
    state.auth.user = user
  }
}

export const actions = {
  logout ({ commit }) {
    commit('SET_USER', null)
  }
}
