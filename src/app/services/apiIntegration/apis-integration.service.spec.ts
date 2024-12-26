import { TestBed } from '@angular/core/testing';

import { ApisIntegrationService } from './apis-integration.service';

describe('ApisIntegrationService', () => {
  let service: ApisIntegrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApisIntegrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
