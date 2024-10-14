import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../../helpers';
import { ServiceModel } from '../../models';
import { servicesSchema } from '../../validation';

export default async (req:Request, res:Response, next: NextFunction) => {
  try {
    const {
      name, price, isFixed, description, isOpen,
    } = await servicesSchema.validate(req.body, { abortEarly: false });
    const data = await ServiceModel.create({
      name, price, isFixed, description, isOpen,
    });
    res.status(201).json({ data });
  } catch (err) {
    if (err.name === 'ValidationError') {
      return next(new CustomError(400, err.errors));
    }
    return next(err);
  }
};
