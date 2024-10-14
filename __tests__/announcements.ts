import request from 'supertest';
import app from '../server/app';
import insertDB from '../server/database/config/build';
import sequelize from '../server/database/config/connection';

beforeAll(insertDB);

describe('announcements API', () => {
    test('announcements -GET api/v1/announcements/', async () => {
      const response = await request(app)
        .get('/api/v1/announcements/')
        .expect(401);
    });
    test('announcements -GET api/v1/announcements/', async () => {
      const login = await request(app)
        .post('/api/v1/auth/login')
        .send({
          phoneNumber: '0591000100',
          password : 'password'
        });
      const token = login.headers['set-cookie'].filter(X => X.includes('token'))[0];

      const response = await request(app)
        .get('/api/v1/announcements/')
        .set('Cookie', [token])
        .expect(200);
      expect(response.body.data.length).toBe(3);
    });
  });


afterAll(async () => sequelize.close());
