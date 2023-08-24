import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Empresa } from 'src/app/models/empresa';
import { Patient } from 'src/app/models/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-nuevo-paciente-modal',
  templateUrl: './nuevo-paciente-modal.component.html',
  styleUrls: ['./nuevo-paciente-modal.component.css']
})
export class NuevoPacienteModalComponent {
  paciente = new Patient('', '', '', '', '', 999, '', '');

  constructor(
    private patientService: PatientService
  ) {}

  nuevoPaciente( nuevoPacienteForm: NgForm ) {
    console.log('NUEVO PACIENTE MODAL');
    this.paciente = nuevoPacienteForm.form.value;

    console.log( this.paciente );
    
    this.patientService.newPatient( this.paciente ).subscribe({
      next: (data : String) => {
        // this.empresa = data
        console.log('DATA: ', data);
        
      }
    });
  }
}