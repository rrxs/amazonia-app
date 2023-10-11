import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateFormComponent } from './calculate-form.component';

describe('CalculateFormComponent', () => {
  let component: CalculateFormComponent;
  let fixture: ComponentFixture<CalculateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculateFormComponent]
    });
    fixture = TestBed.createComponent(CalculateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
