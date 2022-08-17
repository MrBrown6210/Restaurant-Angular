import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { ILoginResponse } from 'src/api/interfaces/auth.interface';
import { getClients } from 'src/mocks/fixtures/client';
import { AuthServicePort } from './auth.port';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceMock implements AuthServicePort {
  constructor() {}
  login(email: string, password: string): Observable<ILoginResponse> {
    return of({ token: 'hello' }).pipe(delay(500));
  }
}
