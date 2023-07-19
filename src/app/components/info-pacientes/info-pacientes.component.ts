import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Patient } from 'src/app/models/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-info-pacientes',
  templateUrl: './info-pacientes.component.html',
  styleUrls: ['./info-pacientes.component.css']
})
export class InfoPacientesComponent {
  paciente = new Patient('','','','','',0,'','');
  dni:string = '';
  id: number = 3;

  constructor(
    private patientService: PatientService
  ) {}

  buscarPacDNI( buscarPacDNI: NgForm ) {
    this.dni = buscarPacDNI.value.dni;
    // console.log('dni: ', this.dni);

    this.patientService.searchByDNI(this.dni).subscribe(
      data => {
        console.log(data);
      }
    )
  }

  buscarPacId() {
    this.patientService.seachById(this.id).subscribe(
      data => {
        console.log(data);
      }
    )
  }
}
