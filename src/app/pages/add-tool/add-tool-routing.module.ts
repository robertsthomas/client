import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddToolPage } from './add-tool.page';

const routes: Routes = [
  {
    path: '',
    component: AddToolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddToolPageRoutingModule {}
