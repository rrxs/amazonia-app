import { MapService } from '../services/map.service';
import { HttpService } from '@nestjs/axios';
import { of } from 'rxjs';
import { TestBed } from '@automock/jest';
import { MapOutput } from 'src/models/map.model';
import { AxiosResponse } from 'axios';

describe('MapService', () => {
  let mapService: MapService;
  let httpService: jest.Mocked<HttpService>;

  beforeAll(async () => {
    const { unit, unitRef } = TestBed.create(MapService)
      .mock(HttpService)
      .using({ get: jest.fn() })
      .compile();

    mapService = unit;

    httpService = unitRef.get(HttpService);
  });

  it('should be defined', () => {
    expect(mapService).toBeDefined();
  });

  it('should call getMap and returns successfully', async () => {
    const mapMock = { A1: { B1: 1 } };

    httpService.get.mockReturnValueOnce(
      of<AxiosResponse<MapOutput>>({
        data: mapMock,
        status: undefined,
        statusText: undefined,
        headers: undefined,
        config: undefined,
      }),
    );

    const mapData = await mapService.getMap();

    expect(mapData).toEqual(mapMock);
  });
});
