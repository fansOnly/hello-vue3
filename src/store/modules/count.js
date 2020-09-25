const state = {
    count: 0
}

const getters = {
    getCount(state) {
        return 'count的值为' + state.count
    }
}

const mutations = {
    increment(state) {
        state.count++
    },
    decrement(state) {
        state.count--
    }
}

const actions = {
    increment({commit}) {
        commit('increment')
    },
    decrement({commit}) {
        commit('decrement')
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
