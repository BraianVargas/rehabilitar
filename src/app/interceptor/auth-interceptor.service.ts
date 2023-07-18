import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private tokenService: TokenService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('1', req);

    const token = this.tokenService.getToken();
    const reqBody = req.body;
    console.log('2', reqBody)
    const newBody = JSON.stringify({ 'token': token, reqBody });
    // const newBody = JSON.parse( 'token:' + token );
    console.log('3', newBody)

    // const dict = JSON.parse(reqBody);
    // console.log('!!', dict);

    if (token != null) {
      req = req.clone({ body: req.body.set('token' + token, reqBody) });
      console.log('4', req);
    }

    return next.handle(req)
  }
}

export const interceptorProvider = [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}]

// AÑADIR interceptorProvider EN APPMODULE