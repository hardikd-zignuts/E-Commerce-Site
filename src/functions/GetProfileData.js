// import GetDecryptText from "./GetDecryptText"

import { decryption } from "../utils/getText"

const GetProfileData = () => {
    const loginData = JSON.parse(localStorage.getItem('loginData'))
    const authToken = decryption(localStorage.getItem('authToken'))
    const authEmail = authToken.split(',')[0]
    const authPassword = authToken.split(',')[1]

    const currentUserData = loginData.filter((item) => (decryption(item).email === authEmail) && (decryption(item).password === authPassword))
    return decryption(currentUserData[0].toString())
}

export default GetProfileData