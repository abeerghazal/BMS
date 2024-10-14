import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../../helpers';
import { AdvertisementModel } from '../../models';
import advsSchema from '../../validation/advsSchems';

export default async (req:Request, res:Response, next:NextFunction) => {
  try {
    const {
      title, startDate, endDate, image, description,
    } = await advsSchema.validate(req.body, { abortEarly: false });

    const data = await AdvertisementModel.create({
      title, start_date: startDate, end_date: endDate, image, description,
    });

    res.json({ data });
  } catch (err) {
    if (err.name === 'ValidationError') {
      return next(new CustomError(400, err.errors));
    }
    return next(err);
  }
};
