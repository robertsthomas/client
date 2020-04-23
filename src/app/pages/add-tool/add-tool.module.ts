import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddToolPageRoutingModule } from './add-tool-routing.module';

import { AddToolPage } from './add-tool.page';
import { Slide1Module } from 'src/app/components/Slides/slide1/slide1.module';
import { AddModule } from 'src/app/tools/components/add/add.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddToolPageRoutingModule,
    AddModule
  ],
  exports: [AddToolPage],
  declarations: [AddToolPage]
})
export class AddToolPageModule {}
