import { Component, OnDestroy } from '@angular/core';
import { Subscription, finalize } from 'rxjs';
import { CalculationFormModel } from 'src/app/models/calculation-form.model';
import { CalculationResultModel } from 'src/app/models/calculation-result.model';
import { DroneService } from 'src/app/services/drone.service';

@Component({
  selector: 'app-calculate-route',
  templateUrl: './calculate-route.component.html',
})
export class CalculateRouteComponent implements OnDestroy {
  constructor(private droneService: DroneService) {}

  hasError = false;
  isLoading = false;
  calculationResult: CalculationResultModel | undefined;
  private calculateSubscribe: Subscription | undefined;

  calculate(formData: CalculationFormModel) {
    this.hasError = false;
    this.isLoading = true;

    this.calculateSubscribe = this.droneService
      .calculateRoute({
        startPoint: formData.startingPosition,
        destinationPoint: formData.destinationPosition,
        objectPoint: formData.objectPosition,
      })
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: (response) => {
          this.calculationResult = {
            path: response.path,
            totalSeconds: response.totalSeconds,
            startPoint: formData.startingPosition,
            objectPoint: formData.objectPosition,
            destinationPoint: formData.destinationPosition,
          };
          this.droneService.storeResult({
            origin: formData.startingPosition,
            object: formData.objectPosition,
            destination: formData.destinationPosition,
            totalSeconds: response.totalSeconds,
            date: new Date(),
          });
        },
        error: () => {
          this.hasError = true;
          this.calculationResult = undefined;
        },
      });
  }

  ngOnDestroy(): void {
    this.calculateSubscribe?.unsubscribe();
  }
}
