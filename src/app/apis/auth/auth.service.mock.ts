import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { ILoginResponse } from 'src/api/interfaces/auth.interface';
import { getClients } from 'src/mocks/fixtures/client';
import { AuthServicePort } from './auth.port';

const EXAMPLE_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
@Injectable({
  providedIn: 'root',
})
export class AuthServiceMock implements AuthServicePort {
  constructor() {}
  login(email: string, password: string): Observable<ILoginResponse> {
    return of({ token: EXAMPLE_TOKEN }).pipe(delay(500));
  }
}
