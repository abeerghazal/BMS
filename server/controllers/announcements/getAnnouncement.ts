import { Request, Response, NextFunction } from 'express';

import { AnnouncementModel } from '../../models';

export default async (req:Request, res:Response, next:NextFunction) => {
  try {
    const data = await AnnouncementModel.findAll({ order: [['id', 'DESC']] });
    res.json({ data });
  } catch (err) {
    next(err);
  }
};
