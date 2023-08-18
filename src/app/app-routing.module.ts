import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default-home/default/default.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
 {
  path:'',
  component:DefaultComponent,
  pathMatch:'full'
 },
 {
  path:'register',
  component:RegisterComponent,
 } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
