import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Empresa } from 'src/app/models/empresa';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-info-empresas',
  templateUrl: './info-empresas.component.html',
  styleUrls: ['./info-empresas.component.css']
})
export class InfoEmpresasComponent {
  empresa = new Empresa('','','','','','',0);
  id: number = 0;
  cuit: string = '';
  info: number = -1;

  constructor(
    private companyService: CompanyService
  ) {}

  buscarEmpCuit( buscarEmpCuit: NgForm ) {
    this.cuit = buscarEmpCuit.value.cuit;

    this.companyService.searchByCuit(this.cuit).subscribe(
      data => {
        this.empresa = data.data.listado[0]
        
        if (this.empresa === null){
          this.showData(-1);
        }else{
          if(this.empresa === undefined){
            this.showData(1);
          }else{
            this.showData(0);
            this.companyService.setData( this.empresa.id );
          }
        }
      }
    );
  }

  showData(value: number) {
    this.info = value;
  }
}

