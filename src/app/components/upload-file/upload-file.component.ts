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

  constructor(
    private companyService: CompanyService,
    private reportService: ReportService,
    private fb: FormBuilder,
    private patientService: PatientService,
    private tokenService: TokenService
  ) {}

  ngOnInit() {
    // this.info = this.companyService.thereIsCompany;

    // this.myForm = this.fb.nonNullable.group({
    //   file: this.fb.nonNullable.group
    // });
  }

  // subirArchivo() {
  //   this.reportService.fileUpload();
  // }

  captureFile( event: any ) {
    // const data = JSON.stringify({
    //   'token': this.tokenService.getToken(),
    //   'data': {
    //     'paciente': this.patientService.getIdPaciente(),
    //     'DNI': this.patientService.getDniPaciente(),
    //     'empresa': this.companyService.getIdEmpresa()
    //   }
    // });

    // const document = event.target.files[0];
    const document2 = event.target as HTMLInputElement;

    this.files = document2.files;

    // if( files!.length > 0 && files != null ) {
    //   const formData2 = new FormData();

    //   Array.prototype.forEach.call( files, (file: File) => {
    //     formData2.append('document', file);
    //   } );

    //   formData2.append('json', data);

    //   this.reportService.fileUpload(formData2).subscribe({
    //     next: (data) => {
    //       console.log(data);
          
    //     },
    //     error: (err: HttpErrorResponse) => {
    //       console.log(err);
          
    //     },
    //     complete: () => {
    //       console.log('Se completó la tarea');
          
    //     }
    //   });
    // }
    
    // console.log( event.target.files );

    // // this.archivos.push(document);
    // this.archivo = document;
    // this.reportService.setArchivo( document );
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

    console.log(this.files);
    console.log('-----------------------');
    
    console.log(data);
    

    this.reportService.uploadFile(formData2).subscribe({
      next: (data) => {
        console.log(data['data']['fileToken']);
        this.reportService.setFileToken( data['data']['fileToken'] )
        
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
        
      },
      complete: () => {
        console.log('Se completó la tarea');
        
      }
    });
  }
}