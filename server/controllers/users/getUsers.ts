import { Request, Response, NextFunction } from 'express';
import { UserModel } from '../../models';

export default async (req:Request, res:Response, next: NextFunction) => {
  try {
    const { page } = req.params;
    const offsetNum = (+(page) - 1) * 3;
    const data = await UserModel.findAll({
      offset: offsetNum,
      limit: 3,
    });
    const result = data.map((x) => ({

      id: x.id,
      full_name: `${x.first_name} ${x.last_name}`,
      phone_number: x.phone_number,

    }));
    res.json({ data: result });
  } catch (err) {
    next(err);
  }
};
