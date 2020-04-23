import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { AddToolPageModule } from '../pages/add-tool/add-tool.module';
import { AddModule } from '../tools/components/add/add.module';
import { AddComponent } from '../tools/components/add/add.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }]),
    AddToolPageModule
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
