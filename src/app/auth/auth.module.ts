import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarAuthComponent } from './navbar-auth/navbar-auth.component';
import { LoginComponent } from './login/login.component';

const authRoutes:Routes=[
  {
    path:'',
    component:RegisterComponent
  }
]

export const authRouting=RouterModule.forChild(authRoutes)

@NgModule({
  declarations: [
    RegisterComponent,
    NavbarAuthComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    authRouting,
  ],
  exports:[RegisterComponent]
})
export class AuthModule { }
