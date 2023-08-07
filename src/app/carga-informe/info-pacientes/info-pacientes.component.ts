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
  info: number = -1;

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
    
  

    this.patientService.searchByDNI(this.dni).subscribe(
      data => {
        this.paciente = data.data.listado[0];
        
        if (this.paciente === null) {
          this.showData(-1);
        }else{
          if(this.paciente === undefined){
            this.showData(1);
          }else{
            this.showData(0);

            this.patientService.setData( this.paciente.id, this.paciente.documento );
          }
        }
      }
    )
  }

  buscarPacId( buscarPacId: NgForm ) {
    this.id = buscarPacId.value.id;
    // this.paciente = buscarPacId.value;

    
    this.patientService.seachById(this.id).subscribe(
      data => {


        this.paciente = data.data.listado[0];
        

        if (data == null) {
          this.showData(-1);
        }else{
          if(data == undefined){
            this.showData(1);
          }else{
            this.showData(0);
          }
        }
      },
      // err => {
      //   console.error( err );
        
      //   this.router.navigate([ '/login' ])
      // }
    )
  }

  showData(value: number) {
    this.info = value;
  }
}
