import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessComponent } from './business.component';
import { BusinessRoutingModule } from './business-routing.module';
import { ClientComponent } from './client/client.component';

@NgModule({
  declarations: [
    BusinessComponent,
    ClientComponent,
  ],
  imports: [
    CommonModule,
    BusinessRoutingModule,
  ]
})
export class BusinessModule { }
