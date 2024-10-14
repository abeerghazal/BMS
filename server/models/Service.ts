import { DataTypes } from 'sequelize';
import { InferServiceModel } from '../interfaces/models';

import sequelize from '../database/config/connection';

const Service = sequelize.define<InferServiceModel>('Service', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  isFixed: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isOpen: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

export default Service;
