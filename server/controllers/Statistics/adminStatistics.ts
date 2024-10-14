import { Request, Response, NextFunction } from 'express';
import sequelize from 'sequelize';
import {
  BillModel, ComplaintsModel, ContactUsModel, FlatModel, UserModel,
} from '../../models';
import Advertisement from '../../models/Advertisement';
import Announcement from '../../models/Announcement';

const AdminStatistics = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await UserModel.count();
    const advertisements = await Advertisement.count();
    const announcements = await Announcement.count();
    const complaints = await ComplaintsModel.count();
    const messages = await ContactUsModel.count();
    const usersBills = await BillModel.findAll({
      group: 'Flat.User.id',
      raw: true,
      attributes: [
        [sequelize.fn('COUNT', sequelize.col('Bill.id')), 'n_bills'],
      ],
      include: [
        {
          model: FlatModel,
          attributes: [],
          include: [{
            model: UserModel,
            attributes: [
              'first_name',
              'last_name',
            ],
          }],
        },
      ],
    });

    res.json({
      users,
      messages,
      advertisements,
      announcements,
      complaints,
      usersBills,
    });
  } catch (err) {
    next(err);
  }
};

export default AdminStatistics;

/*
    Users
    Complaints
    ContactUs
    Announcements
    Advertisemments
    Users-Bills
*/
