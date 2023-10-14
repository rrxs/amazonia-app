import { Module } from '@nestjs/common';
import { DroneService } from './services/drone.service';
import { HttpModule } from '@nestjs/axios';
import { DroneController } from './controllers/drone.controller';
import { MapService } from './services/map.service';

@Module({
  imports: [HttpModule],
  controllers: [DroneController],
  providers: [DroneService, MapService],
})
export class AppModule {}
