import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import constants from '../utils/constants';
import { map, lastValueFrom } from 'rxjs';
import { MapOutput } from 'src/models/map.model';

@Injectable()
export class MapService {
  constructor(private readonly httpService: HttpService) {}

  getMap(): Promise<MapOutput> {
    const mapData = this.httpService.get<MapOutput>(constants.MOCKIO_URL).pipe(
      map((response) => {
        return response.data;
      }),
    );

    return lastValueFrom(mapData);
  }
}
