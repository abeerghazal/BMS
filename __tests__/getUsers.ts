import request from 'supertest';
import app from '../server/app';
import insertDB from '../server/database/config/build';
import sequelize from '../server/database/config/connection';
const adminToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiZmlyc3RfbmFtZSI6Itij2K3ZhdivIiwibGFzdF9uYW1lIjoi2LPYudmK2K8iLCJpYXQiOjE2Njc3MzcxNjh9.x-ZgHUg3C8gETa9Ef7DegQ1W5sSR4CMCMx0D75SmMbs'

beforeAll(insertDB);

describe('Users API', () => {
    test('User -GET api/v1/user/:page', async () => {
      const response = await request(app)
        .get('/api/v1/user/1')
        .set({ Cookie: [`token=${adminToken}`] })
        .expect(200);
      expect(response.body.data.length).toBe(3);
    });
    test('User -GET api/v1/user/:page', async () => {
        const response = await request(app)
          .get('/api/v1/user/1')
          .set({ Cookie: [`token=${adminToken}`] })
          .expect(200);
        expect(response.body.data[0].full_name).toBe('أحمد سعيد');
      });
      test('User -GET api/v1/user/:page', async () => {
        const response = await request(app)
          .get('/api/v1/user/1')
          .set({ Cookie: [`token=${adminToken}`] })
          .expect(200);
        expect(response.body.data[0].phone_number).toBe('0591000100');
      });
      test('User -GET api/v1/user/:page', async () => {
        const response = await request(app)
          .get('/api/v1/user/1')
          .set({ Cookie: [`token=${adminToken}`] })
          .expect(200);
        expect(response.body.data[0].id).toBe(1);
      });
  });


afterAll(async () => sequelize.close());