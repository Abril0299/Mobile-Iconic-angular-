import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../interface/user';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private UserService:UserService) {}


  MeGusta(numero:number){
  
    this.UserService.addMegusta(numero);
  }
  
}
