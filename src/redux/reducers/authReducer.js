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
            let tempData = [...state.userData]
            const encData = getEncryptText(action.payLoad)
            if (localStorage.getItem('loginData') === null) {
                SetLocalData(encData)
                tempData.push(action.payLoad)
                console.log('first entry')
            } else if (CheckUserAuth(action.payLoad)) {
                isAuth = true
                console.log('is already')
            } else {
                SetLocalData(encData)
                tempData.push(action.payLoad)
                console.log('setup new data')
            }

            return {
                ...state,
                userData: tempData,
                isAlready: isAuth
            }
        default:
            return {
                ...state
            }

    }
}

export default authReducer