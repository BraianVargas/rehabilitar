import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private tokenService: TokenService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.tokenService.getToken();

    if (token != null && req.method === 'POST') {
      // console.log('Token obtenido:', token);
      // console.log(req.body[0]);
      
      const data = JSON.parse(req.body) // Convierte el texto obtenido en el request a JSON.

      // Clonar la solicitud y agregar el token al cuerpo
      const modifiedReq = req.clone({
        setHeaders: { 'Content-Type': 'application/json' }, // Indicar el tipo de contenido JSON
        body: ({ data: data['data'], token: token}) // Agregar el token al cuerpo de la solicitud, se puede cambiar el orden. 
      });
      
      console.log(modifiedReq);
      
      console.log("next: " + next.handle(modifiedReq));
      
      return next.handle(modifiedReq);
    }

    return next.handle(req);
  }
}

export const interceptorProvider = { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true };
