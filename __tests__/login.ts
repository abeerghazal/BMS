import request from 'supertest';
import app from '../server/app';
import insertDB from '../server/database/config/build';
import sequelize from '../server/database/config/connection';

beforeAll(insertDB);

describe('Auth API', () => {
    test('Auth -post api/v1/auth/login/', async () => {
      const response = await request(app)
        .post('/api/v1/auth/login')
        .send({
            phoneNumber: '0591000100',
            password: 'password'
        })
        .expect(200);
      expect(response.body.message).toBe("Logged in Successfully");
    });
    test('Auth -post api/v1/auth/login/', async () => {
      const response = await request(app)
        .post('/api/v1/auth/login')
        .send({
            phoneNumber: '05910001000',
            password: 'password'
        })
        .expect(400);
      expect(response.body.message).toBe('User Doesn\'t Exist');
    });
    test('Auth -post api/v1/auth/login/', async () => {
      const response = await request(app)
        .post('/api/v1/auth/login')
        .send({
            phoneNumber: '0591000100',
            password: 'passwords'
        })
        .expect(400);
      expect(response.body.message).toBe('Invalid Password');
    });
  });

afterAll(async () => sequelize.close());
