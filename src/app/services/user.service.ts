import { Injectable } from '@angular/core';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  nuevoUsuario : User []= [
    {
      nombre : 'Avril Hernández',
      ocupacion : 'App developer',
      imagen: "../../../assets/15.jpg",
      likes:[]
    },
    
  {
    nombre : 'Alejandro Speitzer',
    ocupacion : 'Actor',
    imagen: "../../../assets/1.jpg",
    likes:[]
  },

  {
    nombre : 'Chris Evans',
    ocupacion : 'Actor',
    imagen: "../../../assets/5.png",
    likes:[]
  },

  {
    nombre : 'Jason Momoa',
    ocupacion : 'Actor',
    imagen: "../../../assets/6.jpg",
    likes:[]
  },

  {
    nombre : 'Henry Cavill',
    ocupacion : 'Actor',
    imagen: "../../../assets/7.png",
    likes:[]
  },

  {
    nombre : 'Mishi Momido',
    ocupacion : 'Mascota',
    imagen: "../../../assets/8.jpg",
    likes:[]
  },

  {
    nombre : 'Jamie Dornan',
    ocupacion : 'Actor',
    imagen: "../../../assets/9.jpg",
    likes:[]
  },

  {
    nombre : 'Tom Holland',
    ocupacion : 'Actor',
    imagen: "../../../assets/10.jpg",
    likes:[]
  },

  {
    nombre : 'AuronPlay',
    ocupacion : 'Gameplay',
    imagen: "../../../assets/11.jpg",
    likes:[]
  },

  {
    nombre : 'Michael B. Jordan',
    ocupacion : 'Actor',
    imagen: "../../../assets/12.jpg",
    likes:[]
  },

  {
    nombre : 'Zendaya Maree',
    ocupacion : 'Actriz',
    imagen: "../../../assets/13.jpg",
    likes:[]
  },
  ]

  constructor() { }

  getAll(){
    return this.nuevoUsuario[0].likes;
    console.log('Entre a me gusta')
  }

  addMegusta(userlike:number){

   this.nuevoUsuario[0].likes.push(this.nuevoUsuario[userlike]);

   
  }

  


}
