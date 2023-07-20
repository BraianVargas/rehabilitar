import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  thereIsCompany: boolean = false;

  constructor(
    private httpClient: HttpClient,
    private token: TokenService
  ) { }

  public setCompany() {
    this.thereIsCompany = true;
  }

  public searchById( id: number ): Observable<any> {
    const token = this.token.getToken();
    const data = JSON.stringify({
      'token': token
    });
    console.log(data);

    return this.httpClient.post<any>(`/empresas/${id}`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  public searchByCuit( cuit: string ): Observable<any> {
    const token = this.token.getToken();
    const data = JSON.stringify({
      'token': token
    });
    console.log(data);

    return this.httpClient.post<any>(`/empresas/cuit/${cuit}`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  public searchAll() {}

  public newCompany() {}
}
