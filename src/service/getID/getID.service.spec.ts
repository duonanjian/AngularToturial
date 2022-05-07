import { GetIDService } from './getID.service';
import { TestBed, async, inject } from '@angular/core/testing';
describe('Service: Modal', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetIDService],
    });
  });

  it('should ...', inject([GetIDService], (service: GetIDService) => {
    expect(service).toBeTruthy();
  }));
});
