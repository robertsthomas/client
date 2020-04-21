import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { HomeCardsModule } from '../../components/home-cards/home-cards.module';
import { ToolsModule } from '../../tools/components/tools/tools.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HomeCardsModule,
    ToolsModule
  ],
  exports: [HomePage],
  declarations: [HomePage]
})
export class HomePageModule {}
