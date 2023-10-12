import { Component, Input } from '@angular/core';
import { CalculationResult } from 'src/app/models/calculation-result.model';

@Component({
  selector: 'app-calculate-result',
  templateUrl: './calculate-result.component.html',
})
export class CalculateResultComponent {
  @Input() calculationResult: CalculationResult | undefined;
  @Input() hasError = false;
  @Input() isLoading = false;
}
