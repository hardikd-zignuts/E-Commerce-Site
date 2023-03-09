import CheckUserAuth from "../../functions/CheckUserAuth";
import getEncryptText from "../../functions/GetEncryptText";
import SetLocalData from "../../functions/SetLocalData";
import { AUTH_SET_DATA } from "../actionTypes/authTypes"
const initialData = {
    userData: [],
    isAlready: false
}

const authReducer = (state = initialData, action) => {
    switch (action.type) {
        case AUTH_SET_DATA:
            let isAuth = false
            const encData = getEncryptText(action.payLoad)
            if (localStorage.getItem('loginData') === null) {
                SetLocalData(encData)
            } else {
                if (CheckUserAuth(action.payLoad)) {
                    isAuth = true
                }
            }
            return {
                ...state,
                userData: [...state.userData, action.payLoad],
                isAlready: isAuth
            }
        default:
            return {
                ...state
            }

    }
}

export default authReducer