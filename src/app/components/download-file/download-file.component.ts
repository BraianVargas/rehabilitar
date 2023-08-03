import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { windowWhen } from 'rxjs';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-download-file',
  templateUrl: './download-file.component.html',
  styleUrls: ['./download-file.component.css']
})

export class DownloadFileComponent {

  constructor(
    private reportService: ReportService
  ) {}
  
  



  downloadFile( event: any ): void {
    const fileToken: string = this.reportService.getFileToken();

    this.reportService.downloadFile( fileToken ).subscribe({
      next: (data: any) => {
        // const blob = data.body;
        // const link = document.createElement('a');
        // link.href = window.URL.createObjectURL(blob!);
        // link.download = fileToken

        const blob = new Blob([data.body], { type: 'application/pdf' });
        const downloadUrl = window.URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = downloadUrl;
        // link.download = 'archivo.pdf';
        link.download = fileToken + '.pdf';
        link.click();

        window.URL.revokeObjectURL(downloadUrl);

        console.log( data );
        
      },
      error: (err: HttpErrorResponse) => {
        console.log( 'Error al descargar el archivo: ', err.message );
        
      },
      complete: () => {
        console.log('downloadFile() completado');
        
      }
    });  
  }
}
