import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateRouteComponent } from './calculate-route.component';

describe('CalculateRouteComponent', () => {
  let component: CalculateRouteComponent;
  let fixture: ComponentFixture<CalculateRouteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculateRouteComponent]
    });
    fixture = TestBed.createComponent(CalculateRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
