import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddToolPage } from './add-tool.page';
import { AddComponent } from 'src/app/tools/components/add/add.component';

const routes: Routes = [
  {
    path: '',
    component: AddToolPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddToolPageRoutingModule {}
