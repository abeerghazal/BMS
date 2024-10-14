import { Response, Request, NextFunction } from 'express';

import {
  BillModel, FlatModel, UserModel,
} from '../../models';

export default async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { userId } = req.params;
    if (!(Number(userId) > 0)) {
      return res.json({ message: 'User Id  must be a number and greater then 0' });
    }
    const data = await UserModel.findAll(
      {
        raw: true,
        include: [{
          model: FlatModel,
          attributes: ['flat_number'],
          include: [{
            model: BillModel,
            attributes: ['is_open', 'total_price', 'services'],
            required: false,
          }],
        }],
        where: { id: userId },
        attributes: ['id'],

      },
    );

    res.json({ data });
  } catch (err) {
    next(err);
  }
};
