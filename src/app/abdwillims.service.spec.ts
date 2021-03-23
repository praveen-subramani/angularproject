import { TestBed } from '@angular/core/testing';

import { AbdwillimsService } from './abdwillims.service';

describe('AbdwillimsService', () => {
  let service: AbdwillimsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbdwillimsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
