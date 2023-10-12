import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  DroneCalculationRequest,
  DroneCalculationResponse,
} from '../models/drone.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiRoutes } from '../utils/api-routes';

@Injectable()
export class DroneService {
  constructor(private http: HttpClient) {}

  calculateRoute(
    params: DroneCalculationRequest
  ): Observable<DroneCalculationResponse> {
    return this.http.post<DroneCalculationResponse>(
      `${environment.baseUrl}${ApiRoutes.DRONE_CALCULATE_ROUTE}`,
      params
    );
  }
}
