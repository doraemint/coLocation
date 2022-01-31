import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimelineEndPage } from './timeline-end.page';

const routes: Routes = [
  {
    path: '',
    component: TimelineEndPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimelineEndPageRoutingModule {}
