import {
  Request, Response, NextFunction,
} from 'express';
import { CustomError } from '../../helpers';
import { FlatModel, UserModel } from '../../models';

export default async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { order, page } = req.query;
    const sortingOrder = (order === 'descend') ? 'DESC' : 'ASC';

    const limitNum = 5;
    const total = await FlatModel.count({ include: [{ model: UserModel }] });
    if (!(Number(page) > 0)) {
      throw new CustomError(400, 'Query Parameter Page is required and must be a number greater than 0');
    }
    const offsetNum = (+(page) - 1) * limitNum;
    const queryResult : IQueryResult[] = await FlatModel.findAll({

      order: [
        ['id', `${sortingOrder}`],
      ],
      raw: true,
      attributes: ['id', 'flat_number'],
      include: [{
        model: UserModel,
        attributes: ['first_name', 'last_name', 'phone_number', 'id', 'email'],
      }],
      offset: offsetNum,
      limit: limitNum,
    });
    const result: FlatUsers[] = queryResult.map((x) => ({

      id: x.id,
      flat_number: x.flat_number,
      full_name: `${x['User.first_name']} ${x['User.last_name']}`,
      phone_number: x['User.phone_number'],

    }));
    res.json({ result, total });
  } catch (err) {
    next(err);
  }
};

interface FlatUsers {
  id: number;
  full_name: string;
  flat_number: number;
  phone_number: string;
}
interface IQueryResult {
  id: number;
  flat_number: number;
}