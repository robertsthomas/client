import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { AddModule } from '../tools/components/add/add.module';
import { AddToolPageModule } from '../pages/add-tool/add-tool.module';
import { AddService } from '../tools/services/add/add.service';
import { WorkflowService } from '../tools/services/workflow/workflow.service';
import { PreviewComponent } from '../tools/components/add/steps/preview/preview.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
  ],
  declarations: [TabsPage],
})
export class TabsPageModule {}
