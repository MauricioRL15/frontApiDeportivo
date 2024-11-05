import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Jugadores } from '../Models/Jugador';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  //Se agrega parametro al constructor para las peticiones utilizando el protocolo HTTP en nuestra web service.
  constructor(private http:HttpClient) {}

  url = 'http://localhost:9000/JugadoresWebService/';
  

  //Metodos para los recursos:
  //Ajax -> metodologia de trabajo asincrono
  listarJ(){
  return this.http.get<Jugadores[]>(this.url+"listar");
  }

  // Metodo cuando no se ocupan validaciones (no usando el responseEntity)
  guardarJ(jugador:Jugadores){
    return this.http.post<Jugadores>(this.url + "guardar", jugador);
  }
  
  // sin <> y agregarle el response type
  /*guardarJ2(jugador:Jugadores){
    return this.http.post(this.urlListar+"guardar", jugador, {responseType: 'text'});
  }*/

  editarJ(jugador:Jugadores){
    return this.http.post<Jugadores>(this.url + "editar", jugador);
  }

  buscarJ(jugador:Jugadores){
    return this.http.post<Jugadores>(this.url + "buscar", jugador);
  }

  eliminarJ(jugador:Jugadores){
    return this.http.post<Jugadores>(this.url + "eliminar", jugador);
  }

}
