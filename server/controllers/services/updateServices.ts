import { Request, Response, NextFunction } from 'express';
import { ServiceModel } from '../../models';
import { CustomError } from '../../helpers';
import { servicesSchema } from '../../validation';

export default async (req:Request, res:Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    if (!(Number(id) > 0)) {
      return res.json({ message: 'Service Id must be a number and greater then 0' });
    }
    const {
      name, price, isFixed, description, isOpen,
    } = await servicesSchema.validate(req.body, { abortEarly: false });

    const data = await ServiceModel.update({
      name, price, isFixed, description, isOpen,
    }, {
      where: { id },
      returning: true,
    });
    res.json({ data: data[1] });
  } catch (err) {
    if (err.name === 'ValidationError') {
      return next(new CustomError(400, err.errors));
    }
    return next(err);
  }
};
