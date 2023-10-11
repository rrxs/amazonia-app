import { Module } from '@nestjs/common';
import { DroneService } from './services/drone.service';
import { HttpModule } from '@nestjs/axios';
import { DroneController } from './controllers/drone.controller';

@Module({
  imports: [HttpModule],
  controllers: [DroneController],
  providers: [DroneService],
})
export class AppModule {}
