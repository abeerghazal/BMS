import { DataTypes } from 'sequelize';
import { InferUserModel } from '../interfaces/models';

import sequelize from '../database/config/connection';

const User = sequelize.define<InferUserModel>(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isEmail: true,
      },
    },
    phone_number: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM('admin', 'user'),
      allowNull: false,
    },
    hashed_password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
);

export default User;
