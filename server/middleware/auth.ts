import { Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import { CustomError, signToken, verifyToken } from '../helpers';
import { InferUserPayload, InferRequestPayload } from '../interfaces/InferUserPayload';

dotenv.config();

const GenerateToken = async (payload: InferUserPayload, res: Response, next: NextFunction) => {
  try {
    const token = await signToken(payload);
    res.cookie('token', token).cookie('fullName', `${payload.first_name} ${payload.last_name}`).json({ message: 'Logged in Successfully', role: payload.role });
  } catch (err) {
    next(err);
  }
};

const Authenticate = async (req: InferRequestPayload, res: Response, next: NextFunction) => {
  try {
    const { token } = req.cookies;
    if (token) {
      const user: InferUserPayload = await verifyToken(token);
      if (user) {
        req.user = {
          role: user.role,
          id: user.id,
          first_name: user.first_name,
          last_name: user.last_name,
        };
      }
    }
    next();
  } catch (err) {
    next(err);
  }
};
const GetUserData = async (req: InferRequestPayload, res: Response, next: NextFunction) => {
  try {
    const { token } = req.cookies;
    if (token) {
      const user: InferUserPayload = await verifyToken(token);
      if (user) {
        const userData = {
          role: user.role,
          id: user.id,
          fullName: `${user.first_name} ${user.last_name}`,
        };
        res.json(userData);
        return;
      }
    }
    res.json(null);
  } catch (err) {
    next(err);
  }
};

type UserRole = string | null;

const Authorize = (
  req: InferRequestPayload,
  _,
  next: NextFunction,
  user_role: UserRole = null,
) => {
  try {
    if (req.user) {
      const { role } = req.user;
      if (!user_role) next();
      else {
        if (!role || role !== user_role) {
          throw new CustomError(
            401,
            'You are not Authorized',
          );
        }
        next();
      }
    } else {
      throw new CustomError(
        401,
        'You are not Authorized',
      );
    }
  } catch (err) {
    next(err);
  }
};

export {
  GenerateToken, Authenticate, Authorize, GetUserData,
};
