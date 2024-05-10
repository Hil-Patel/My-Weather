import * as CryptoJS from "crypto-js";

export default function EncryptFunc(values) {
  const tmp= CryptoJS.AES.encrypt(values,"secret!3#%@").toString()
  const ans=CryptoJS.AES.decrypt(tmp,"secret!3#%@").toString(CryptoJS.enc.Utf8)
  console.log(ans);
}
