import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateLatestsComponent } from './calculate-latests.component';
import { DroneService } from 'src/app/services/drone.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

const fakeDroneService = {
  calculateRoute: jasmine.createSpy('calculateRoute'),
  watchResults: jasmine.createSpy('watchResults').and.returnValue(of({})),
  getResultsList: jasmine.createSpy('getResultsList'),
  storeResult: jasmine.createSpy('storeResult'),
};

describe('CalculateLatestsComponent', () => {
  let component: CalculateLatestsComponent;
  let fixture: ComponentFixture<CalculateLatestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculateLatestsComponent],
      providers: [{ provide: DroneService, useValue: fakeDroneService }],
    });
    fixture = TestBed.createComponent(CalculateLatestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render results correctly', () => {
    let resultItems = fixture.debugElement.queryAll(
      By.css('[data-testid="result-item"]')
    );

    expect(resultItems.length).toBe(0);

    component.resultList = [
      {
        totalSeconds: '',
        date: new Date(),
        destination: '',
        object: '',
        origin: '',
      },
    ];
    fixture.detectChanges();

    resultItems = fixture.debugElement.queryAll(
      By.css('[data-testid="result-item"]')
    );

    expect(resultItems.length).toBe(1);
  });
});
