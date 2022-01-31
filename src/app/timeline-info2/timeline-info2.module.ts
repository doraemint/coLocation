import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimelineInfo2PageRoutingModule } from './timeline-info2-routing.module';

import { TimelineInfo2Page } from './timeline-info2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimelineInfo2PageRoutingModule
  ],
  declarations: [TimelineInfo2Page]
})
export class TimelineInfo2PageModule {}
