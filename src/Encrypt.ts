import HmacSHA256 from 'crypto-js/hmac-sha256';
import md5 from 'crypto-js/md5';
import encBase64 from 'crypto-js/enc-base64';

const Sha256 = (message: string, secretKey: string): string => {
  const strSha = encBase64.stringify(HmacSHA256(message, secretKey));
  encBase64.stringify(HmacSHA256(message, secretKey));
  return strSha;
};

const Md5 = (msg: string): string => {
  return md5(msg).toString();
};

const SecretKey = Md5('AITrade.net from mo7cc');
window.mo7SecretKey = SecretKey;

const Encrypt = (msg: string): string => {
  const stamp = new Date().getTime();
  const time = stamp / 1000 / 30;
  const timeStamp = parseInt(`${time}`);
  const EncStr = `${msg}mo7${timeStamp}`;

  return Sha256(EncStr, window.mo7SecretKey);
};

export { Md5, Encrypt };
