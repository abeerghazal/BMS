import {
  Model, CreationOptional, InferAttributes, InferCreationAttributes, ForeignKey,
} from 'sequelize';

interface InferUserModel extends Model<InferAttributes<InferUserModel>,
InferCreationAttributes<InferUserModel>> {
  [x: string]: any;
  id: CreationOptional<number>;
  first_name: string,
  last_name: string,
  email: string,
  phone_number: string,
  role: string,
  hashed_password: string,
}

interface InferComplaintsModel extends Model<InferAttributes<InferComplaintsModel>,
InferCreationAttributes<InferComplaintsModel>> {
  id: CreationOptional<number>;
  title: string,
  description: string,
  deletedAt?: CreationOptional<Date>,
  UserId?: ForeignKey<InferUserModel['id']>;
}

interface InferServiceModel extends Model<InferAttributes<InferServiceModel>,
InferCreationAttributes<InferServiceModel>> {
  id: CreationOptional<number>;
  name: string,
  price: number,
  isFixed: boolean,
  description: string,
  isOpen: boolean
}

interface InferFlatModel extends Model<InferAttributes<InferFlatModel>,
InferCreationAttributes<InferFlatModel>> {
  id: CreationOptional<number>;
  flat_number: number,
  area: number,
  notes: string,
  is_active: boolean,
  UserId: number | null,
}

interface InferPaymentModel extends Model<InferAttributes<InferPaymentModel>,
InferCreationAttributes<InferPaymentModel>> {
  id: CreationOptional<number>;
  title: string,
  description: string,
}

type BillServices = {
  name: string,
  price: number,
  isFixed: boolean,
  description: string,
  isOpen: boolean,
};
interface InferBillModel extends Model<InferAttributes<InferBillModel>,
InferCreationAttributes<InferBillModel>> {
  id: CreationOptional<number>;
  total_price: number,
  is_open: boolean,
  services: Array<BillServices>,
  FlatId: ForeignKey<InferFlatModel['id']>
}

interface InferAnnouncementModel extends Model<InferAttributes<InferAnnouncementModel>,
InferCreationAttributes<InferAnnouncementModel>> {
  id: CreationOptional<number>;
  title: string,
  start_date: string,
  end_date: string,
}

interface InferAdvertisementModel extends Model<InferAttributes<InferAdvertisementModel>,
InferCreationAttributes<InferAdvertisementModel>> {
  id: CreationOptional<number>;
  title: string,
  description: string,
  start_date: string,
  end_date: string,
  image: string,
}

interface InferContactUsModel extends Model<InferAttributes<InferContactUsModel>,
InferCreationAttributes<InferContactUsModel>> {
  id: CreationOptional<number>;
  name: string,
  email: string,
  phone: string,
  subject: string,
  description: string,
}

export {
  InferComplaintsModel,
  InferUserModel,
  InferServiceModel,
  InferFlatModel,
  InferPaymentModel,
  InferBillModel,
  InferAnnouncementModel,
  InferAdvertisementModel,
  InferContactUsModel,
};
