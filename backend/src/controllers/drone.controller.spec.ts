import { Test, TestingModule } from '@nestjs/testing';
import { DroneController } from '../controllers/drone.controller';
import {
  CalculateRouteDto,
  CalculateRouteResultDto,
} from '../models/drone.model';
import { DroneService } from '../services/drone.service';

const calculateResultMock = {
  path: 'A-B-C',
  totalSeconds: '10',
};

class DroneServiceStub {
  async calculateRoute(): Promise<CalculateRouteResultDto> {
    return Promise.resolve(calculateResultMock);
  }
}

describe('DroneController', () => {
  let droneController: DroneController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DroneController],
      providers: [{ provide: DroneService, useClass: DroneServiceStub }],
    }).compile();

    droneController = app.get<DroneController>(DroneController);
  });

  it('should call and return calculated results', async () => {
    const params: CalculateRouteDto = {
      startPoint: 'A',
      objectPoint: 'B',
      destinationPoint: 'C',
    };
    const result = await droneController.calculateRoute(params);
    expect(result).toEqual(calculateResultMock);
  });
});
