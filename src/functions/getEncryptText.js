import CryptoJS from "crypto-js";
const secretPass = "XkhZG4fW2t2W";

const getEncryptText = (text) => {
    const data = CryptoJS.AES.encrypt(
        JSON.stringify(text),
        secretPass
    ).toString();
    return data
};

export default getEncryptText