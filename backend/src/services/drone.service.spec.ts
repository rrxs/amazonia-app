import { Test, TestingModule } from '@nestjs/testing';
import { MapService } from '../services/map.service';
import { DroneService } from './drone.service';
import * as calculateFunctions from '../utils/calculationFunctions';
import { CalculateRouteDto } from 'src/models/drone.model';

const mapMock = {
  A1: {
    B1: 1,
  },
};

const calculateFunctionReturn = {
  path: ['A1', 'A2'],
  cost: 1,
};

class MapServiceStub {
  async getMap(): Promise<any> {
    return Promise.resolve(mapMock);
  }
}

describe('DroneService', () => {
  let droneService: DroneService;
  let calculateFunctionSpy: jest.SpyInstance;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DroneService,
        { provide: MapService, useClass: MapServiceStub },
      ],
    }).compile();

    droneService = module.get<DroneService>(DroneService);
    calculateFunctionSpy = jest
      .spyOn(calculateFunctions, 'calculateFastRouteBetweenTwoPoints')
      .mockReturnValue(calculateFunctionReturn);
  });

  it('should be defined', () => {
    expect(droneService).toBeDefined();
  });

  it('should call calculateFastRouteBetweenTwoPoints with correct params', async () => {
    const params: CalculateRouteDto = {
      startPoint: 'A1',
      objectPoint: 'A2',
      destinationPoint: 'A3',
    };

    await droneService.calculateRoute(params);

    expect(calculateFunctionSpy).toBeCalledTimes(2);
    expect(calculateFunctionSpy).toHaveBeenNthCalledWith(
      1,
      mapMock,
      params.startPoint,
      params.objectPoint,
    );
    expect(calculateFunctionSpy).toHaveBeenLastCalledWith(
      mapMock,
      params.objectPoint,
      params.destinationPoint,
    );
  });

  it('should call calculateRoute and return correct values', async () => {
    const params: CalculateRouteDto = {
      startPoint: '',
      objectPoint: '',
      destinationPoint: '',
    };
    const calculatedResult = {
      path: '',
      totalSeconds: '2.00',
    };

    const result = await droneService.calculateRoute(params);

    expect(result).toEqual(calculatedResult);
  });
});
