import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './index/index.component';
import { InfoEmpresasComponent } from './info-empresas/info-empresas.component';
import { NuevaEmpresaModalComponent } from './nueva-empresa-modal/nueva-empresa-modal.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { DownloadFileComponent } from './download-file/download-file.component';
import { InfoPacientesComponent } from './info-pacientes/info-pacientes.component';
import { NuevoPacienteModalComponent } from './nuevo-paciente-modal/nuevo-paciente-modal.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IndexComponent,
    InfoEmpresasComponent,
    NuevaEmpresaModalComponent,
    UploadFileComponent,
    DownloadFileComponent,
    InfoPacientesComponent,
    NuevoPacienteModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
