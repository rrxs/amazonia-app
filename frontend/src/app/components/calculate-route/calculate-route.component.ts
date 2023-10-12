import { Component } from '@angular/core';
import { CalculationForm } from 'src/app/models/calculation-form.model';
import { DroneCalculationResponse } from 'src/app/models/drone.model';
import { DroneService } from 'src/app/services/drone.service';

@Component({
  selector: 'app-calculate-route',
  templateUrl: './calculate-route.component.html',
})
export class CalculateRouteComponent {
  constructor(private droneService: DroneService) {}

  hasError = false;
  isLoading = false;
  result: DroneCalculationResponse | undefined;

  calculate(formData: CalculationForm) {
    this.hasError = false;
    this.isLoading = true;

    this.droneService
      .calculateRoute({
        startPoint: formData.startingPosition,
        destinationPoint: formData.destinationPosition,
        objectPoint: formData.objectPosition,
      })
      .subscribe({
        next: (response) => {
          this.result = response;
        },
        error: () => (this.hasError = true),
        complete: () => (this.isLoading = false),
      });
  }
}
