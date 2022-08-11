import { TestBed } from '@angular/core/testing';

import { ClientServiceMock } from './client.service.mock';

describe('ClientServiceMock', () => {
  let service: ClientServiceMock;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientServiceMock);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
