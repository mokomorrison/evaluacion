import { Component, OnInit } from '@angular/core';
import { CrudpropietarioService } from 'src/app/servicio/crudpropietario.service';

@Component({
  selector: 'app-informe',
  templateUrl: './informe.component.html',
  styleUrls: ['./informe.component.css']
})
export class InformeComponent implements OnInit {
  public Informe=[];
  ruteador: any;
  public page:number=0;
  public filtroInforme:string="";
  public filterData=[];
  public filterValue:any;
  public ordenar=false;

  constructor(
    private crudpropietarioService:CrudpropietarioService
  ) { }

  ngOnInit(): void {
    this.mostrarDatosI();
  }

  mostrarDatosI(){

    let mostrarDatosI= this.crudpropietarioService.getDataI().subscribe(respuesta=>{
      this.Informe=respuesta["data"];
      console.log(respuesta);
      this.filterData = this.Informe;
    });

    }
    filter(event:Event){
      const filter = (event.target as HTMLInputElement).value;
      let temp:any=[];
      for(let d in this.Informe){
        let dato= this.Informe[d]['nombrepropietario'];
        if(dato){
          if((dato as string).trim().toLowerCase().indexOf(filter)!==-1){
            temp.push(this.Informe[d]);
            console.log(temp);
          }
        }
      }
      this.filterData=temp;
      if(this.filterData.length <= 0 ){
        this.filterData = this.Informe;
      }
    }

    clearFilter(){
      this.filterValue='';
      this.filterData=this.Informe;
    }

    order(ordenar:any){
      this.ordenar=ordenar;
      let temp:any=[];
      for(let d in this.filterData){
        temp.push(this.filterData[d]);
      }
      temp.sort(function(a:any, b:any) {
        var nameA = a.placa.toUpperCase();
        var nameB = b.placa.toUpperCase();
        if (nameA < nameB) {
          return -1;   }
          if (nameA > nameB) {
            return 1;
          }

          return 0;

        });
        this.filterData=temp;
      }

}
