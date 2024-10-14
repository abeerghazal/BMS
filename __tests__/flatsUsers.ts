import request from 'supertest';
import app from '../server/app';
import insertDB from '../server/database/config/build';
import sequelize from '../server/database/config/connection';

beforeAll(insertDB);

describe('Flat API', () => {
    test('FlatsUsers -GET api/v1/flats/users', async () => {
      const login = await request(app)
      .post('/api/v1/auth/login')
      .send({
        phoneNumber: '0591000100',
        password : 'password'
      });
      const token = login.headers['set-cookie'].filter(X => X.includes('token'))[0];
      const response = await request(app)
        .get('/api/v1/flats/users?results=2&page=2&pagination%5Bcurrent%5D=2&pagination%5BpageSize%5D=2&pagination%5Btotal%5D=4')
        .set('Cookie', [token])
        .expect(200);
      expect(response.body.result.length).toBe(5);
    });
    test('FlatsUsers -GET api/v1/flats/users', async () => {
      const login = await request(app)
      .post('/api/v1/auth/login')
      .send({
        phoneNumber: '0591000100',
        password : 'password'
      });
      const token = login.headers['set-cookie'].filter(X => X.includes('token'))[0];
        const response = await request(app)
          .get('/api/v1/flats/users?results=2&page=1&pagination%5Bcurrent%5D=1&pagination%5BpageSize%5D=2&pagination%5Btotal%5D=4')
          .set('Cookie', [token])
          .expect(200);
        expect(response.body.result[0].flat_number).toBe(101);
      });     
      test('FlatsUsers -GET api/v1/flats/users', async () => {
        const login = await request(app)
        .post('/api/v1/auth/login')
        .send({
          phoneNumber: '0591000100',
          password : 'password'
        });
        const token = login.headers['set-cookie'].filter(X => X.includes('token'))[0];
        const response = await request(app)
          .get('/api/v1/flats/users?results=2&page=1&pagination%5Bcurrent%5D=1&pagination%5BpageSize%5D=2&pagination%5Btotal%5D=4')
          .set('Cookie', [token])
          .expect(200);
        expect(response.body.result[0].full_name).toEqual("أحمد سعيد");
      });
      test('FlatsUsers -GET api/v1/flats/users', async () => {
        const login = await request(app)
        .post('/api/v1/auth/login')
        .send({
          phoneNumber: '0591000100',
          password : 'password'
        });
        const token = login.headers['set-cookie'].filter(X => X.includes('token'))[0];
        const response = await request(app)
          .get('/api/v1/flats/users?results=2&page=1&pagination%5Bcurrent%5D=1&pagination%5BpageSize%5D=2&pagination%5Btotal%5D=4')
          .set('Cookie', [token])
          .expect(200);
        expect(response.body.result[0].phone_number).toBe("0591000100");
      });
      test('FlatsUsers -GET api/v1/flats/users', async () => {
        const login = await request(app)
        .post('/api/v1/auth/login')
        .send({
          phoneNumber: '0591000100',
          password : 'password'
        });
        const token = login.headers['set-cookie'].filter(X => X.includes('token'))[0];
        const response = await request(app)
          .get('/api/v1/flats/users/notfound')
          .set('Cookie', [token])
          .expect(404);
        expect(response.body.message).toBe("Not Found");
      });

  });


afterAll(async () => sequelize.close());