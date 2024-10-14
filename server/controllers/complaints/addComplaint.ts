import
{
  Request, Response, NextFunction, RequestHandler,
} from 'express';

import { ComplaintsModel } from '../../models';
import { complaintsSchema } from '../../validation';
import { CustomError } from '../../helpers';

const addComplaints: RequestHandler = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { title, description } = await complaintsSchema.validate(req.body, { abortEarly: false });
    const data = await ComplaintsModel.create({
      title, description, UserId: 1, // UserId should be from token when Authorization is done
    });
    return res.status(201).json({
      message: 'Complaints Added Successfully', data,
    });
  } catch (error) {
    console.log(error);

    if (error.name === 'ValidationError') {
      return next(new CustomError(400, error.errors));
    }
    return next(error);
  }
};

export default addComplaints;
