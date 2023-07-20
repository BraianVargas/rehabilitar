import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  loginURL = 'http://vctest.dyndns.org:8081/'

  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
    ) { }

  public searchByDNI( dni: string ): Observable<any> {

    const token = this.tokenService.getToken();
    const data = JSON.stringify({
      'token': token
    })

    console.log(data)

    return this.httpClient.post<any>(this.loginURL + `/pacientes/DNI/${dni}`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  public seachById( id: number ): Observable<any> {

    const token = this.tokenService.getToken();
    const data = JSON.stringify({
      'token': token
    })

    console.log(data);
    

    return this.httpClient.post<any>(`/pacientes/${id}`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  public toList() {}

  public newPatient( patient: Patient ) {}
}
