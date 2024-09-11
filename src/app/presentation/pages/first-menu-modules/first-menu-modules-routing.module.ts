import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstMenuModulesComponent } from './first-menu-modules.component';

const routes: Routes = [
  {
    path: 'first',
    component: FirstMenuModulesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstMenuModulesRoutingModule {}
