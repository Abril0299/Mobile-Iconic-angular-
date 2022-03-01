import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
@Component({
  selector: 'app-verusuarios',
  templateUrl: './verusuarios.page.html',
  styleUrls: ['./verusuarios.page.scss'],
})
export class VerusuariosPage implements OnInit {
  arreglo:[]=[];
  constructor(private UsuariosService:UsuariosService) { }
 

  ngOnInit(): void {

    this.UsuariosService.getUser().subscribe((res:any)=>{

    this.arreglo = res;
    console.log(res);
}  )
  }

}
