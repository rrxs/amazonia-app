import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { DroneService } from '../services/drone.service';
import {
  CalculateRouteDto,
  CalculateRouteResultDto,
} from '../models/drone.model';

@Controller('drone')
export class DroneController {
  constructor(private readonly droneService: DroneService) {}

  @Post('calculate-route')
  @HttpCode(200)
  async calculateRoute(
    @Body() calculateRouteDto: CalculateRouteDto,
  ): Promise<CalculateRouteResultDto> {
    return await this.droneService.calculateRoute(calculateRouteDto);
  }
}
