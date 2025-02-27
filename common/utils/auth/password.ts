import CryptoJS from "crypto-js";

const secretKey = process.env.SECRET_KEY;
if (!secretKey) {
  throw new Error("SECRET_KEY is not defined");
}

// AES 키 생성 (32바이트로 패딩)
const key = CryptoJS.enc.Utf8.parse(secretKey.padEnd(32, " "));

/**
 * 비밀번호 암호화
 */
export async function hashedPassword(password: string): Promise<string> {
  try {
    // AES 암호화 수행
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

/**
 * 비밀번호 검증 (복호화 후 비교)
 */
export async function verifyPassword(
  plainPassword: string, // 사용자가 입력한 원본 비밀번호
  hashedPassword: string, // 저장된 암호화된 비밀번호
): Promise<boolean> {
  try {
    console.log("🔐 Received hashedPassword:", hashedPassword);

    // AES 복호화 수행
    const decryptedPassword = CryptoJS.AES.decrypt(hashedPassword, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    }).toString(CryptoJS.enc.Utf8);

    console.log("🔓 Decrypted Password:", decryptedPassword);

    if (!decryptedPassword) {
      console.error("Decryption Error: Empty result");
      return false;
    }

    return decryptedPassword === plainPassword;
  } catch (error) {
    console.error("Decryption Error:", error);
    return false;
  }
}
