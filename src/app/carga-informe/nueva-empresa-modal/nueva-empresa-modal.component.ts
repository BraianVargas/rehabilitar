import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subscribable } from 'rxjs';
import { Empresa } from 'src/app/models/empresa';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-nueva-empresa-modal',
  templateUrl: './nueva-empresa-modal.component.html',
  styleUrls: ['./nueva-empresa-modal.component.css']
})
export class NuevaEmpresaModalComponent {
  empresa = new Empresa('', '', '', '', '', '', 0);
  constructor(
    private companyService: CompanyService,
    private toastr: ToastrService
  ) {}

  nuevaEmpresa( nuevaEmpresaForm: NgForm ) {
    console.log('NUEVA EMPRESA MODAL');
    this.empresa = nuevaEmpresaForm.form.value;

    console.log( this.empresa );
    
    this.companyService.newCompany( this.empresa ).subscribe(
      {
        next: (data: String) => {
          // Devolver data y recargar con los datos.
          
          this.toastr.success(
            'Empresa cargada con éxito',
            'Listo!'
          );
        },
        error:()=>{
          this.toastr.error(
            'No se pudo cargar la empresa',
            'Algo salió mal!'
          );
        }
      }
    );

  }
}