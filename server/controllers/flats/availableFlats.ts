import { Request, Response, NextFunction } from 'express';
import { FlatModel } from '../../models';

export default async (req:Request, res:Response, next: NextFunction) => {
  try {
    const data = await FlatModel.findAll({ where: { is_active: false }, attributes: ['flat_number', 'id'] });
    res.json({ data });
  } catch (err) {
    next(err);
  }
};
