import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeCardsComponent } from './home-cards.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [HomeCardsComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [HomeCardsComponent]
})
export class HomeCardsModule { }
