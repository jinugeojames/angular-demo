import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AuthlayoutComponent} from './authlayout/authlayout.component';
import {RegisterComponent} from './pages/register/register.component';
import {LoginComponent} from './pages/login/login.component'
import {ForgotpasswordComponent} from './pages/forgotpassword/forgotpassword.component';

const routes: Routes = [
  
  {path: '', component: AuthlayoutComponent,
    children:[
      {path: 'register',component: RegisterComponent},
      {path: '',component: LoginComponent},
      {path: 'login',component: LoginComponent},
      {path: 'forgotpassword',component: ForgotpasswordComponent}
    ] 
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
