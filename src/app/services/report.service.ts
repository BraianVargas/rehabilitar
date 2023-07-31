import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PatientService } from './patient.service';
import { CompanyService } from './company.service';
import { TokenService } from './token.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  public archivo: any;

  constructor(
    private httpClient: HttpClient,
    private patientService: PatientService,
    private companyService: CompanyService,
    private tokenService: TokenService
  ) { }

  public setArchivo( archivo: any ) {
    this.archivo = archivo;
  }

  public uploadFile( formData: FormData ): Observable<any> {
    // const data = JSON.stringify({
    //   'token': this.tokenService.getToken(),
    //   'data': {
    //     'paciente': this.patientService.getIdPaciente(),
    //     'DNI': this.patientService.getDniPaciente(),
    //     'empresa': this.companyService.getIdEmpresa()
    //   }
    // });

    // const formData = new FormData();
    // formData.append

    // console.log( data );

    return this.httpClient.post<FormData>('/fileUpload', formData);
  }

  // public uploadFile(): Observable<any> {
  //   const data = JSON.stringify({
  //     'token': this.tokenService.getToken(),
  //     'data': {
  //       'paciente': this.patientService.getIdPaciente(),
  //       'DNI': this.patientService.getDniPaciente(),
  //       'empresa': this.companyService.getIdEmpresa()
  //     }
  //   });

  //   // console.log( this.archivo );
    

  //   const formData = new FormData();
  //   formData.append('document', this.archivo);
  //   // formData.append('json', data);
    

  //   // return this.httpClient.post('/fileUpload', formData, {
  //   //   headers: {
  //   //     'Content-Type': 'multipart/form-data'
  //   //   }
  //   // });
  //   return this.httpClient.post<FormData>('/fileUpload', formData);
  // }

  public getFile() {}
}
