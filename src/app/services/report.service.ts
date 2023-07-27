import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PatientService } from './patient.service';
import { CompanyService } from './company.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(
    private httpClient: HttpClient,
    private patientService: PatientService,
    private companyService: CompanyService,
    private tokenService: TokenService
  ) { }

  public fileUpload() {
    const data = JSON.stringify({
      'token': this.tokenService.getToken(),
      'data': {
        'paciente': this.patientService.getIdPaciente(),
        'DNI': this.patientService.getDniPaciente(),
        'empresa': this.companyService.getIdEmpresa()
      }
    });

    console.log( data );
  }

  public getFile() {}
}
