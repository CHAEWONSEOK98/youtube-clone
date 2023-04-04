import jwt from 'jsonwebtoken';
import { createError } from './error.js';

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return next(createError(401, 'You are not authenticated'));

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, 'Token is not valid'));
    req.user = user; // 모든 것이 정상일 경우 요청과 사용자가 같다.
    next();
  });
};
