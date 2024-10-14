/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-len */
import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../../helpers';
import { AdvertisementModel } from '../../models';
import advsSchema from '../../validation/advsSchems';

export default async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { id } = req.params;
    const {
      title, startDate, endDate, image, description,
    } = await advsSchema.validate({
      title: req.body.title,
      startDate: req.body.start_date,
      endDate: req.body.end_date,
      image: req.body.image,
      description: req.body.description,
    }, { abortEarly: false });

    const data = await AdvertisementModel.update({
      title, start_date: startDate, end_date: endDate, image, description,
    }, { where: { id }, returning: true });
    res.json({ data: data[1] });
  } catch (err) {
    if (err.name === 'ValidationError') {
      return next(new CustomError(400, err.errors));
    }
    return next(err);
  }
};
