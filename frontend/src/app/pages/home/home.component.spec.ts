import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  template: '',
})
class FakeHeroComponent {}
@Component({
  selector: 'app-customers',
  template: '',
})
class FakeCustomersComponent {}
@Component({
  selector: 'app-calculate-route',
  template: '',
})
class FakeCalculateRouteComponent {}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        FakeHeroComponent,
        FakeCustomersComponent,
        FakeCalculateRouteComponent,
      ],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
