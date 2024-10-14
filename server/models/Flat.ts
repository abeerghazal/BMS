import { DataTypes } from 'sequelize';
import { InferFlatModel } from '../interfaces/models';

import sequelize from '../database/config/connection';

const Flat = sequelize.define<InferFlatModel>('Flat', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  flat_number: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  area: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  notes: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  UserId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

export default Flat;
