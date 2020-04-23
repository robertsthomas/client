import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { AddModule } from '../tools/components/add/add.module';
import { AddToolPageModule } from '../pages/add-tool/add-tool.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    AddToolPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
