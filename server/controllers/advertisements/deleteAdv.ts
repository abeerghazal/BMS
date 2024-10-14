import { Request, Response, NextFunction } from 'express';
import { AdvertisementModel } from '../../models';

export default async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { id } = req.params;
    if (!(Number(id) > 0)) {
      return res.json({ message: 'Advertisement Id must be a number and greater then 0' });
    }

    const data = await AdvertisementModel.destroy({ where: { id } });
    if (!data) {
      res.json({ message: 'There is no item have this id' });
    } else {
      res.json({ message: 'Advertisement Deleted Successfully' });
    }
  } catch (err) {
    next(err);
  }
};
