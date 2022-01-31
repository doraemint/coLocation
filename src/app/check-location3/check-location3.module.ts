import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckLocation3PageRoutingModule } from './check-location3-routing.module';

import { CheckLocation3Page } from './check-location3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckLocation3PageRoutingModule
  ],
  declarations: [CheckLocation3Page]
})
export class CheckLocation3PageModule {}
