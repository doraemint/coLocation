import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimelineInfo2Page } from './timeline-info2.page';

const routes: Routes = [
  {
    path: '',
    component: TimelineInfo2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimelineInfo2PageRoutingModule {}
