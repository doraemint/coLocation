import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckLocation2Page } from './check-location2.page';

const routes: Routes = [
  {
    path: '',
    component: CheckLocation2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckLocation2PageRoutingModule {}
