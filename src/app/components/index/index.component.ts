import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  dni:string = '';

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
}
