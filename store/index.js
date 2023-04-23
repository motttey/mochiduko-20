// store/index.js

export const state = () => ({
    auth: {
        token: null
    },
    user: {
        userId: null
    },
    accessCountMap: {
        // userId: accessCount
    },
})

export const mutations = {
    incrementUserCount(state, user) {
        state.accessCountMap[user] += 1
    },
    resetApiAccessCount(state, user) {
        state.accessCountMap[user] = 0
    },
    resetAllApiAccessCount(state) {
        Object.keys(state.accessCountMap).forEach((key) => {
            state.accessCountMap[key] = 0
        })
    },
    setUser(state, user) {
        state.user.userId = user
    },
    clearUser(state) {
        state.user.userId = null
    }
}
