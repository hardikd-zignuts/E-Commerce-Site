import { AUTH_SET_DATA } from "../actionTypes/authTypes";

export const authSetData = (userData) => {
    return {
        type: AUTH_SET_DATA,
        payLoad: userData
    }
}