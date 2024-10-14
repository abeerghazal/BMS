import { Request, Response, NextFunction } from 'express';
import { hash } from 'bcrypt';
import { signUpSchema } from '../../validation';
import { FlatModel, UserModel } from '../../models';
import { CustomError } from '../../helpers';

const signup = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { flatNumber } = req.body;
    const {
      firstName, lastName, phoneNumber, email, password,
    } = await signUpSchema.validate(
      req.body,
      { abortEarly: false },
    );
    const hashedPassword = await hash(password, 10);
    const [user, created] = await UserModel.findOrCreate({
      where: { phone_number: phoneNumber },
      defaults: {
        first_name: firstName,
        last_name: lastName,
        email,
        phone_number: phoneNumber,
        hashed_password: hashedPassword,
        role: 'user',
      },
    });
    const { id } = user;
    await FlatModel.update({ is_active: true, UserId: id }, {

      where: {
        flat_number: flatNumber,
      },
    });
    if (!created) {
      throw new CustomError(
        400,
        'Phone Number Already Exist',
      );
    }
    res.status(201).json({ message: 'User Created Successfully', status: 201 });
  } catch (err) {
    if (err.name === 'ValidationError') {
      return next(new CustomError(400, err.errors));
    }
    next(err);
  }
};

export default signup;
