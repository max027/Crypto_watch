import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarAuthComponent } from './navbar-auth/navbar-auth.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

const authRoutes:Routes=[
  {
    path:'',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
]

export const authRouting=RouterModule.forChild(authRoutes)

@NgModule({
  declarations: [
    RegisterComponent,
    NavbarAuthComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    authRouting,
    FormsModule,
  ],
  exports:[RegisterComponent]
})
export class AuthModule { }
