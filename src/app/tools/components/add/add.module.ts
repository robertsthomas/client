import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddComponent } from "./add.component";
import { IonicModule } from "@ionic/angular";
import { AddService } from '../../services/add/add.service';
import { WorkflowService } from '../../services/workflow/workflow.service';
import { PreviewComponent } from './steps/preview/preview.component';
import { ToolDataComponent } from './steps/tool-data/tool-data.component';

@NgModule({
  declarations: [AddComponent, PreviewComponent, ToolDataComponent],
  imports: [CommonModule, IonicModule],
  exports: [AddComponent],
  providers: [
    { provide: AddService, useClass: AddService },
    { provide: WorkflowService, useClass: WorkflowService },
  ],
})
export class AddModule {}
