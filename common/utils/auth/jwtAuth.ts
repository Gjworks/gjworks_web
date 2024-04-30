import {SignJWT , jwtVerify, decodeJwt} from 'jose';
const secret = new TextEncoder().encode(process.env.JWT_SECRET!);

// access Token 발급
const sign = async (payload: object) => {
  const accessToken_expiresIn = process.env.ACCESSTOKEN_EXPIRES_IN;
  console.log(accessToken_expiresIn)
  if(!accessToken_expiresIn) throw new Error('ACCESSTOKEN_EXPIRES_IN is not defined');
  return await new SignJWT({ ...payload }).setProtectedHeader({ alg: 'HS256', typ: 'JWT' }).setExpirationTime(accessToken_expiresIn).sign(secret)
};

// access Token 검증
const verify = async (token: string) => {
    try {
      const payload = await jwtVerify(token, Buffer.from(secret));
      return payload;
    } catch (err) {
      return {
        ok: false,
        message: 'error verify',
      };
    }
};

// refresh Token 발급
const refresh = async (payload: object) => {
  const refreshToken_expiresIn = process.env.REFRESHTOKEN_EXPIRES_IN;
  if(!refreshToken_expiresIn) throw new Error('REFRESHTOKEN_EXPIRES_IN is not defined');
  return await new SignJWT({ ...payload }).setProtectedHeader({ alg: 'HS256', typ: 'JWT' }).setExpirationTime(refreshToken_expiresIn).sign(secret)
};

const refreshVerify = async (token: string): Promise<boolean> => {
  try {
    const payload =  await jwtVerify(token,  Buffer.from(secret));
    return true;
  } catch (error) {
    return false;
  }
};

export { sign, verify, refresh, refreshVerify };
// import jwt from 'jsonwebtoken';
// const secret = process.env.JWT_SECRET!;

// const decode = (accessToken: string | undefined) =>{
//   return jwt.decode(accessToken);
// }
// // access Token 발급
// const sign = (args:object) => {
//   return jwt.sign(args, secret, {
//     algorithm: 'HS256', // 암호화 알고리즘
//     expiresIn: '1h', // 유효기간
//   });
// };

// // access Token 검증
// const verify = (token: string) => {
//   let decoded: any = null;
//   try {
//     decoded = jwt.verify(token, secret);
//     return {
//       ok: true,
//       id: decoded.id,
//       isAdmin: decoded.isAdmin
//     };
//   } catch (error: any) {
//     return {
//       ok: false,
//       message: error.message,
//     };
//   }
// };

// // refresh Token 발급
// const refresh = (args:object) => {
//   return jwt.sign(args, secret, {
//     algorithm: 'HS256',
//     expiresIn: '1d', // 유효기간
//   });
// };

// const refreshVerify = (token: string) => {
//   try {
//     jwt.verify(token, secret);
//     return true;
//   } catch (error) {
//     return false;
//   }
// };

// export { sign, verify, refresh, refreshVerify, decode };