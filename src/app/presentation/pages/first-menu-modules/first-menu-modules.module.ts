import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstMenuModulesRoutingModule } from './first-menu-modules-routing.module';
import { FirstMenuModulesComponent } from './first-menu-modules.component';
import { FeatureFirstMenuComponent } from './feature-first-menu/feature-first-menu.component';
import { FormsModule } from '@angular/forms';
import { TableSimpleModule } from 'src/app/core/helpers/components/table/table-simple/table-simple.module';

@NgModule({
  declarations: [FirstMenuModulesComponent, FeatureFirstMenuComponent],
  imports: [
    CommonModule,
    FirstMenuModulesRoutingModule,
    FormsModule,
    TableSimpleModule,
  ],
})
export class FirstMenuModulesModule {}
