import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateRouteComponent } from './calculate-route.component';
import { DroneService } from 'src/app/services/drone.service';
import { Component, Input } from '@angular/core';
import { CalculationFormModel } from 'src/app/models/calculation-form.model';
import { of, throwError } from 'rxjs';
import { DroneCalculationRequest } from 'src/app/models/drone.model';

@Component({
  selector: 'app-calculate-form',
})
class FakeCalculateFormComponent {
  @Input() isLoading = false;
}
@Component({
  selector: 'app-calculate-result',
})
class FakeCalculateResultComponent {
  @Input() isLoading = false;
  @Input() hasError = false;
  @Input() calculationResult = {};
}
@Component({
  selector: 'app-calculate-latests',
})
class FakeCalculateLatestsComponent {}

const fakeDroneService = {
  calculateRoute: jasmine.createSpy('calculateRoute'),
  watchResults: jasmine.createSpy('watchResults'),
  getResultsList: jasmine.createSpy('getResultsList'),
  storeResult: jasmine.createSpy('storeResult'),
};

const calculateForm: CalculationFormModel = {
  startingPosition: 'A1',
  objectPosition: 'A2',
  destinationPosition: 'A3',
};

describe('CalculateRouteComponent', () => {
  let component: CalculateRouteComponent;
  let fixture: ComponentFixture<CalculateRouteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CalculateRouteComponent,
        FakeCalculateFormComponent,
        FakeCalculateResultComponent,
        FakeCalculateLatestsComponent,
      ],
      providers: [{ provide: DroneService, useValue: fakeDroneService }],
    });
    fixture = TestBed.createComponent(CalculateRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show error if throws', () => {
    fakeDroneService.calculateRoute.and.returnValue(throwError(() => {}));

    component.calculate(calculateForm);
    fixture.detectChanges();

    expect(component.hasError).toBe(true);
  });

  it('should call calculate with correct params', () => {
    const calculateParams: DroneCalculationRequest = {
      startPoint: calculateForm.startingPosition,
      objectPoint: calculateForm.objectPosition,
      destinationPoint: calculateForm.destinationPosition,
    };
    const calculateServiceResponse = {
      path: 'A1-A2',
      totalSeconds: '1',
    };

    fakeDroneService.calculateRoute.and.returnValue(
      of(calculateServiceResponse)
    );

    component.calculate(calculateForm);
    fixture.detectChanges();

    expect(fakeDroneService.calculateRoute).toHaveBeenCalledWith(
      calculateParams
    );
    expect(fakeDroneService.storeResult).toHaveBeenCalled();
    expect(component.calculationResult).toEqual({
      path: calculateServiceResponse.path,
      totalSeconds: calculateServiceResponse.totalSeconds,
      startPoint: calculateForm.startingPosition,
      objectPoint: calculateForm.objectPosition,
      destinationPoint: calculateForm.destinationPosition,
    });
  });
});
