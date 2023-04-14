import CryptoJS from 'crypto-js';

const AESEncrypt = (data: string, Key: string) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), Key).toString();
};

const AESDeCode = (code: string, Key: string) => {
  var bytes = CryptoJS.AES.decrypt(code, Key);
  return bytes.toString(CryptoJS.enc.Utf8);
};

export { AESEncrypt, AESDeCode };
