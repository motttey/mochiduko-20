// store/index.js

export const state = () => ({
    auth: {
        token: null
    },
    user: {
        userId: null,
        apiAccessCount: 0
    },
})
  
export const mutations = {
    incrementUserCount(state) {
        state.user.apiAccessCount += 1
    },
    resetApiAccessCount(state) {
        state.user.apiAccessCount = 0
    },
    setUser(state, user) {
        state.user.userId = user
    },
    clearUser(state) {
        state.user.userId = null
    }
}
