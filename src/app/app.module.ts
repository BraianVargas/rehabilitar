import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { NavbarComponent } from './templates/navbar/navbar.component';
import { IndexComponent } from './components/index/index.component';
import { interceptorProvider } from './interceptor/auth-interceptor.service';
import { NuevaEmpresaModalComponent } from './components/nueva-empresa-modal/nueva-empresa-modal.component';
import { InfoPacientesComponent } from './components/info-pacientes/info-pacientes.component';
import { InfoEmpresasComponent } from './components/info-empresas/info-empresas.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { DownloadFileComponent } from './components/download-file/download-file.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    IndexComponent,
    NuevaEmpresaModalComponent,
    InfoPacientesComponent,
    InfoEmpresasComponent,
    UploadFileComponent,
    DownloadFileComponent
  ],
  exports: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    IndexComponent,
    NuevaEmpresaModalComponent,
    InfoPacientesComponent,
    InfoEmpresasComponent,
    UploadFileComponent
  ],
  imports:[
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
