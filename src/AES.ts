import CryptoJS from 'crypto-js';

const AESEncrypt = (data: string) => {
  const key = CryptoJS.enc.Utf8.parse(window.mo7SecretKey);
  return CryptoJS.AES.encrypt(data, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  }).toString();
};

const AESDeCode = (code: string) => {
  var key = CryptoJS.enc.Utf8.parse(window.mo7SecretKey);
  var bytes = CryptoJS.AES.decrypt(code, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  return bytes.toString(CryptoJS.enc.Utf8);
};

export { AESEncrypt, AESDeCode };
