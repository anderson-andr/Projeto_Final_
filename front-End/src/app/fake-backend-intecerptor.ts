import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Servico } from './servicos/model/servico';

export const FAKE_JWT_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNTA1MDg5M2VhYmIxOGZhYzg1NjY5ZiIsImlhdCI6MTY2NzEwMzM4MiwiZXhwIjoxNjY3MTA2OTgyfQ.Sgj8WQ1xV6aBUENY29vK4geA55cAZMYo5eVRvnJul10';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const { url, method, headers } = request;
    if (url.endsWith('login') && method === 'POST') {
      return handleLogin();
    }

    return next.handle(request);

    function isLoggedIn() {
      return headers.get('authorization') === FAKE_JWT_TOKEN;
    }

    function handleLogin(): Observable<HttpEvent<unknown>> {
      return of(
        new HttpResponse({
          status: 200,
          body: {
            id: '1',
            username: 'profanis',
            token: FAKE_JWT_TOKEN,
          },
        })
      );
    }

  }
}

export const FakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true,
};
