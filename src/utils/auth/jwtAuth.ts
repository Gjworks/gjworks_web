import jwt from 'jsonwebtoken';
const secret = process.env.JWT_SECRET!;

// access Token 발급
const sign = (args:object) => {
  return jwt.sign(args, secret, {
    algorithm: 'HS256', // 암호화 알고리즘
    expiresIn: '1h', // 유효기간
  });
};

// access Token 검증
const verify = (token: string) => {
  let decoded: any = null;
  try {
    decoded = jwt.verify(token, secret);
    return {
      ok: true,
      id: decoded.id,
      isAdmin: decoded.isAdmin
    };
  } catch (error: any) {
    return {
      ok: false,
      message: error.message,
    };
  }
};

// refresh Token 발급
const refresh = (args:object) => {
  return jwt.sign(args, secret, {
    algorithm: 'HS256',
    expiresIn: '7d', // 유효기간
  });
};

const refreshVerify = (token: string) => {
  try {
    jwt.verify(token, secret);
    return true;
  } catch (error) {
    return false;
  }
};

export { sign, verify, refresh, refreshVerify };