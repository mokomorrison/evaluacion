import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudpropietarioService } from 'src/app/servicio/crudpropietario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-propietario',
  templateUrl: './agregar-propietario.component.html',
  styleUrls: ['./agregar-propietario.component.css']
})
export class AgregarPropietarioComponent implements OnInit {
  formularioPropietario:FormGroup;


  constructor(
    public formulario:FormBuilder,
    private crudPropietarioService:CrudpropietarioService,
    private ruteador:Router
    ) {

    this.formularioPropietario=this.formulario.group({
      nombre:[''],
      apellidos:[''],
      identificacion:[''],
      fecha_nacimiento:[''],
      direccion:[''],
      telefono:[''],
      email:['']
    });
  }

  ngOnInit(): void {
  }

  /*Método para captura de la información */

  enviarDatos() {
    let enviarDatos= this.crudPropietarioService.insertData(this.formularioPropietario.value["nombre"],this.formularioPropietario.value["apellidos"],this.formularioPropietario.value["identificacion"],this.formularioPropietario.value["fecha_nacimiento"],this.formularioPropietario.value["direccion"],this.formularioPropietario.value["telefono"],this.formularioPropietario.value["email"]).subscribe(respuesta=>{
    console.log(respuesta);

    this.ruteador.navigateByUrl('/listar-propietario');
  });


  }

}
