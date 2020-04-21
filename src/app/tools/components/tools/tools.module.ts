import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ToolsComponent } from './tools.component';



@NgModule({
  declarations: [ToolsComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ToolsComponent]
})
export class ToolsModule { }
