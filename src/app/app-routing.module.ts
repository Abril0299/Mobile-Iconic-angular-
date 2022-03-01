import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
  },
  {
    path: 'todastabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },

  {
    path: 'iniciarsesion',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },


  
  {
    path: 'registro',
    loadChildren: () => import('./resgistro/resgistro.module').then(m => m.ResgistroPageModule)
  },

 
 
  {
    path: 'usuarios',
    loadChildren: () => import('./verusuarios/verusuarios.module').then(m => m.VerusuariosPageModule)
  },

 
  
  {
    path: 'verusuarios',
    loadChildren: () => import('./verusuarios/verusuarios.module').then( m => m.VerusuariosPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
