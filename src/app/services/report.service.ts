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

  public fileUpload() {}

  public getFile() {}
}
