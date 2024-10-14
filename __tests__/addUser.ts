import request from 'supertest';
import app from '../server/app';
import insertDB from '../server/database/config/build';
import sequelize from '../server/database/config/connection';

beforeAll(insertDB);

describe('Users API', () => {
    test('Users -post api/v1/user/adduser/', async () => {
      const login = await request(app)
      .post('/api/v1/auth/login')
      .send({
        phoneNumber: '0591000100',
        password : 'password'
      });
    const token = login.headers['set-cookie'].filter(X => X.includes('token'))[0];
      const response = await request(app)
        .post('/api/v1/user/adduser')
        .set('Cookie', [token])
        .send({
            firstName: 'Bayan',
            lastName: ' Abd El Bary',
            phoneNumber: '0591212312',
            email: 'bayan@gmail.com',
            password: 'password',
            flatNumber: 110
        })
        .expect(201);
      expect(response.body.message).toBe("User Created Successfully");
    });
    test('Users -post api/v1/user/adduser/', async () => {
      const login = await request(app)
      .post('/api/v1/auth/login')
      .send({
        phoneNumber: '0591000200',
        password : 'password'
      });
    const token = login.headers['set-cookie'].filter(X => X.includes('token'))[0];
      const response = await request(app)
        .post('/api/v1/user/adduser')
        .set('Cookie', [token])
        .send({
            firstName: 'Bayan',
            lastName: ' Abd El Bary',
            phoneNumber: '0591212312',
            email: 'bayan@gmail.com',
            password: 'password',
            flatNumber: 110
        })
        .expect(401);
      expect(response.body.message).toBe("You are not Authorized");
    });
        test('Users -post api/v1/user/adduser/', async () => {
          const login = await request(app)
          .post('/api/v1/auth/login')
          .send({
            phoneNumber: '0591000100',
            password : 'password'
          });
          const token = login.headers['set-cookie'].filter(X => X.includes('token'))[0];
          const response = await request(app)
            .post('/api/v1/user/adduser')
            .set('Cookie', [token])
            .send({
                firstName: 'Bayan',
                lastName: ' Abd El Bary',
                phoneNumber: '0591212312',
                email: 'bayan@gmail.com',
                password: 'password',
                flatNumber: 111
            })
            // .expect(400);
          expect(response.body.message).toBe("Phone Number Already Exist");
        });
    test('Users -post api/v1/user/adduser/', async () => {
      const login = await request(app)
      .post('/api/v1/auth/login')
      .send({
        phoneNumber: '0591000100',
        password : 'password'
      });
      const token = login.headers['set-cookie'].filter(X => X.includes('token'))[0];
        const response = await request(app)
          .post('/api/v1/user/adduser')
          .set('Cookie', [token])
          .send({
              firstName: 'Bayan',
              lastName: ' Abd El Bary',
              phoneNumber: '0591212312',
              email: 'bayangmail.com',
              password: 'password',
              flatNumber: 112
          })
          .expect(400);
        expect(response.body.message).toEqual(["email must be a valid email"]);
      });
      test('Users -post api/v1/user/adduser/', async () => {
        const login = await request(app)
        .post('/api/v1/auth/login')
        .send({
          phoneNumber: '0591000100',
          password : 'password'
        });
        const token = login.headers['set-cookie'].filter(X => X.includes('token'))[0];
        const response = await request(app)
          .post('/api/v1/user/adduser')
          .set('Cookie', [token])
          .send({
              firstName: 'Bayan',
              lastName: ' Abd El Bary',
              phoneNumber: '059',
              email: 'bayan@gmail.com',
              password: 'password',
              flatNumber: 113
          })
          .expect(400);
        expect(response.body.message).toEqual(["phoneNumber must be at least 7 characters"]);
      });
      test('Users -post api/v1/user/adduser/', async () => {
        const login = await request(app)
        .post('/api/v1/auth/login')
        .send({
          phoneNumber: '0591000100',
          password : 'password'
        });
        const token = login.headers['set-cookie'].filter(X => X.includes('token'))[0];
        const response = await request(app)
          .post('/api/v1/user/adduser')
          .set('Cookie', [token])
          .send({
              firstName: 'Bayan',
              lastName: ' Abd El Bary',
              phoneNumber: '0591212312',
              email: 'bayan@gmail.com',
              password: '123',
              flatNumber: 117
          })
          .expect(400);
        expect(response.body.message).toEqual(["password must be at least 8 characters"]);
      });
      test('Users -post api/v1/user/adduser/', async () => {
        const login = await request(app)
        .post('/api/v1/auth/login')
        .send({
          phoneNumber: '0591000100',
          password : 'password'
        });
        const token = login.headers['set-cookie'].filter(X => X.includes('token'))[0];
        const response = await request(app)
          .post('/api/v1/user/adduser/hhh')
          .set('Cookie', [token])
          .send({
              firstName: 'Bayan',
              lastName: ' Abd El Bary',
              phoneNumber: '05912123123',
              email: 'bayan@gmail.com',
              password: 'password',
              flatNumber: 116
          })
          .expect(404);
        expect(response.body.message).toBe("Not Found");
      });
  });


  afterAll(async () => sequelize.close());
