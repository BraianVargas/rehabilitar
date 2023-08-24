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

  public getIdPaciente(): string {
    // const data = JSON.stringify({
    // //   'paciente': this.idPaciente,
    // //   'DNI': this.dni
    // // });

    // const data = String(this.idPaciente) + ',\n' + this.dni;

    // // convertir idPaciente a string

    return String(this.idPaciente)
  }

  public getDniPaciente(): string {
    return this.dni
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

    console.log('serachByDNI', data)

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

  public newPatient( paciente: Patient ) {
    const token = this.tokenService.getToken();
    const data = JSON.stringify({
      'token': token,
      'data': paciente
    });

    console.log( data );
    
    return this.httpClient.post<any>('/pacientes/new', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}