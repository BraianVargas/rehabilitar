import { Component } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent {
  // info: boolean = false;

  constructor(
    private companyService: CompanyService,
    private reportService: ReportService
  ) {}

  ngOnInit() {
    // this.info = this.companyService.thereIsCompany;
  }

  subirArchivo() {
    this.reportService.fileUpload();
  }
}