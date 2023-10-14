import { Injectable } from '@nestjs/common';
import {
  CalculateRouteDto,
  CalculateRouteResultDto,
} from '../models/drone.model';
import { calculateFastRouteBetweenTwoPoints } from '../utils/calculationFunctions';
import { MapService } from './map.service';

@Injectable()
export class DroneService {
  constructor(private readonly mapService: MapService) {}

  async calculateRoute(
    calculateRouteDto: CalculateRouteDto,
  ): Promise<CalculateRouteResultDto> {
    const map = await this.mapService.getMap();

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

    return {
      path: fullPath.join('-'),
      totalSeconds: totalCost.toFixed(2),
    };
  }
}
