import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CalculationStorageModel } from 'src/app/models/calculation-storage.model';
import { DroneService } from 'src/app/services/drone.service';

@Component({
  selector: 'app-calculate-latests',
  templateUrl: './calculate-latests.component.html',
})
export class CalculateLatestsComponent implements OnInit, OnDestroy {
  constructor(private droneService: DroneService) {}

  resultList: CalculationStorageModel[] | undefined;
  private watchSubscribe: Subscription | undefined;

  ngOnInit() {
    this.resultList = this.droneService.getResultsList();
    this.watchSubscribe = this.droneService
      .watchResults()
      .subscribe((result) => {
        this.resultList?.unshift(result);
      });
  }

  ngOnDestroy(): void {
    this.watchSubscribe?.unsubscribe();
  }
}
