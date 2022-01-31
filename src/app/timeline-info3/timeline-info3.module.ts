import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimelineInfo3PageRoutingModule } from './timeline-info3-routing.module';

import { TimelineInfo3Page } from './timeline-info3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimelineInfo3PageRoutingModule
  ],
  declarations: [TimelineInfo3Page]
})
export class TimelineInfo3PageModule {}
