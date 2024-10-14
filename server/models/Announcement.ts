import { DataTypes } from 'sequelize';
import { InferAnnouncementModel } from '../interfaces/models';

import sequelize from '../database/config/connection';

const Announcement = sequelize.define<InferAnnouncementModel>('Announcements', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  start_date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  end_date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Announcement;
