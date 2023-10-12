import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateResultComponent } from './calculate-result.component';

describe('CalculateResultComponent', () => {
  let component: CalculateResultComponent;
  let fixture: ComponentFixture<CalculateResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculateResultComponent]
    });
    fixture = TestBed.createComponent(CalculateResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
