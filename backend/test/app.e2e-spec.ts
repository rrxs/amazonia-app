import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import {
  CalculateRouteDto,
  CalculateRouteResultDto,
} from 'src/models/drone.model';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/drone/calculate-route (POST)', async () => {
    const calculationParams: CalculateRouteDto = {
      startPoint: 'A2',
      objectPoint: 'D5',
      destinationPoint: 'C8',
    };
    const calculationResult: CalculateRouteResultDto = {
      path: 'A2-A3-B3-C3-C4-C5-D5-D6-D7-D8-C8',
      totalSeconds: '185.55',
    };

    const response = await request(app.getHttpServer())
      .post('/drone/calculate-route')
      .send(calculationParams)
      .expect(200);

    expect(response.body).toStrictEqual(calculationResult);
  });
});
