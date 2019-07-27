import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildrenOutletContexts } from '@angular/router';
import { DashboardlandingComponent } from './dashboardlanding/dashboardlanding.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VersionComponent } from './version/version.component';
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
      },
      {
        path: 'settings',
        component: VersionComponent,
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
