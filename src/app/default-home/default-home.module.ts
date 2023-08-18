import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    DefaultComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[DefaultComponent]
})
export class DefaultHomeModule { }
