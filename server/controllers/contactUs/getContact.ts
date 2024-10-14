import { Response, Request, NextFunction } from 'express';

import { ContactUsModel } from '../../models';

export default async (req:Request, res:Response, next:NextFunction) => {
  try {
    const data = await ContactUsModel.findAll();
    res.json({ data });
  } catch (err) {
    next(err);
  }
};
