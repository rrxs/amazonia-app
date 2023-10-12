import { Component } from '@angular/core';
import { finalize } from 'rxjs';
import { CalculationForm } from 'src/app/models/calculation-form.model';
import { CalculationResult } from 'src/app/models/calculation-result.model';
import { DroneService } from 'src/app/services/drone.service';

@Component({
  selector: 'app-calculate-route',
  templateUrl: './calculate-route.component.html',
})
export class CalculateRouteComponent {
  constructor(private droneService: DroneService) {}

  hasError = false;
  isLoading = false;
  calculationResult: CalculationResult | undefined;

  calculate(formData: CalculationForm) {
    this.hasError = false;
    this.isLoading = true;

    this.droneService
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
        },
        error: () => {
          this.hasError = true;
          this.calculationResult = undefined;
        },
      });
  }
}
