import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddComponent } from "./add.component";
import { IonicModule } from "@ionic/angular";
import { Slide1Module } from '../../../components/Slides/slide1/slide1.module';

@NgModule({
  declarations: [AddComponent],
  imports: [CommonModule, IonicModule, Slide1Module],
  exports: [AddComponent],
})
export class AddModule {}
