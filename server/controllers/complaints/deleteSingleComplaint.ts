import { Request, Response, NextFunction } from 'express';
import { ComplaintsModel } from '../../models';

export default async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { id } = req.params;
    if (!(Number(id) > 0)) {
      return res.status(400).json({ message: 'Complaint Id must be a number and greater then 0' });
    }

    const data = await ComplaintsModel.destroy({ where: { id } });
    if (!data) {
      res.status(400).json({ message: 'Complaint unavailable' });
    } else {
      res.json({ message: 'Delete Complaint Successfully' });
    }
  } catch (err) {
    next(err);
  }
};
