import { HttpClient } from '@angular/common/http';
import { Injectable, resolveForwardRef } from '@angular/core';
import {
  DroneCalculationRequest,
  DroneCalculationResponse,
} from '../models/drone.model';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiRoutes } from '../utils/api-routes';
import { CalculationStorageModel } from '../models/calculation-storage.model';

@Injectable()
export class DroneService {
  constructor(private http: HttpClient) {}

  private resultStorageSub = new Subject<CalculationStorageModel>();
  private resultKey = 'calculationResults';

  calculateRoute(
    params: DroneCalculationRequest
  ): Observable<DroneCalculationResponse> {
    params.destinationPoint = params.destinationPoint.toUpperCase();
    params.objectPoint = params.objectPoint.toUpperCase();
    params.startPoint = params.startPoint.toUpperCase();

    return this.http.post<DroneCalculationResponse>(
      `${environment.baseUrl}${ApiRoutes.DRONE_CALCULATE_ROUTE}`,
      params
    );
  }

  watchResults(): Observable<CalculationStorageModel> {
    return this.resultStorageSub.asObservable();
  }

  getResultsList(): CalculationStorageModel[] {
    const resultsFromStorage = localStorage.getItem(this.resultKey);
    if (resultsFromStorage) {
      return JSON.parse(resultsFromStorage);
    }
    return [];
  }

  storeResult(result: CalculationStorageModel) {
    const savedResults = this.getResultsList();
    localStorage.setItem(
      this.resultKey,
      JSON.stringify([result, ...savedResults])
    );
    this.resultStorageSub.next(result);
  }
}
