import { Md5, Encrypt } from './Encrypt';
import { AseEncrypt } from './AES';
window.mo7Encrypt = Encrypt;
window.mo7Md5 = Md5;
window.mo7AseEncrypt = AseEncrypt;

const SecretKey = window.mo7Md5('AItrade.net from mo7cc');
window.mo7SecretKey = SecretKey;
