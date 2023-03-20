import CryptoJS from "crypto-js";
const secretPass = "XkhZG4fW2t2W";

const GetDecryptText = (text) => {
    const bytes = CryptoJS.AES.decrypt(text, secretPass);
    const data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return data

};


export default GetDecryptText


// import crypto from 'crypto-js';

// const str = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZDg5MjMxMjc5OTkxYjJhNGMwMjdjMGIiLCJoc2giOiIkMmEkMTMkWk53Y0cubjdRZFIybDA3S1RHd2RoLlN0QksudW5GSFVGLkZnZ0tQTGlUV2pOVEFqVy9SMm0iLCJncmFudCI6ImFjY2VzcyIsImlhdCI6MTU2OTI2ODUwMiwiZXhwIjoxNjAwODI2MTAyfQ.PQcCoF9d25bBqr1U4IhJbylpnKTYiad3NjCh_LvMfLE~9~null~undefined~434ce0149ce42606d8746bd9`;

// const cryptoInfo = crypto.AES.encrypt(JSON.stringify({ str }), 'secret').toString();

// console.log({ cryptoInfo });
// const info2 = crypto.AES.decrypt(cryptoInfo, 'secret').toString(crypto.enc.Utf8);

// console.log({ info2 });

// const info3 = JSON.parse(info2);

// console.log({ str: info3.str });