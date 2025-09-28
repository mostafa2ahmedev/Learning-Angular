import { TestBed } from '@angular/core/testing';

import { Staticproducts } from './staticproducts';

describe('Staticproducts', () => {
  let service: Staticproducts;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Staticproducts);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
