import { DroneService } from './drone.service';
import { HttpClient } from '@angular/common/http';

describe('DroneService', () => {
  let service: DroneService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new DroneService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
