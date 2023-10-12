import { Injectable } from '@nestjs/common';
import {
  CalculateRouteDto,
  CalculateRouteResultDto,
} from '../models/drone.model';
import { calculateFastRouteBetweenTwoPoints } from '../utils/calculationFunctions';
import { HttpService } from '@nestjs/axios';
import constants from '../utils/constants';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class DroneService {
  constructor(private readonly httpService: HttpService) {}

  async calculateRoute(
    calculateRouteDto: CalculateRouteDto,
  ): Promise<CalculateRouteResultDto> {
    const map = await this.getMap();

    const fromStartToObject = calculateFastRouteBetweenTwoPoints(
      map,
      calculateRouteDto.startPoint,
      calculateRouteDto.objectPoint,
    );
    const fromObjectToEnd = calculateFastRouteBetweenTwoPoints(
      map,
      calculateRouteDto.objectPoint,
      calculateRouteDto.destinationPoint,
    );
    fromObjectToEnd.path.shift();

    const fullPath = fromStartToObject.path.concat(fromObjectToEnd.path);
    const totalCost = fromStartToObject.cost + fromObjectToEnd.cost;

    const response: CalculateRouteResultDto = {
      path: fullPath.join('-'),
      totalSeconds: totalCost.toFixed(2),
    };
    return response;
  }

  private async getMap() {
    const { data } = await firstValueFrom(
      this.httpService.get(constants.MOCKIO_URL),
    );
    return data;
  }
}
