import { Request, Response, NextFunction } from 'express';
import { FlatModel, UserModel } from '../../models';

export default async (req:Request, res:Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const data = await FlatModel.findAll({
      where: { id },
      attributes: ['id', 'flat_number', 'area', 'notes', 'is_active'],
      include: [{
        model: UserModel,
        attributes: ['first_name', 'last_name', 'phone_number', 'id', 'email'],
      }],
    });

    res.json({ data });
  } catch (err) {
    next(err);
  }
};
