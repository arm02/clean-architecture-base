import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      {
        path: 'pages',
        loadChildren: () =>
          import('../pages/pages.module').then((m) => m.PagesModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutsRoutingModule {}
