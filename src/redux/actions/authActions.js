import { AUTH_SET_DATA, AUTH_SET_STATUS } from "../actionTypes/authTypes";

export const authSetData = (userData) => {
    return {
        type: AUTH_SET_DATA,
        payLoad: userData
    }
}
export const authSetStatus = () => {
    return {
        type: AUTH_SET_STATUS
    }
}