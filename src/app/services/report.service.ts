import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PatientService } from './patient.service';
import { CompanyService } from './company.service';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(
    private httpClient: HttpClient,
    private patientService: PatientService,
    private companyService: CompanyService
  ) { }

  public fileUpload() {
    const data = JSON.stringify({
      'data': {
        'paciente': this.patientService.getData(),
        'empresa': this.companyService.getData()
      }
    });

    console.log( data );
  }

  public getFile() {}
}
