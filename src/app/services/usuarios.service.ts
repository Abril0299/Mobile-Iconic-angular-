import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../interface/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  constructor(private http:HttpClient) { }

  usuarioregis: Usuarios={} as Usuarios; 


  getUser(){
    return this.http.get("http://localhost:5000/usuarios");
 }


  EnviarUsuario(usuario:Usuarios){
   return this.http.post("http://localhost:5000/usuarios",usuario)
  
  }
 //Mostrar perfil del usuario registrado
  UsuarioRegistrado(usuario:Usuarios)
  {
    this.usuarioregis= usuario;
  }

  EnviarUsuarioRegistrado(){
    return this.usuarioregis;
  }
  

  
  
}
