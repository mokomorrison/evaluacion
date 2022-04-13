import { Component, OnInit } from '@angular/core';
import { CrudpropietarioService } from 'src/app/servicio/crudpropietario.service';

@Component({
  selector: 'app-listar-vehiculo',
  templateUrl: './listar-vehiculo.component.html',
  styleUrls: ['./listar-vehiculo.component.css']
})
export class ListarVehiculoComponent implements OnInit {
  public Vehiculo=[];
  ruteador: any;
  public page:number=0;
  public filtroVehiculo:string="";

  constructor(
    private crudpropietarioService:CrudpropietarioService
  ) { }

  ngOnInit(): void {
    this.mostrarDatosV();
  }

  mostrarDatosV(){
    /*this.crudpropietarioService.getData().subscribe(respuesta=>{
      console.log(respuesta);
      this.Propietario=respuesta;
    });*/
    let mostrarDatosV= this.crudpropietarioService.getDataV().subscribe(respuesta=>{
      this.Vehiculo=respuesta["data"];
      console.log(respuesta);
    });

    }

    ver(vehiculo:any){

    }

    borrar(id:any){
      /*this.crudpropietarioService.getData().subscribe(respuesta=>{
        console.log(respuesta);
        this.Propietario=respuesta;
      });*/
      let borrar= this.crudpropietarioService.deleteDataV(id).subscribe(respuesta=>{
        this.mostrarDatosV();
        console.log(respuesta);
      });

      }


}
