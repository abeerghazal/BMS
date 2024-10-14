import { DataTypes } from 'sequelize';
import { InferBillModel } from '../interfaces/models';

import sequelize from '../database/config/connection';

const Bill = sequelize.define<InferBillModel>('Bill', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  total_price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  is_open: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  services: {
    type: DataTypes.ARRAY(DataTypes.JSON),
    allowNull: false,
  },
  FlatId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Bill;
