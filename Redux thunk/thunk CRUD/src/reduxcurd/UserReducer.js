
import { add, deletekey, insert } from './UserAction'

const intialState = {

    data: []
}
function UserReducer(state = intialState, action) {
    switch (action.type) {
        case add: return {
            ...state,
            data: action.payload
        }
        case insert: return {
            ...state,
            data: [...state.data, action.payload]
        }
        case deletekey: return {
            ...state,
            data: state.data.filter((i) => {
                return i.id !== action.payload
            })
        }

        
       
        default: return state
    }
}

export default UserReducer
