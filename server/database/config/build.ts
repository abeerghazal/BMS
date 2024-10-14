/* eslint-disable no-console */
import sequelize from './connection';
import {
  announcements, advertisements, bills, flats, services, users, payments, complaints, contactUs,
} from './fakeData';

import {
  AnnouncementModel, AdvertisementModel, BillModel, FlatModel, ServiceModel, UserModel,
  PaymentModel, ComplaintsModel, ContactUsModel,
} from '../../models/index';

const insertDB = async () => {
  try {
    await sequelize.sync({ force: true });
    await AnnouncementModel.bulkCreate(announcements);
    await AdvertisementModel.bulkCreate(advertisements);
    await ServiceModel.bulkCreate(services);
    await UserModel.bulkCreate(users);
    await FlatModel.bulkCreate(flats);
    await BillModel.bulkCreate(bills);
    await PaymentModel.bulkCreate(payments);
    await ComplaintsModel.bulkCreate(complaints);
    await ContactUsModel.bulkCreate(contactUs);

    console.log('Build Database Successfully');
  } catch (err) {
    console.log('Build Database Failed', err);
  }
};
if (process.env.SEED) {
  insertDB();
}

export default insertDB;
