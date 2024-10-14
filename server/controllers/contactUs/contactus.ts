import {
  Request, Response, NextFunction, RequestHandler,
} from 'express';
import { ContactUsModel } from '../../models';

import { contactSchema } from '../../validation';

import { CustomError } from '../../helpers';

const addContact: RequestHandler = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const {
      name, email, phone, subject, description,
    } = await contactSchema.validate(
      req.body,
      { abortEarly: false },
    );
    const data = await ContactUsModel.create({
      name, email, phone, subject, description,
    });

    return res.status(201).json({ message: 'Add Contact Successfully', data });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return next(new CustomError(400, error.errors));
    }
    return next(error);
  }
};

export default addContact;
