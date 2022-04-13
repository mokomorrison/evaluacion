import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, Timestamp } from 'rxjs';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class CrudpropietarioService {
  public url:string;
  data: any;
  //filtroPropietario:string='';

  constructor(private http:HttpClient) {
    this.url=GLOBAL.url;

   }

  getData():Observable<any>{
    return this.http.get(this.url+'data.php');
  }

  insertData(_nombre:string,_apellidos:string,_identificacion:string,_fecha_nacimiento:any,_direccion:string,_telefono:string,_email:string):Observable<any>{
    return this.http.post(this.url+'data.php',{nombre:_nombre,apellidos:_apellidos,identificacion:_identificacion,fecha_nacimiento:_fecha_nacimiento,direccion:_direccion,telefono:_telefono,email:_email});
  }

  updateData(_id:string,_nombre:string,_apellidos:string,_identificacion:string,_fecha_nacimiento:any,_direccion:string,_telefono:string,_email:string):Observable<any>{
    console.log(_id);
    return this.http.put(this.url+'data.php',{id:_id,nombre:_nombre,apellidos:_apellidos,identificacion:_identificacion,fecha_nacimiento:_fecha_nacimiento,direccion:_direccion,telefono:_telefono,email:_email});
  }

  deleteData(_id:any):Observable<any>{
    return this.http.delete(this.url+'data.php/?id='+_id);
  }

  /*Para vehiculo */
  getDataV():Observable<any>{
    return this.http.get(this.url+'dataV.php');
  }

  insertDataV(_placa:string,_vin:string,_linea_id:string,_cilindrada:string,_color_id:string,_chasis:string,_tipo_vehiculo_id:string):Observable<any>{
    return this.http.post(this.url+'dataV.php',{placa:_placa,vin:_vin,linea_id:_linea_id,cilindrada:_cilindrada,color_id:_color_id,chasis:_chasis,tipo_vehiculo_id:_tipo_vehiculo_id});
  }

  updateDataV(_id:string,_placa:string,_vin:string,_linea_id:string,_cilindrada:string,_color_id:string,_chasis:string,_tipo_vehiculo_id:string):Observable<any>{
    console.log(_id);
    return this.http.put(this.url+'dataV.php',{id:_id,placa:_placa,vin:_vin,linea_id:_linea_id,cilindrada:_cilindrada,color_id:_color_id,chasis:_chasis,tipo_vehiculo_id:_tipo_vehiculo_id});
  }

  deleteDataV(_id:any):Observable<any>{
    return this.http.delete(this.url+'dataV.php/?id='+_id);
  }

  /*Para Informe */
  getDataI():Observable<any>{
    return this.http.get(this.url+'dataI.php');
  }
}
