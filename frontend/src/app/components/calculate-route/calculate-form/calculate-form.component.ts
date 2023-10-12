import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CalculationForm } from 'src/app/models/calculation-form.model';

@Component({
  selector: 'app-calculate-form',
  templateUrl: './calculate-form.component.html',
})
export class CalculateFormComponent {
  calculateFrom = new FormGroup({
    startingPosition: new FormControl(''),
    objectPosition: new FormControl(''),
    destinationPosition: new FormControl(''),
  });

  @Input() isLoading = false;
  @Output() onFormSubmit = new EventEmitter<CalculationForm>();

  onSubmit() {
    this.onFormSubmit.emit(this.calculateFrom.value as CalculationForm);
  }
}
