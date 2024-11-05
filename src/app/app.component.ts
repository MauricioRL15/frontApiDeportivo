import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontApiDeportivo';

  //Constructo con un parametro -> inyecando al router
  constructor (private router:Router){}
  
  //Declarar un procedimiento para la navegacion al componente listar
  abrirCompListar(){
    this.router.navigate(["listar"]);
  }

  //Declarar un procedimiento para la navegacion al componente guardar
  abrirCompGuardar(){
    this.router.navigate(["guardar"]);
  }

  abrirCompEditar(){
    this.router.navigate(["editar"]);
  }
}
