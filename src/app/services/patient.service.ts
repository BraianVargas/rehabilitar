import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  idPaciente!: number;
  dni: string = '';

  loginURL = 'http://vctest.dyndns.org:8081/'

  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
    ) { }

  public getData(): string {
    const data = JSON.stringify({
      'paciente': this.idPaciente,
      'DNI': this.dni
    });

    return data
  }

  public setData(idPaciente: number, dni: string): void {
    this.idPaciente = idPaciente;
    this.dni = dni;
  }

  public searchByDNI( dni: string ): Observable<any> {

    const token = this.tokenService.getToken();
    const data = JSON.stringify({
      'token': token
    })

    console.log(data)

    return this.httpClient.post<any>(this.loginURL + `/pacientes/dni/${dni}`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  public seachById( id: number ): Observable<any> {

    const token = this.tokenService.getToken();
    const data = JSON.stringify({
      'token': token
    });
    console.log(data);
    

    return this.httpClient.post<any>(`/pacientes/${id}`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  public searchAll() {}

  public newPatient( patient: Patient ) {}
}
