import PaymentModel from './Payment';
import UserModel from './User';
import FlatModel from './Flat';
import AdvertisementModel from './Advertisement';
import AnnouncementModel from './Announcement';
import BillModel from './Bill';
import ServiceModel from './Service';
import ComplaintsModel from './Complaints';
import ContactUsModel from './ContactUs';

FlatModel.hasMany(BillModel);
BillModel.belongsTo(FlatModel);

UserModel.hasMany(FlatModel);
FlatModel.belongsTo(UserModel);

BillModel.hasMany(PaymentModel);
PaymentModel.belongsTo(BillModel);

UserModel.hasMany(ComplaintsModel);
ComplaintsModel.belongsTo(UserModel);

export {
  PaymentModel, UserModel, BillModel, FlatModel, ServiceModel, AnnouncementModel,
  AdvertisementModel, ComplaintsModel, ContactUsModel,
};
