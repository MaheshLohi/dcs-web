import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { FuseCardModule } from '@fuse/components/card';

const dashboardRoutes: Route[] = [
  {
      path     : '',
      component: DashboardComponent
  }
];

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports     : [
      RouterModule.forChild(dashboardRoutes),
      MatIconModule,
      FuseCardModule,
  ]
})

export class DashboardModule {

}
