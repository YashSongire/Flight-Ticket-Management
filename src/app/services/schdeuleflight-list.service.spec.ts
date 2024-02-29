import { TestBed } from '@angular/core/testing';

import { SchdeuleflightListService } from './schdeuleflight-list.service';

describe('SchdeuleflightListService', () => {
  let service: SchdeuleflightListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchdeuleflightListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
