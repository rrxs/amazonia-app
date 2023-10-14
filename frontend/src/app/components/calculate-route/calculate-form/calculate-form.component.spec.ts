import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateFormComponent } from './calculate-form.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('CalculateFormComponent', () => {
  let component: CalculateFormComponent;
  let fixture: ComponentFixture<CalculateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculateFormComponent],
      imports: [ReactiveFormsModule],
    });
    fixture = TestBed.createComponent(CalculateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid with empty values', () => {
    component.calculateForm.setValue({
      startingPosition: '',
      objectPosition: '',
      destinationPosition: '',
    });

    expect(component.calculateForm.valid).toEqual(false);
  });

  it('should be invalid with invalid values', () => {
    component.calculateForm.setValue({
      startingPosition: 'D2',
      objectPosition: 'H4',
      destinationPosition: 'U3',
    });

    expect(component.calculateForm.valid).toEqual(false);
  });

  it('should be valid with valid values', () => {
    component.calculateForm.setValue({
      startingPosition: 'D2',
      objectPosition: 'H4',
      destinationPosition: 'D3',
    });

    expect(component.calculateForm.valid).toEqual(true);
  });
});
