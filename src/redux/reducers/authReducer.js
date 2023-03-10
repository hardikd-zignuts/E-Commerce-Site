import CheckUserAuth from "../../functions/CheckUserAuth";
import { AUTH_SET_DATA, AUTH_SET_STATUS } from "../actionTypes/authTypes"
const initialData = {
    userData: [],
    isLogin: false
}

const authReducer = (state = initialData, action) => {
    switch (action.type) {
        case AUTH_SET_DATA:
            let isLogin = false
            let tempData = [...state.userData]
            if (localStorage.getItem('loginData') === null) {
                tempData.push(action.payLoad)
                isLogin = true
            }
            else if (CheckUserAuth(action.payLoad)) {
                tempData.push(action.payLoad)
                isLogin = true
            }
            return {
                ...state,
                userData: tempData,
                isLogin: isLogin
            }


        case AUTH_SET_STATUS: {
            return {
                ...state,
                isLogin: !state.isLogin
            }
        }
        default:
            return {
                ...state
            }

    }
}

export default authReducer