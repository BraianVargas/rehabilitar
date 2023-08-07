import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CargaInformeRoutingModule } from './carga-informe-routing.module';
import { IndexComponent } from './index/index.component';
import { DownloadFileComponent } from './download-file/download-file.component';
import { InfoEmpresasComponent } from './info-empresas/info-empresas.component';
import { InfoPacientesComponent } from './info-pacientes/info-pacientes.component';
import { NuevaEmpresaModalComponent } from './nueva-empresa-modal/nueva-empresa-modal.component';
import { NuevoPacienteModalComponent } from './nuevo-paciente-modal/nuevo-paciente-modal.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    IndexComponent,
    DownloadFileComponent,
    InfoEmpresasComponent,
    InfoPacientesComponent,
    NuevaEmpresaModalComponent,
    NuevoPacienteModalComponent,
    UploadFileComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    CargaInformeRoutingModule
  ]
})
export class CargaInformeModule { }
