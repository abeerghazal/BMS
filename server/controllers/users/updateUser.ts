import { Response, NextFunction } from 'express';
import { updateUserSchema } from '../../validation';
import { UserModel } from '../../models';
import { CustomError } from '../../helpers';
import { InferRequestPayload } from '../../interfaces/InferUserPayload';

const updateUser = async (req:InferRequestPayload, res:Response, next:NextFunction) => {
  try {
    const { id } = req.user;
    if (!(Number(id) > 0)) {
      return res.json({ message: 'User Id must be a number and greater then 0' });
    }
    const {
      firstName, lastName, email,
    } = await updateUserSchema.validate(
      req.body,
      { abortEarly: false },
    );
    const data = await UserModel.update({

      first_name: firstName,
      last_name: lastName,
      email,
    }, {
      where: { id },
      returning: true,
    });
    console.log('data: ', data);
    res.cookie('fullName', `${firstName} ${lastName}`).json({ message: 'User Updated Successfully' });
  } catch (err) {
    if (err.name === 'ValidationError') {
      return next(new CustomError(400, err.errors));
    }
    next(err);
  }
};

export default updateUser;
