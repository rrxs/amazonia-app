import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CalculationFormModel } from 'src/app/models/calculation-form.model';
import { Patterns } from 'src/app/utils/patterns';

@Component({
  selector: 'app-calculate-form',
  templateUrl: './calculate-form.component.html',
})
export class CalculateFormComponent {
  calculateForm = new FormGroup({
    startingPosition: new FormControl('', [
      Validators.required,
      Validators.pattern(Patterns.Position),
    ]),
    objectPosition: new FormControl('', [
      Validators.required,
      Validators.pattern(Patterns.Position),
    ]),
    destinationPosition: new FormControl('', [
      Validators.required,
      Validators.pattern(Patterns.Position),
    ]),
  });

  @Input() isLoading = false;
  @Output() onFormSubmit = new EventEmitter<CalculationFormModel>();

  onSubmit() {
    this.onFormSubmit.emit(this.calculateForm.value as CalculationFormModel);
  }

  get startingPosition() {
    return this.calculateForm.get('startingPosition');
  }
  get objectPosition() {
    return this.calculateForm.get('objectPosition');
  }
  get destinationPosition() {
    return this.calculateForm.get('destinationPosition');
  }
}
