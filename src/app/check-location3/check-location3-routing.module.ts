import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckLocation3Page } from './check-location3.page';

const routes: Routes = [
  {
    path: '',
    component: CheckLocation3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckLocation3PageRoutingModule {}
