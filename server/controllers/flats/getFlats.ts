import { Request, Response, NextFunction } from 'express';
import { FlatModel } from '../../models';

export default async (req:Request, res:Response, next: NextFunction) => {
  try {
    const data = await FlatModel.findAll({ limit: 3 });
    res.json({ data });
  } catch (err) {
    next(err);
  }
};
