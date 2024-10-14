import { Sequelize } from 'sequelize';

import dotenv from 'dotenv';

dotenv.config();

const {
  NODE_ENV, DEV_DB_URL, TEST_DB_URL, DATABASE_URL,
} = process.env;

let url:string = '' || undefined;
let ssl : boolean | object = false;

switch (NODE_ENV) {
  case 'development':
    url = DEV_DB_URL;
    break;
  case 'production':
    url = DATABASE_URL;
    ssl = {
      rejectUnauthorized: false,
    };
    break;
  case 'test':
    url = TEST_DB_URL;
    break;
  default:
    throw new Error('The database url is invalid!');
}

if (!url) throw new Error('The database url is invalid!');

const sequelizeConfig = new Sequelize(url, {
  logging: false,
  dialect: 'postgres',
  dialectOptions: {
    ssl,
  },
});
export default sequelizeConfig;
