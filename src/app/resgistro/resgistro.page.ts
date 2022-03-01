import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Usuarios } from '../interface/usuarios';
import { UsuariosService } from '../services/usuarios.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-resgistro',
  templateUrl: './resgistro.page.html',
  styleUrls: ['./resgistro.page.scss'],
})
export class ResgistroPage implements OnInit {
  usuarioregistrado: Usuarios={} as Usuarios; 

  formulario = this.formBuilder.group({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    nombreusu: '',
  })


  constructor(private formBuilder: FormBuilder,private UsuariosService:UsuariosService, private Router:Router) {}
  ngOnInit(): void {
    
  }

  guardar(){
    /*let nuevousuario : Usuarios={
      nombre: this.formulario.get('nombre')?.value,
      apellido:this.formulario.get('apellido')?.value,
      email:this.formulario.get('email')?.value,
      password:this.formulario.get('password')?.value,
      nombreusu:this.formulario.get('nombreusu')?.value,
    }*/
    this.usuarioregistrado=this.formulario.value;
    this.UsuariosService.UsuarioRegistrado(this.usuarioregistrado);

    this.UsuariosService.EnviarUsuario(this.formulario.value).subscribe((respuesta:any)=>{

    this.limpiarForms();
   
    //Router
    

   }, (error) => {
    this.limpiarForms();
    this.Router.navigate(['todastabs/tabs/tab3'])
   });
  }
  limpiarForms() {
    this.formulario.reset();
  }
} 
  
