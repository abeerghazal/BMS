import { Request, Response, NextFunction } from 'express';
import { FlatModel, UserModel } from '../../models';

export default async (req:Request, res:Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    if (!(Number(id) > 0)) {
      return res.json({ message: 'Flat Id must be a number and greater then 0' });
    }
    const {
      userId,
    } = req.body;
    await FlatModel.update({
      UserId: userId,
      is_active: true,
    }, {
      where: { id },
      returning: true,
    });
    const data = await FlatModel.findAll({
      where: { id },
      attributes: ['id', 'flat_number', 'area', 'notes', 'is_active'],
      include: [{
        model: UserModel,
        attributes: ['first_name', 'last_name', 'phone_number', 'id', 'email'],
      }],
    });
    res.json({ data, msg: 'Updated Successfully' });
  } catch (err) {
    return next(err);
  }
};
