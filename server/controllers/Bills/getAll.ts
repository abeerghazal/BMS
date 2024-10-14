import { Request, Response, NextFunction } from 'express';

import { BillModel, FlatModel, UserModel } from '../../models';

export default async (req:Request, res:Response, next:NextFunction) => {
  try {
    const payload:ReqPayload | undefined | any = req.query;
    let { current, pageSize } = { current: 0, pageSize: 0 };
    if (payload.pagination) {
      current = payload.pagination.current;
      pageSize = payload.pagination.pageSize;
    }
    console.log('Testing');
    let filterStatus;
    if (payload.filters?.is_open) {
      filterStatus = payload.filters.is_open.map((x) => (x === 'true'));
    }
    const {
      order, field,
    } = payload;

    const data : BillsViewModel = await BillModel.findAll({
      raw: true,
      attributes: ['id', 'total_price', 'is_open', 'services'],
      include: [
        {
          model: FlatModel,
          attributes: ['id', 'flat_number'],
          include: [{
            model: UserModel,
            attributes: [
              'id',
              'first_name',
              'last_name',
            ],
          }],
        },
      ],
    });

    const total = data.length;
    let result:IBill[] = data.map((x) => {
      const electricity = x.services.filter((y) => y.name.trim() === 'كهرباء')[0].price;
      const naturalWater = x.services.filter((y) => y.name.trim() === 'مياه صحية')[0].price;
      const drinkingWater = x.services.filter((y) => y.name.trim() === 'مياه حلوة')[0].price;
      const generalServices = x.services.filter((y) => y.name.trim() === 'خدمات عامة')[0].price;

      return {
        id: x.id,
        flat_number: x['Flat.flat_number'],
        user_name: `${x['Flat.User.first_name']} ${x['Flat.User.last_name']}`,
        electricity,
        naturalWater,
        drinkingWater,
        generalServices,
        total_price: x.total_price,
        is_open: x.is_open,
      };
    });
    // Filtering
    if (filterStatus) {
      result = result.filter((x) => filterStatus.includes(x.is_open));
    }

    if (order === 'descend') {
      result = result.sort((a, b) => b[field] - a[field]);
    } else {
      result = result.sort((a, b) => a[field] - b[field]);
    }

    if (payload.pagination) {
      const start = ((current - 1) * pageSize);
      const end = start + pageSize;
      result = result.slice(start, end);
    }

    res.json({ result, total });
  } catch (err) {
    next(err);
  }
};

type BillsViewModel = BillsData | null | undefined | any;
export interface IBill {
  id: number,
  flat_number: number;
  user_name: string;
  electricity: number;
  naturalWater: number;
  drinkingWater: number;
  generalServices: number;
  total_price: number;
  is_open: boolean;
}

interface BillsData {
  id:number,
  total_price:number,
  is_open:boolean,
  services: BillServices[],
  Flat: BillsFlat[],
}
interface BillServices {
  id:number,
}
interface BillsFlat {
  id: number;
  flat_number: number;
  user: BillsUser;
}
interface BillsUser {
  id:number,
  first_name:string,
  last_name:string
}

type ReqPayload = {
  results: number;
  page:number;
  pagination: ReqPagination;
  filters: ReqFilters;
  order: string;
  field:string;
};
interface ReqPagination {
  current: number;
  pageSize: number;
  total: number;
}
interface ReqFilters {
  is_open: string[];
}
