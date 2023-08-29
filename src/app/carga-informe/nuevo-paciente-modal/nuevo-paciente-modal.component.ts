import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Empresa } from 'src/app/models/empresa';
import { Patient } from 'src/app/models/patient';
import { ToastrService } from 'ngx-toastr';
import { PatientService } from 'src/app/services/patient.service';


@Component({
  selector: 'app-nuevo-paciente-modal',
  templateUrl: './nuevo-paciente-modal.component.html',
  styleUrls: ['./nuevo-paciente-modal.component.css']
})
export class NuevoPacienteModalComponent {
  paciente = new Patient('', '', '', '', '', 999, '', ''); 
  
  constructor(
    private patientService: PatientService,
    private toastr: ToastrService
    ) {}

  nuevoPaciente(nuevoPacienteForm: NgForm) {
    this.paciente = nuevoPacienteForm.form.value;
    this.patientService.newPatient(this.paciente).subscribe(
      {
        next: (data: String) => {
          // Devolver data y recargar con los datos.
          
          this.toastr.success(
            'Paciente cargado con éxito',
            'Listo!'
          );
        },
        error:()=>{
          this.toastr.error(
            'No se pudo cargar el paciente',
            'Algo salió mal!'
          );
        }
      }
    );
  }
}
