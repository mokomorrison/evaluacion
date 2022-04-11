import { Component } from '@angular/core';
import {CrudpropietarioService} from './servicio/crudpropietario.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fgestionautos';
  displayedColumns: string[] = ['id', 'nombre', 'apellidos', 'identificacion','fecha_nacimiento','direccion','telefono','email','acciones'];
  public dataSource=[];
  public propietario:any=[];
  public new=false;
  public edit=false;
  public filterData=[];
  public filterValue:any="";
  public arrowDown:boolean=false;
  constructor(public _crudpropietarioService:CrudpropietarioService){
    this.getData();

  }

  filter(event:Event){
    const filter = (event.target as HTMLInputElement).value;
    let temp:any=[];
    for(let d in this.dataSource){
      let dato= this.dataSource[d]['nombre'];
      if(dato){
        if((dato as string).trim().toLowerCase().indexOf(filter)!==-1){
          temp.push(this.dataSource[d]);
          break;
        }
      }
    }
    this.filterData=temp;
  }

  async getData(){
    let res:any= await this._crudpropietarioService.getData();
    this.dataSource=res['data'];
    this.filterData=this.dataSource;
  }

  save(){
    this.new=false;
    if(this.edit==true){
      this.update();
    }else{
      this.insert();
    }
  }

  cancel(){
    this.new=false;
  }

  async insert(){
    let res:any = await this._crudpropietarioService.insertData(this.propietario.nombre,this.propietario.apellidos,this.propietario.identificacion,this.propietario.fecha_nacimiento,this.propietario.direccion,this.propietario.telefono,this.propietario.email);
    if(res['status']=="200"){
      alert('Registro creado correctamente');
      this.getData();
    }
  }

  async update(){
    let res:any=await this._crudpropietarioService.insertData(this.propietario.nombre,this.propietario.apellidos,this.propietario.identificacion,this.propietario.fecha_nacimiento,this.propietario.direccion,this.propietario.telefono,this.propietario.email);
    if(res['status']=="200"){
      alert('Registro editado correctamente');
      this.getData();
    }
  }

  async view(type:any,element:any){
    this.new=true;
    if(type==1){
      this.edit=true;
      this.propietario=this.clone(element);
    }else{
      this.propietario=[];
      this.edit=false;
    }
  }

  clone(_item:any):any{
    return JSON.parse(JSON.stringify(_item));
  }

  clearFilter(){
    this.filterValue=null;
    this.filterData=this.dataSource;
  }

  async delete(propietario:any){
    let res:any= await this._crudpropietarioService.deleteData(propietario);
    if(res['status']=="200"){
      alert('registro eliminado correctamente');
      this.getData();
    }
  }

  order(){
    this.arrowDown=true;
    let temp:any=[];
    for(let d in this.dataSource){
      temp.push(this.dataSource[d]);
    }
    temp.sort(function(a:any, b:any) {
      var nameA = a.nombre.toUpperCase();
      var nameB = b.nombre.toUpperCase();
      if (nameA < nameB) {
        return -1;   }
        if (nameA > nameB) {
          return 1;
        }

        return 0;

      });
      this.filterData=temp;
    }
    restartOrder(){
      this.arrowDown=false;
      this.getData();
    }
  }

