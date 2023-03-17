import * as CryptoJS from "crypto-js";
const encryptionKey = 'AsdfRtvhfjkl67ghshjh'
//Function for ecript id
export const encryption = (text) => {
    if (text) {
        const ciphertext = CryptoJS.AES.encrypt(
            text.toString(),
            encryptionKey
        ).toString();
        return encodeURIComponent(ciphertext);
    } else {
        return "";
    }
};

// Function for decript id
export const decryption = (ciphertext) => {
    if (ciphertext) {
        const decodedStr = decodeURIComponent(ciphertext);
        const bytes = CryptoJS.AES.decrypt(decodedStr, encryptionKey);
        const originalText = bytes.toString(CryptoJS.enc.Utf8);
        return JSON.parse(originalText);
    } else {
        return "";
    }
};
