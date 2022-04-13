import { Component, OnInit } from '@angular/core';
import { CrudpropietarioService } from 'src/app/servicio/crudpropietario.service';


@Component({
  selector: 'app-listar-propietario',
  templateUrl: './listar-propietario.component.html',
  styleUrls: ['./listar-propietario.component.css']
})
export class ListarPropietarioComponent implements OnInit {
  //Propietario: any;
  public Propietario=[];
  ruteador: any;
  public page:number=0;
  public filtroPropietario:string="";

  constructor(
    private crudpropietarioService:CrudpropietarioService) {

     }

  ngOnInit(): void {
    this.mostrarDatos();
  }

  mostrarDatos(){
      /*this.crudpropietarioService.getData().subscribe(respuesta=>{
        console.log(respuesta);
        this.Propietario=respuesta;
      });*/
      let mostrarDatos= this.crudpropietarioService.getData().subscribe(respuesta=>{
        this.Propietario=respuesta["data"];
        console.log(respuesta);
      });

      }

      ver(propietario:any){

      }

      borrar(id:any){
        /*this.crudpropietarioService.getData().subscribe(respuesta=>{
          console.log(respuesta);
          this.Propietario=respuesta;
        });*/
        let borrar= this.crudpropietarioService.deleteData(id).subscribe(respuesta=>{
          this.mostrarDatos();
          console.log(respuesta);
        });

        }

}
