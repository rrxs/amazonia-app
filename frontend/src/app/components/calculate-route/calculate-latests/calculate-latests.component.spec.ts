import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateLatestsComponent } from './calculate-latests.component';

describe('CalculateLatestsComponent', () => {
  let component: CalculateLatestsComponent;
  let fixture: ComponentFixture<CalculateLatestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculateLatestsComponent]
    });
    fixture = TestBed.createComponent(CalculateLatestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
