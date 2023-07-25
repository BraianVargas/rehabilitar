import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Empresas } from 'src/app/models/empresa';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-info-empresas',
  templateUrl: './info-empresas.component.html',
  styleUrls: ['./info-empresas.component.css']
})
export class InfoEmpresasComponent {
  empresa = new Empresas('','','','','','',0);
  id: number = 0;
  cuit: string = '';
  info: boolean = false;

  constructor(
    private companyService: CompanyService
  ) {}

  buscarEmpId( buscarEmpId: NgForm ) {
    this.id = buscarEmpId.value.id;

    this.companyService.searchById(this.id).subscribe(
      data => {
        console.log(data);

        this.empresa = data.data.listado[0]
        console.log('empresa: ', this.empresa);

        // this.showData();

        if (this.empresa == undefined) {
          console.log('UNDEFINED')
        } else {
          this.showData();
        }
        
        // if (data != null) {
        //   this.info = true;
        // }
      }
    );
  }

  buscarEmpCuit( buscarEmpCuit: NgForm ) {
    this.cuit = buscarEmpCuit.value.cuit;

    this.companyService.searchByCuit(this.cuit).subscribe(
      data => {
        console.log(data);

        this.empresa = data.data.listado[0]
        console.log('empresa: ', this.empresa);

        this.showData();
        
        
        // if (data != null) {
        //   this.info = true;
        // }
      }
    );
  }

  showData() {
    this.info = true;
  }
}
