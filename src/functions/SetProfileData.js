import { decryption, encryption } from "../utils/getText"
// import GetEncryptText from "./GetEncryptText"

const SetProfileData = (updatedData) => {
    let isEmailExist = false;
    const loginData = JSON.parse(localStorage.getItem('loginData'))
    const authToken = decryption(localStorage.getItem('authToken'))
    const authEmail = authToken.split(',')[0]
    const authPassword = authToken.split(',')[1]
    const newAuthToken = encryption((updatedData.email + ',' + authPassword))
    let currentUserData = []


    if (updatedData.email !== authEmail) {
        isEmailExist = loginData.some((item) => {
            let currentItem = decryption(item)
            return (currentItem.email === updatedData.email)
        })
    } else {
        currentUserData = loginData.map((item) => {
            let currentItem = decryption(item)
            if ((currentItem.email === authEmail) && (currentItem.password === authPassword)) {
                currentItem = updatedData
            }
            return encryption(currentItem)
        })
        localStorage.setItem('loginData', JSON.stringify(currentUserData))
        localStorage.setItem('authToken', newAuthToken)
    }

    return isEmailExist
}

export default SetProfileData