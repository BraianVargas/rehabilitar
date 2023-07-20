import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Patient } from 'src/app/models/patient';
import { PatientService } from 'src/app/services/patient.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-info-pacientes',
  templateUrl: './info-pacientes.component.html',
  styleUrls: ['./info-pacientes.component.css']
})
export class InfoPacientesComponent {
  paciente = new Patient('','','','','',0,'','');
  dni:string = '';
  id!: number;
  info: boolean = false;

  constructor(
    private token: TokenService,
    private patientService: PatientService,
    private router: Router
  ) {}

  ngOnInit() {
    // if (!this.token.getToken()) {
    //   this.router.navigate([ '/login' ])
    // }
  }

  buscarPacDNI( buscarPacDNI: NgForm ) {
    this.dni = buscarPacDNI.value.dni;
    // console.log('dni: ', this.dni);

    this.patientService.searchByDNI(this.dni).subscribe(
      data => {
        this.paciente = data.data.listado[0];
        console.log('paciente: ', this.paciente)
        this.showData();
      }
    )
  }

  buscarPacId( buscarPacId: NgForm ) {
    this.id = buscarPacId.value.id;
    // this.paciente = buscarPacId.value;

    console.log('buscarPacId', buscarPacId.value);
    
    this.patientService.seachById(this.id).subscribe(
      data => {
        console.log('data: ', data);


        this.paciente = data.data.listado[0];
        console.log('paciente: ', this.paciente)
        
        this.showData();

        // if (data != null) {
        //   this.info = true;
        // }
      },
      // err => {
      //   console.error( err );
        
      //   this.router.navigate([ '/login' ])
      // }
    )
  }

  showData() {
    this.info = true;
  }
}
