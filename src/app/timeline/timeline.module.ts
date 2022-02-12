import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimelinePageRoutingModule } from './timeline-routing.module';

import { TimelinePage } from './timeline.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimelinePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TimelinePage]
})
export class TimelinePageModule {}
