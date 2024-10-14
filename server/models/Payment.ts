import { DataTypes } from 'sequelize';
import { InferPaymentModel } from '../interfaces/models';

import sequelize from '../database/config/connection';

const Payment = sequelize.define<InferPaymentModel>(
  'Payment',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
);

export default Payment;
