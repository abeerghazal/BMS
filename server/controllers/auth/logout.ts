import {
  NextFunction,
  Request, Response,
} from 'express';

const logout = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.clearCookie('token').clearCookie('fullName').json({ message: 'Logged Out Successfully' });
  } catch (err) {
    next(err);
  }
};
export default logout;
