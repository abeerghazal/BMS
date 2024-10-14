import { Request, Response, NextFunction } from 'express';
import { AnnouncementModel } from '../../models';

export default async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { id } = req.params;
    if (!(Number(id) > 0)) {
      return res.json({ message: 'Announcement Id must be a number and greater then 0' });
    }

    const data = await AnnouncementModel.destroy({ where: { id } });
    if (!data) {
      res.json({ message: 'There is no item have this id' });
    } else {
      res.json({ message: 'Announcement Deleted Successfully' });
    }
  } catch (err) {
    next(err);
  }
};
