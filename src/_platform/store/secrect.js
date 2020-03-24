import CryptoJS from 'crypto-js';

export const encrypt = (ID, token) => {
    let key = CryptoJS.enc.Utf8.parse(token);
    let srcs = CryptoJS.enc.Utf8.parse(ID);
    let encrypted = CryptoJS.AES.encrypt(srcs, key, {
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
        iv: CryptoJS.enc.Utf8.parse('')
    });
    let stringData = encrypted.toString();
    return stringData;
};