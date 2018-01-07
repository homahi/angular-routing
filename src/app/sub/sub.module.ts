import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubRoutingModule } from './sub-routing.module';
import { ComponentComponent } from './component/component.component';

@NgModule({
  imports: [
    CommonModule,
    SubRoutingModule
  ],
  declarations: [ComponentComponent]
})
export class SubModule { }
