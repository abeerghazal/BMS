import request from 'supertest';
import app from '../server/app';
import insertDB from '../server/database/config/build';
import sequelize from '../server/database/config/connection';

beforeAll(insertDB);

describe('Contact API', () => {
    test('Contact -GET api/v1/contacts/', async () => {
      const login = await request(app)
      .post('/api/v1/auth/login')
      .send({
        phoneNumber: '0591000100',
        password : 'password'
      });
    const token = login.headers['set-cookie'].filter(X => X.includes('token'))[0];
    
    const response = await request(app)
    .get('/api/v1/contacts/')
    .set('Cookie', [token])
        .expect(200);
      expect(response.body.data.length).toBe(5);
    });

    test('Contact -GET api/v1/contacts/', async () => {
      const login = await request(app)
      .post('/api/v1/auth/login')
      .send({
        phoneNumber: '0591000100',
        password : 'password'
      });
    const token = login.headers['set-cookie'].filter(X => X.includes('token'))[0];
    
    const response = await request(app)
    .get('/api/v1/contacts/')
    .set('Cookie', [token])
        .expect(200);
      expect(response.body.data[0].name).toBe('محمد أمين');
    });

    test('Contact -GET api/v1/contacts/', async () => {
      const login = await request(app)
      .post('/api/v1/auth/login')
      .send({
        phoneNumber: '0591000100',
        password : 'password'
      });
    const token = login.headers['set-cookie'].filter(X => X.includes('token'))[0];
    
    const response = await request(app)
    .get('/api/v1/contactsss/')
    .set('Cookie', [token])
          .expect(404);
      });
      
  });


afterAll(async () => sequelize.close());
