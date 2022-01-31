import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckLocationPage } from './check-location.page';

const routes: Routes = [
  {
    path: '',
    component: CheckLocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckLocationPageRoutingModule {}
