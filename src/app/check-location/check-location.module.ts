import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckLocationPageRoutingModule } from './check-location-routing.module';

import { CheckLocationPage } from './check-location.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckLocationPageRoutingModule
  ],
  declarations: [CheckLocationPage]
})
export class CheckLocationPageModule {}
