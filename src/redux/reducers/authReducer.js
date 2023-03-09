import { AUTH_SET_DATA } from "../actionTypes/authTypes"

const initialData = {
    userData: [],
}



const authReducer = (state = initialData, action) => {
    switch (action.type) {
        case AUTH_SET_DATA:
            console.log(action.payLoad)
            return {
                ...state,
                userData:[...state.userData,action.payLoad]
            }
        default:
            return {
                ...state
            }

    }
}

export default authReducer