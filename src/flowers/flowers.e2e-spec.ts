import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from 'src/app.module';
import request from 'supertest';

describe('FlowerController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleMixture: TestingModule = await Test.createTestingModule({
      providers: [AppModule],
    }).compile();
    app = moduleMixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });
  it('/flowers (GET)', () => {
    return request(app.getHttpServer())
      .get('/flowers')
      .expect(200)
      .expect([
        {
          id: 1,
          name: 'rose',
          color: 'red',
          price: 20,
          createdAt: '2025-08-20T11:07:57.303Z',
          updatedAt: '2025-08-20T11:07:57.303Z',
        },
        {
          id: 2,
          name: 'rose',
          color: 'red',
          price: 20,
          createdAt: '2025-08-20T13:02:47.850Z',
          updatedAt: '2025-08-20T13:02:47.850Z',
        },
        {
          id: 3,
          name: 'rose',
          color: 'red',
          price: 20,
          createdAt: '2025-08-23T08:21:11.819Z',
          updatedAt: '2025-08-23T08:21:11.819Z',
        },
        {
          id: 4,
          name: 'rose',
          color: 'red',
          price: 20,
          createdAt: '2025-08-23T08:22:24.815Z',
          updatedAt: '2025-08-23T08:22:24.815Z',
        },
      ]);
  });
  it('/flowers (POST)', () => {
    return request(app.getHttpServer())
      .post('/flowers')
      .send({
        name: 'rose',
        color: 'white',
        price: 10,
      })
      .expect(201)
      .expect((response) => {
        console.log(response);
        return response.body.name === 'Sunflower';
      });
  });
  afterAll(async () => {
    await app.close();
  });
});
