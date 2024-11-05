import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Jugadores } from 'src/app/Models/Jugador';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-guardar',
  templateUrl: './guardar.component.html',
  styleUrls: ['./guardar.component.css']
})
export class GuardarComponent {

// Aqui va la logica del componente
// Declarar el constructor en el que vamos a inyectar al Router y servicio

constructor(private router:Router, private servicio:ServiceService){}

// Declarar variables de tipo objeto

jugador:Jugadores = new Jugadores();

guardar(){
  this.servicio.guardarJ(this.jugador).subscribe(data => {
    this.router.navigate(["listar"]);
  })
}


}
