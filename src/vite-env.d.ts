/// <reference types="vite/client" />
export {};

declare global {
  interface Window {
    mo7Encrypt: (msg: string) => string;
    mo7Md5: (msg: string) => string;
    mo7SecretKey: string;
    mo7AESEncrypt: (data: string, Key: string) => string;
    mo7AESDeCode: (data: string, Key: string) => string;
  }
}
