import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { LoginUser } from '../models/login-user';
import { Token } from '../models/token';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // loginURL = 'http://vctest.dyndns.org:8081/'

  isLogged: boolean = false;

  constructor(private httpClient: HttpClient) { }

  public login(loginUser: LoginUser): Observable<Token> {

    const data = JSON.stringify({
      'data': loginUser
    })

    // console.log( loginUser )
    // console.log(data)

    return this.httpClient.post<Token>('/login', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  inLogin() {
    this.isLogged = true;
  }
  
}
