import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudpropietarioService } from 'src/app/servicio/crudpropietario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-vehiculo',
  templateUrl: './agregar-vehiculo.component.html',
  styleUrls: ['./agregar-vehiculo.component.css']
})
export class AgregarVehiculoComponent implements OnInit {
  formularioVehiculo:FormGroup;

  constructor(
    public formulario:FormBuilder,
    private crudPropietarioService:CrudpropietarioService,
    private ruteador:Router
  ) {

    this.formularioVehiculo=this.formulario.group({
      placa:[''],
      vin:[''],
      linea_id:[''],
      cilindrada:[''],
      color_id:[''],
      chasis:[''],
      tipo_vehiculo_id:['']
    });


  }

  ngOnInit(): void {
  }

   /*Método para captura de la información */

   enviarDatos() {
    let enviarDatos= this.crudPropietarioService.insertDataV(this.formularioVehiculo.value["placa"],this.formularioVehiculo.value["vin"],this.formularioVehiculo.value["linea_id"],this.formularioVehiculo.value["cilindrada"],this.formularioVehiculo.value["color_id"],this.formularioVehiculo.value["chasis"],this.formularioVehiculo.value["tipo_vehiculo_id"]).subscribe(respuesta=>{
    console.log(respuesta);

    this.ruteador.navigateByUrl('/listar-vehiculo');
      });
   }

}
