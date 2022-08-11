import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';
import { getClients } from 'src/mocks/fixtures/client';
import { ClientServicePort } from './client.port';

@Injectable({
  providedIn: 'root',
})
export class ClientServiceMock implements ClientServicePort {
  constructor() {}

  getClients() {
    return of(getClients()).pipe(delay(200));
  }
}
