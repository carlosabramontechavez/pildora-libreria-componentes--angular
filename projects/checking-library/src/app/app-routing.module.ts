import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth-register/auth-register.module').then(r => r.AuthRegisterModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth-login/auth-login.module').then(r => r.AuthLoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
