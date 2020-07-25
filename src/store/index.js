import { createStore } from 'redux'

const INITIAL_STATE = {
    data: 'c4v4r0n'
}

function username(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SEARCH_USER':
            return { data: action.name }
        default:
            return state
    }
}

const store = createStore(username)

export default store