import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './Components/listar/listar.component';
import { EditarComponent } from './Components/editar/editar.component';
import { EliminarComponent } from './Components/eliminar/eliminar.component';
import { GuardarComponent } from './Components/guardar/guardar.component';

//Es un arreglo de rutas que necesito para consumir una web service, agregar los componentes
const routes: Routes = [
  {path:'listar', component:ListarComponent},
  {path:'guardar', component:GuardarComponent},
  {path:'eliminar', component:EliminarComponent},
  {path:'editar', component:EditarComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
