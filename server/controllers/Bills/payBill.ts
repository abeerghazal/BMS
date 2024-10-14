import { Request, Response, NextFunction } from 'express';
import { BillModel } from '../../models';

export default async (req:Request, res:Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    if (!(Number(id) > 0)) {
      return res.json({ message: 'Flat Id must be a number and greater then 0' });
    }
    const bill = await BillModel.findOne({
      where: {
        id,
      },
    });

    if (bill === null) throw new Error('Invalid Bill Number!');

    await BillModel.update({
      is_open: !bill.is_open,
    }, {
      where: { id },
      returning: true,
    });
    res.json({ msg: 'Updated Successfully' });
  } catch (err) {
    return next(err);
  }
};
