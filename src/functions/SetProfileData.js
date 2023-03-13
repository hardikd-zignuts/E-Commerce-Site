import { toast } from "react-hot-toast"
import GetDecryptText from "./GetDecryptText"
import GetEncryptText from "./GetEncryptText"

const SetProfileData = (updatedData) => {
    let isEmailExist = false;
    const loginData = JSON.parse(localStorage.getItem('loginData'))
    const authToken = GetDecryptText(localStorage.getItem('authToken'))
    const authEmail = authToken.split(',')[0]
    const authPassword = authToken.split(',')[1]
    const newAuthToken = GetEncryptText((updatedData.email + ',' + authPassword))
    let currentUserData = []


    if (updatedData.email !== authEmail) {
        isEmailExist = loginData.some((item) => {
            let currentItem = GetDecryptText(item)
            return (currentItem.email === updatedData.email)
        })
    } else {
        currentUserData = loginData.map((item) => {
            let currentItem = GetDecryptText(item)
            if ((currentItem.email === authEmail) && (currentItem.password === authPassword)) {
                currentItem = updatedData
            }
            return GetEncryptText(currentItem)
        })
        localStorage.setItem('loginData', JSON.stringify(currentUserData))
        localStorage.setItem('authToken', newAuthToken)
    }

    return isEmailExist
}

export default SetProfileData