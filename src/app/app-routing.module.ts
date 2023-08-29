import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default-home/default/default.component';

const routes: Routes = [
 {
  path:'',
  component:DefaultComponent
 },
 {
  path:'register',
  loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)
 },
 {
   path:'dashboard',
   loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
