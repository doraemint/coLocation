import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckLocation2PageRoutingModule } from './check-location2-routing.module';

import { CheckLocation2Page } from './check-location2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckLocation2PageRoutingModule
  ],
  declarations: [CheckLocation2Page]
})
export class CheckLocation2PageModule {}
