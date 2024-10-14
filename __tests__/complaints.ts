import request from 'supertest';
import app from '../server/app';
import insertDB from '../server/database/config/build';
import sequelize from '../server/database/config/connection';

beforeAll(insertDB);

afterAll(async () => sequelize.close());


describe('Complaints API', () => {
    test('Complaints -GET api/v1/complaints/', async () => {
      const response = await request(app)
        .get('/api/v1/complaints/')
        .expect(401);
    });

    // test('Complaints -GET api/v1/complaints/1', async () => {
    //   const response = await request(app)
    //     .get('/api/v1/complaints/1')
    //     .expect(200);
    //   expect(response.body.data.title).toBe('شكوى رقم 1');
    // });

    // test('Complaints -GET api/v1/complaints/one', async () => {
    //     const response = await request(app)
    //       .get('/api/v1/complaints/one')
    //       .expect(400);
    //   expect(response.body.message).toBe('Complaint Id must be a number and greater then 0');
    // });

    // test('Complaints -DELETE api/v1/complaints/1', async () => {
    //     const response = await request(app)
    //       .delete('/api/v1/complaints/1')
    //       .expect(200);
    //   expect(response.body.message).toBe('Delete Complaint Successfully');
    // });

    // test('Complaints -DELETE api/v1/complaints/1', async () => {
    //     const response = await request(app)
    //       .delete('/api/v1/complaints/1')
    //       .expect(400);
    //   expect(response.body.message).toBe('Complaint unavailable');
    // });

    // test('Complaints -DELETE api/v1/complaints/one', async () => {
    //     const response = await request(app)
    //       .delete('/api/v1/complaints/one')
    //       .expect(400);
    //   expect(response.body.message).toBe('Complaint Id must be a number and greater then 0');
    // });

    test('Complaints -POST api/v1/complaints/', async () => {
      const login = await request(app)
        .post('/api/v1/auth/login')
        .send({
          phoneNumber: '0591000200',
          password : 'password'
        });
      const token = login.headers['set-cookie'].filter(X => X.includes('token'))[0];

        const response = await request(app)
          .post('/api/v1/complaints/')
          .set('Cookie', [token])
          .send({title: 'Complaint', description: 'Compalint description'})
          .expect(201);
      expect(response.body.message).toBe('Complaints Added Successfully');
    });
    // test('Complaints missing inputs 400 -POST api/v1/complaints/', async () => {
    //     const response = await request(app)
    //       .post('/api/v1/complaints/')
    //       .send({title: 'Complaint'})
    //       .expect(400);
    //   expect(response.body.message).toEqual(['description is a required field']);
    // });

});