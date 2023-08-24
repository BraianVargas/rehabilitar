import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Empresa } from 'src/app/models/empresa';
import './bootstrap/dist/css/bootstrap.min.css';
import { Patient } from 'src/app/models/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-nuevo-paciente-modal',
  templateUrl: './nuevo-paciente-modal.component.html',
  styleUrls: ['./nuevo-paciente-modal.component.css']
})
export class NuevoPacienteModalComponent {
  paciente = new Patient('', '', '', '', '', 999, '', '');
  showToast = false; // Inicialmente oculto

  constructor(private patientService: PatientService) {}

  nuevoPaciente(nuevoPacienteForm: NgForm) {
    this.paciente = nuevoPacienteForm.form.value;

    this.patientService.newPatient(this.paciente).subscribe({
      next: (data: String) => {
        this.showToast = true; // Mostrar el toast cuando obtengas la respuesta
        console.log('showToast: ', this.showToast);
        console.log('DATAAAAAAAAA: ', data);
      }
    });
  }
}
