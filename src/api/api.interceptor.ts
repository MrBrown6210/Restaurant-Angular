import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:3000';

@Injectable()
export class APIInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const apiReq = req.clone({ url: `${API_URL}/${req.url}` });
    console.log('heloooo');
    return next.handle(apiReq);
  }
}
