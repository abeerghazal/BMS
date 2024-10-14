import { NextFunction, Response } from 'express';
import { WhereOptions } from 'sequelize';
import { InferRequestPayload } from '../../interfaces/InferUserPayload';
import { BillModel, FlatModel, UserModel } from '../../models';

export default async (req:InferRequestPayload, res:Response, next:NextFunction) => {
  try {
    const { id } = req.user;
    console.log(`User Id: ${id}`);

    const { flat_number, is_open } = req.query;
    const billOpenOrClosed :WhereOptions<any> = {};
    if (is_open) {
      billOpenOrClosed.is_open = is_open;
    }
    const flastExistsOrNOt :WhereOptions<any> = {};
    if (flat_number) {
      flastExistsOrNOt.flat_number = flat_number;
    }
    let data = await UserModel.findAll({
      raw: true,
      order: [
        ['Flats', 'Bills', 'id', 'DESC'],
      ],
      include: [{
        model: FlatModel,
        attributes: ['flat_number'],
        where: flastExistsOrNOt,
        include: [{
          model: BillModel,
          attributes: ['is_open', 'total_price', 'services', 'createdAt'],
          required: false,
        }],
      }],
      where: { id },
      attributes: [],

    });
    if (data[0]['Flats.Bills.id'] === null) {
      data = [];
    }
    if (is_open) {
      data = data.filter((x) => x['Flats.Bills.is_open'].toString() === is_open);
    }
    console.log('data: ', data);
    if (data) {
      res.json({ data });
    } else {
      res.json({ message: 'There is no bill that have this flat id' });
    }
  } catch (err) {
    console.log(err);

    next(err);
  }
};
