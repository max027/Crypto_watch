import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DefaultComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[DefaultComponent]
})
export class DefaultHomeModule { }
