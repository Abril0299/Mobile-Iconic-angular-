import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../interface/user';
import { UsuariosService } from '../services/usuarios.service';
import { Usuarios } from '../interface/usuarios';
@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page  {
 
  likes:User []= [];
 //Perfil de los usuarios registrados
  perfilUsuarioRegis: Usuarios={} as Usuarios; 

  constructor(private UserService:UserService,private UsuariosService:UsuariosService) {}

  ngOnInit(): void {
    this.perfilUsuarioRegis= this.UsuariosService.EnviarUsuarioRegistrado();
  }

  MostrarLikes(){

    this.likes=this.UserService.getAll();
  }


  }



 