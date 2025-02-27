import CryptoJS from "crypto-js";

const secretKey = process.env.SECRET_KEY;
export async function hashedPassword(password: string): Promise<string> {
  let cipherText;
  if (secretKey) {
    // cipherText = CryptoJS.AES.encrypt(password, secretKey).toString();
    try {
      // const cipherText = CryptoJS.AES.encrypt(password, secretKey).toString();

      // secretKey를 UTF-8 인코딩으로 변환
      const key = CryptoJS.enc.Utf8.parse(secretKey);

      // AES 암호화 실행
      const cipherText = CryptoJS.AES.encrypt(password, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
      }).toString();

      return cipherText;
    } catch (error) {
      console.error("Encryption Error:", error);
      throw new Error("Encryption failed");
    }
  }
  console.log(cipherText);
  return cipherText.toString();
}

export async function verifyPassword(
  plainPassword: string, // 원래 비밀번호 (사용자가 입력한 값)
  hashedPassword: string, // 저장된 암호화된 비밀번호
): Promise<boolean> {
  if (!secretKey) {
    throw new Error("SECRET_KEY is not defined");
  }

  try {
    // secretKey를 UTF-8로 변환
    const key = CryptoJS.enc.Utf8.parse(secretKey);

    // AES 복호화 수행
    const decryptedPassword = CryptoJS.AES.decrypt(hashedPassword, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    }).toString(CryptoJS.enc.Utf8);

    // 복호화된 값과 사용자가 입력한 비밀번호 비교
    return decryptedPassword === plainPassword;
  } catch (error) {
    console.error("Decryption Error:", error);
    return false;
  }
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
