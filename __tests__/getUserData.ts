import request from 'supertest';
import app from '../server/app';
import insertDB from '../server/database/config/build';
import sequelize from '../server/database/config/connection';
const adminToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiZmlyc3RfbmFtZSI6Itij2K3ZhdivIiwibGFzdF9uYW1lIjoi2LPYudmK2K8iLCJpYXQiOjE2Njc3MzcxNjh9.x-ZgHUg3C8gETa9Ef7DegQ1W5sSR4CMCMx0D75SmMbs'
const userToken ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwicm9sZSI6InVzZXIiLCJmaXJzdF9uYW1lIjoi2K7Yp9mE2K8iLCJsYXN0X25hbWUiOiLYudmF2LEiLCJpYXQiOjE2Njc3MzcyMTh9.g8Nk0m0ykosNIvPJbk9biQ2DUoEh62H6RqQX_4-BD10'
beforeAll(insertDB);

describe('Users API', () => {
    test('User -GET api/v1/auth/userdata', async () => {
      const response = await request(app)
      .get('/api/v1/auth/userdata')
      .set({ Cookie: [`token=${adminToken}`] })
      .expect(200);
      expect(response.body).toEqual({id: 1, role:'admin',"fullName": "أحمد سعيد"});
    });
    test('User -GET api/v1/auth/userdata', async () => {
      const response = await request(app)
      .get('/api/v1/auth/userdata')
      .set({ Cookie: [`token=${userToken}`] })
      .expect(200);
      expect(response.body).toEqual({id: 2, role:'user',"fullName": "خالد عمر"});
    });
    test('User -GET api/v1/auth/userdata', async () => {
      const response = await request(app)
      .get('/api/v1/auth/userdata')
      .set({ Cookie: [`token= `] })
      .expect(200);
      expect(response.body).toBe(null);
    });
    
  });


afterAll(async () => sequelize.close());