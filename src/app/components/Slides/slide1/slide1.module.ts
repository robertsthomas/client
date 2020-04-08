import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Slide1Component } from './slide1.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [Slide1Component],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [Slide1Component]
})
export class Slide1Module { }
