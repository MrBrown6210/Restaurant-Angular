import { Observable } from 'rxjs';

import { ILoginResponse } from 'src/api/interfaces/auth.interface';

export interface AuthServicePort {
  login(email: string, password: string): Observable<ILoginResponse>;
}
