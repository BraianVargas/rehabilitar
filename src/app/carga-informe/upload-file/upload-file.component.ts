import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CompanyService } from 'src/app/services/company.service';
import { PatientService } from 'src/app/services/patient.service';
import { ReportService } from 'src/app/services/report.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent {
  // info: boolean = false;
  // public archivos: any = [];
  // public archivo: any;

  public files!: FileList | null;

  myForm!: FormGroup;
  uploadComplete = false;
  downloadFileLink = '';

  constructor(
    private companyService: CompanyService,
    private reportService: ReportService,
    private fb: FormBuilder,
    private patientService: PatientService,
    private tokenService: TokenService
  ) {}

  ngOnInit() {
  }

  captureFile( event: any ) {
    const document2 = event.target as HTMLInputElement;

    this.files = document2.files;
  }

  uploadFile() {
    const data = JSON.stringify({
      'token': this.tokenService.getToken(),
      'data': {
        'paciente': this.patientService.getIdPaciente(),
        'DNI': this.patientService.getDniPaciente(),
        'empresa': this.companyService.getIdEmpresa()
      }
    });

    const formData2 = new FormData();

    Array.prototype.forEach.call( this.files, (file: File) => {
      formData2.append('document', file);
    } );

    formData2.append('json', data);

    this.reportService.uploadFile(formData2).subscribe({
      next: (data) => {
        this.reportService.setFileToken( data['data']['fileToken'] )
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
      complete: () => {
        this.downloadFileLink = 'http://vctest.dyndns.org:8081/informes/' + this.reportService.getFileToken();
        this.uploadComplete = true;
      }
    });
  }

  
  copiarTexto(): void {
    const fileLink = document.getElementById('fileLink') as HTMLInputElement;
    
    if (fileLink) {
      fileLink.select();
      document.execCommand('copy');
    }
  }
}