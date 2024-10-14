import { DataTypes } from 'sequelize';
import { InferComplaintsModel } from '../interfaces/models';

import sequelize from '../database/config/connection';

const ComplaintsModel = sequelize.define<InferComplaintsModel>('Complaint', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },

  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, { paranoid: true });

export default ComplaintsModel;
