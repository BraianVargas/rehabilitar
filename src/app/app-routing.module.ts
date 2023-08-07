import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { IndexComponent } from './carga-informe/index/index.component';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ) },
  { path: 'home', loadChildren: () => import('./carga-informe/carga-informe.module').then( m => m.CargaInformeModule ) },
  { path: '**', redirectTo: 'auth' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
