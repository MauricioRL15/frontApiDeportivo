import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Jugadores } from 'src/app/Models/Jugador';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {

// Aqui va la logica del componente
// Declarar el constructor en el que vamos a inyectar al Router y servicio

constructor(private router:Router, private servicio:ServiceService){}

// Declarar variables de tipo conexión

listarJugadores:Jugadores[];

//Todo lo que pongas en el ngOnInit se ejecuta al cargar el componente:
ngOnInit():void{
  //Resivir la respuesta del servidor -> al consumir el servicio
  this.servicio.listarJ().subscribe(data => {
    //console.log(data);
    this.listarJugadores = data;
  })
}

abrirCompEditarEnviarId(jugador:Jugadores){
  //enviar el id para realizar la busqueda
  localStorage.setItem("id", jugador.id.toString());
  this.router.navigate(["editar"]);
}

abrirCompEliminarEnviarId(jugador:Jugadores){
  //enviar el id para realizar la busqueda
  localStorage.setItem("id", jugador.id.toString());
  this.router.navigate(["eliminar"]);
}


}
