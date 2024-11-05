import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { ListarComponent } from './Components/listar/listar.component';
import { GuardarComponent } from './Components/guardar/guardar.component';
import { EliminarComponent } from './Components/eliminar/eliminar.component';
import { EditarComponent } from './Components/editar/editar.component';
// Importar HttpClientModule
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    ListarComponent,
    GuardarComponent,
    EliminarComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
