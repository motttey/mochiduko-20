// store/index.js

export const state = () => ({
    auth: {
      token: null
    },
    user: {
      apiAccessCount: 0
    }
})
  
export const mutations = {
    incrementUserCount(state) {
        state.user.apiAccessCount += 1
    },
    resetApiAccessCount(state) {
        state.user.apiAccessCount = 0
    }
}
