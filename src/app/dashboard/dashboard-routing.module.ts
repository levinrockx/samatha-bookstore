import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildrenOutletContexts } from '@angular/router';
import { DashboardlandingComponent } from './dashboardlanding/dashboardlanding.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardlandingComponent,
    children: [
      {
        path: '',
        redirectTo: "dashboard",
        pathMatch: "full",
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
