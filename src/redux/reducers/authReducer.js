import getEncryptText from "../../functions/getEncryptText";
import { AUTH_SET_DATA } from "../actionTypes/authTypes"
const initialData = {
    userData: [],
}



const authReducer = (state = initialData, action) => {
    switch (action.type) {
        case AUTH_SET_DATA:
            const encData = getEncryptText(action.payLoad)
            console.log(encData)
            localStorage.setItem("loginData", encData);
            return {
                ...state,
                userData: [...state.userData, action.payLoad]
            }
        default:
            return {
                ...state
            }

    }
}

export default authReducer