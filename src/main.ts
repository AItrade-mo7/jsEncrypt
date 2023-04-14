import { Md5, Encrypt } from './Encrypt';
import { AESEncrypt, AESDeCode } from './AES';
window.mo7Encrypt = Encrypt;
window.mo7Md5 = Md5;
window.mo7AESEncrypt = AESEncrypt;
window.mo7AESDeCode = AESDeCode;

const SecretKey = window.mo7Md5('AItrade.net from mo7cc');
window.mo7SecretKey = SecretKey;
