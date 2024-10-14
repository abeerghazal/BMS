import { Request, Response, NextFunction } from 'express';
import { AnnouncementModel } from '../../models';

export default async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { id } = req.params;
    if (!(Number(id) > 0)) {
      return res.json({ message: 'Announcement Id must be a number and greater then 0' });
    }

    const data = await AnnouncementModel.findOne({ where: { id } });

    if (data) {
      res.json({ data });
    } else {
      res.json({ message: 'There is no announcement that have this id' });
    }
  } catch (err) {
    next(err);
  }
};
