import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default-home/default/default.component';
import { authGuard } from './auth/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MarketComponent } from './market/market.component';

// main routes
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
   component:DashboardComponent,
   canActivate:[authGuard]
 },
 {
  path:'market',
  component:MarketComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
