import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { LayoutsComponent } from './layouts.component';
import { HeadersComponent } from './headers/headers.component';

@NgModule({
  declarations: [LayoutsComponent, HeadersComponent],
  imports: [CommonModule, LayoutsRoutingModule],
})
export class LayoutsModule {}
