import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*Importe y especificación de rutas de los componentes creados */

/*Para propietario */
import { AgregarPropietarioComponent } from './componentes/agregar-propietario/agregar-propietario.component';
import { EditarPropietarioComponent } from './componentes/editar-propietario/editar-propietario.component';
import { ListarPropietarioComponent } from './componentes/listar-propietario/listar-propietario.component';

/*Para vehículo */
import { AgregarVehiculoComponent } from './componentes/agregar-vehiculo/agregar-vehiculo.component';
import { EditarVehiculoComponent } from './componentes/editar-vehiculo/editar-vehiculo.component';
import { ListarVehiculoComponent } from './componentes/listar-vehiculo/listar-vehiculo.component';



const routes: Routes = [

  /*Creación de rutas para redireccionar*/

/*Rutas propietario */

  {path: '', pathMatch: 'full', redirectTo: 'agregar-propietario' },
  {path: 'agregar-propietario', component:AgregarPropietarioComponent},
  {path: 'listar-propietario', component:ListarPropietarioComponent},
  {path: 'editar-propietario/:id', component:EditarPropietarioComponent},

/*Rutas vehículo */
  {path: '', pathMatch: 'full', redirectTo: 'agregar-vehiculo' },
  {path: 'agregar-vehiculo', component:AgregarVehiculoComponent},
  {path: 'listar-vehiculo', component:ListarVehiculoComponent},
  {path: 'editar-vehiculo/:id', component:EditarVehiculoComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
