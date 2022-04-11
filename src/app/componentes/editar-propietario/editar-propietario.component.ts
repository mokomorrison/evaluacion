import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudpropietarioService } from 'src/app/servicio/crudpropietario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-propietario',
  templateUrl: './editar-propietario.component.html',
  styleUrls: ['./editar-propietario.component.css']
})
export class EditarPropietarioComponent implements OnInit {
  formularioPropietario:FormGroup;
  public Propietario=[];
  elID:any;

  constructor(
    public formulario:FormBuilder,
    private crudPropietarioService:CrudpropietarioService,
    private ruteador:Router,
    private activeRoute:ActivatedRoute

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
    this.elID=this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.elID);
    this.verDatos();
  }

  editarDatos() {
  let editarDatos= this.crudPropietarioService.updateData(this.formularioPropietario.value["id"],this.formularioPropietario.value["nombre"],this.formularioPropietario.value["apellidos"],this.formularioPropietario.value["identificacion"],this.formularioPropietario.value["fecha_nacimiento"],this.formularioPropietario.value["direccion"],this.formularioPropietario.value["telefono"],this.formularioPropietario.value["email"]).subscribe(respuesta=>{
    console.log(this.formularioPropietario.value["id"]);


    this.ruteador.navigateByUrl('/listar-propietario');
  });
  }

  verDatos(){
  let mostrarDatos= this.crudPropietarioService.getData().subscribe(respuesta=>{
    this.Propietario=respuesta["data"];
    console.log(respuesta);

    for(let p of this.Propietario){
      if(p['id']==this.elID){
        this.formularioPropietario=this.formulario.group({
          id:p['id'],
          nombre:p['nombre'],
          apellidos:p['apellidos'],
          identificacion:p['identificacion'],
          fecha_nacimiento:p['fecha_nacimiento'],
          direccion:p['direccion'],
          telefono:p['telefono'],
          email:p['email']
        });

      }


    }

    console.log(this.formularioPropietario);


  });



  }



}
