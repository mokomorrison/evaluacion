import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudpropietarioService } from 'src/app/servicio/crudpropietario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-vehiculo',
  templateUrl: './editar-vehiculo.component.html',
  styleUrls: ['./editar-vehiculo.component.css']
})
export class EditarVehiculoComponent implements OnInit {
  formularioVehiculo:FormGroup;
  public Vehiculo=[];
  elID:any;

  constructor(
    public formulario:FormBuilder,
    private crudPropietarioService:CrudpropietarioService,
    private ruteador:Router,
    private activeRoute:ActivatedRoute
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
    this.elID=this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.elID);
    this.verDatos();
  }

  editarDatos() {
  let editarDatos= this.crudPropietarioService.updateDataV(this.formularioVehiculo.value["id"],this.formularioVehiculo.value["placa"],this.formularioVehiculo.value["vin"],this.formularioVehiculo.value["linea_id"],this.formularioVehiculo.value["cilindrada"],this.formularioVehiculo.value["color_id"],this.formularioVehiculo.value["chasis"],this.formularioVehiculo.value["tipo_vehiculo_id"]).subscribe(respuesta=>{
    console.log(this.formularioVehiculo.value["id"]);


    this.ruteador.navigateByUrl('/listar-vehiculo');
  });
  }

  verDatos(){
  let mostrarDatos= this.crudPropietarioService.getDataV().subscribe(respuesta=>{
    this.Vehiculo=respuesta["data"];
    console.log(respuesta);

    for(let p of this.Vehiculo){
      if(p['id']==this.elID){
        this.formularioVehiculo=this.formulario.group({
          id:p['id'],
          placa:p['placa'],
          vin:p['vin'],
          linea_id:p['linea_id'],
          cilindrada:p['cilindrada'],
          color_id:p['color_id'],
          chasis:p['chasis'],
          tipo_vehiculo_id:p['tipo_vehiculo_id']
        });

      }


    }

    console.log(this.formularioVehiculo);


  });



  }



}

