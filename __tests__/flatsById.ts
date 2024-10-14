import request from 'supertest';
import app from '../server/app';
import insertDB from '../server/database/config/build';
import sequelize from '../server/database/config/connection';

beforeAll(insertDB);

describe('Flats API', () => {
    test('Flat -GET api/v1/Flat/:id', async () => {
      const login = await request(app)
      .post('/api/v1/auth/login')
      .send({
        phoneNumber: '0591000100',
        password : 'password'
      });
      const token = login.headers['set-cookie'].filter(X => X.includes('token'))[0];
      const response = await request(app)
        .get('/api/v1/flats/1')
        .set('Cookie', [token])
        .expect(200);
      expect(response.body.data.length).toBe(1);
    });
    test('Flat -GET api/v1/Flat/:id', async () => {
      const login = await request(app)
      .post('/api/v1/auth/login')
      .send({
        phoneNumber: '0591000200',
        password : 'password'
      });
      const token = login.headers['set-cookie'].filter(X => X.includes('token'))[0];
      const response = await request(app)
        .get('/api/v1/flats/1')
        .set('Cookie', [token])
        .expect(401);
      expect(response.body.message).toBe('You are not Authorized');
    })
    test('Flat -GET api/v1/Flat/:id', async () => {
      const login = await request(app)
      .post('/api/v1/auth/login')
      .send({
        phoneNumber: '0591000100',
        password : 'password'
      });
      const token = login.headers['set-cookie'].filter(X => X.includes('token'))[0];
        const response = await request(app)
          .get('/api/v1/flats/1')
          .set('Cookie', [token])
          .expect(200);
        expect(response.body.data[0].flat_number).toBe(101);
      });
      test('Flat -GET api/v1/Flat/:id', async () => {
        const login = await request(app)
        .post('/api/v1/auth/login')
        .send({
          phoneNumber: '0591000100',
          password : 'password'
        });
        const token = login.headers['set-cookie'].filter(X => X.includes('token'))[0];
        const response = await request(app)
          .get('/api/v1/flats/1')
          .set('Cookie', [token])
          .expect(200);
        expect(response.body.data[0].User.phone_number).toBe('0591000100');
      });
      test('Flat -GET api/v1/Flat/:id', async () => {
        const login = await request(app)
        .post('/api/v1/auth/login')
        .send({
          phoneNumber: '0591000100',
          password : 'password'
        });
        const token = login.headers['set-cookie'].filter(X => X.includes('token'))[0];
        const response = await request(app)
          .get('/api/v1/flats/1')
          .set('Cookie', [token])
          .expect(200);
        expect(response.body.data[0].User.first_name).toBe('أحمد');
      });
  });


afterAll(async () => sequelize.close());