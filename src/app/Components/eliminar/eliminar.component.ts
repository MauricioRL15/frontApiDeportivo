import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Jugadores } from 'src/app/Models/Jugador';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent {

  constructor(private router:Router, private servicio:ServiceService){}

  //Variable de tipo objeto
  jugador:Jugadores = new Jugadores();


  ngOnInit(){
    this.buscar();
  }

  buscar(){
    //Recibir el id que mandamos con el boton de editar
    let id = localStorage.getItem("id");
    this.jugador.id = Number(id);
    //Consumir el servicio de buscar
    this.servicio.buscarJ(this.jugador).subscribe(data =>{
      // inicializame este con lo que viene en data
      this.jugador = data;
    });
  }


  eliminar(){
    this.servicio.eliminarJ(this.jugador).subscribe(data => {
      this.router.navigate(["listar"]);
    })
  }


}
