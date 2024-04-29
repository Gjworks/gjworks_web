import CryptoJS from "crypto-js";

const secretKey = process.env.SECRET_KEY;
export async function hashedPassword(password: string): Promise<string> {
  let cipherText
  if(secretKey){
     cipherText = CryptoJS.AES.encrypt(password, secretKey).toString();
  }
  return cipherText.toString();

}

export async function verifyPassword(cipherText: string, hashedPassword: string): Promise<boolean> {
  let isValid = false;
  if(secretKey) {
    const decryptedPassword = CryptoJS.AES.decrypt(hashedPassword, secretKey).toString(CryptoJS.enc.Utf8);
    isValid = decryptedPassword === cipherText;
  }

  return isValid;
}

// function encrypt(plaintext, secret) {
//   const key = CryptoJS.enc.Utf8.parse(secret);
//   let iv = CryptoJS.lib.WordArray.create(key.words.slice(0, 4));
//   console.log("IV : " + CryptoJS.enc.Base64.stringify(iv));


//   const cipherText = CryptoJS.AES.encrypt(plaintext, key, {
//     iv: iv,
//     mode: CryptoJS.mode.CBC,
//     padding: CryptoJS.pad.Pkcs7
//     });
//   return cipherText.toString();
// }

// function decrypt(cipherText, secret, iv) {
//   // IV is a base64 string
//   let iv1 = CryptoJS.enc.Base64.parse(iv);
  
//   const key = CryptoJS.enc.Utf8.parse(secret);
//   const cipherBytes = CryptoJS.enc.Base64.parse(cipherText);

//   const decrypted = CryptoJS.AES.decrypt({cipherText: cipherBytes}, key, {
//       iv: iv1,
//       mode: CryptoJS.mode.CBC,
//       padding: CryptoJS.pad.Pkcs7
//   });

//   return decrypted.toString(CryptoJS.enc.Utf8);
// }