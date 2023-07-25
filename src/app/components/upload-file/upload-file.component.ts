import { Component } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent {
  // info: boolean = false;

  constructor(
    private companyService: CompanyService
  ) {}

  ngOnInit() {
    // this.info = this.companyService.thereIsCompany;
  }

  subirArchivo() {
    
  }
}