import { Observable } from 'rxjs';
import { IClient } from 'src/api/interfaces/client.interface';

export interface ClientServicePort {
  getClients(): Observable<IClient[]>;
}
