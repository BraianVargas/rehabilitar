import { Component } from '@angular/core';
import { Empresas } from 'src/app/models/empresa';

@Component({
  selector: 'app-info-empresas',
  templateUrl: './info-empresas.component.html',
  styleUrls: ['./info-empresas.component.css']
})
export class InfoEmpresasComponent {
  empresa = new Empresas('','','','','','',0);
}
