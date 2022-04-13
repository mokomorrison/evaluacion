import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarPropietarioComponent } from './componentes/agregar-propietario/agregar-propietario.component';
import { EditarPropietarioComponent } from './componentes/editar-propietario/editar-propietario.component';
import { ListarPropietarioComponent } from './componentes/listar-propietario/listar-propietario.component';
import { ListarVehiculoComponent } from './componentes/listar-vehiculo/listar-vehiculo.component';
import { AgregarVehiculoComponent } from './componentes/agregar-vehiculo/agregar-vehiculo.component';
import { EditarVehiculoComponent } from './componentes/editar-vehiculo/editar-vehiculo.component';


/*Importar los formularios*/

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CrudpropietarioService } from './servicio/crudpropietario.service';
import { FiltroPropietarioPipe } from './pipes/filtro-propietario.pipe';
import { InformeComponent } from './componentes/informe/informe.component';



@NgModule({
  declarations: [
    AppComponent,
    AgregarPropietarioComponent,
    EditarPropietarioComponent,
    ListarPropietarioComponent,
    ListarVehiculoComponent,
    AgregarVehiculoComponent,
    EditarVehiculoComponent,
    FiltroPropietarioPipe,
    InformeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    NgxPaginationModule
  ],
  providers: [CrudpropietarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
