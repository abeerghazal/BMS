import request from 'supertest';
import app from '../server/app';
import insertDB from '../server/database/config/build';
import sequelize from '../server/database/config/connection';

beforeAll(insertDB);

describe('Flat API', () => {
    test('Flat -GET api/v1/flats/', async () => {
      const response = await request(app)
        .get('/api/v1/flats/')
        .expect(200);
      expect(response.body.data.length).toBe(3);
    });
    test('Flat -GET api/v1/flats/', async () => {
        const response = await request(app)
          .get('/api/v1/flats/')
          .expect(200);
        expect(response.body.data[0].flat_number).toBe(101);
      });
      test('Flat -GET api/v1/flats/', async () => {
        const response = await request(app)
          .get('/api/v1/flats/')
          .expect(200);
        expect(response.body.data[1].area).toBe(160);
      });
      test('Flat -GET api/v1/flats/', async () => {
        const response = await request(app)
          .get('/api/v1/flats/')
          .expect(200);
        expect(response.body.data[2].UserId).toBe(3);
      });
      test('Flat -GET api/v1/flats/', async () => {
        const response = await request(app)
          .get('/api/v1/flats/')
          .expect(200);
        expect(response.body.data[0].UserId).toBe(1);
      });
  });


afterAll(async () => sequelize.close());
