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

  constructor(private httpClient: HttpClient) { }

  public login(loginUser: LoginUser): Observable<Token> {
    return this.httpClient.post<Token>('/login', loginUser) // this.loginURL + 
  }
}
