import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimelineEndPageRoutingModule } from './timeline-end-routing.module';

import { TimelineEndPage } from './timeline-end.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimelineEndPageRoutingModule
  ],
  declarations: [TimelineEndPage]
})
export class TimelineEndPageModule {}
