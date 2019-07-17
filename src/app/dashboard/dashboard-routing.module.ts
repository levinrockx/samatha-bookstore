import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildrenOutletContexts } from '@angular/router';
import { DashboardlandingComponent } from './dashboardlanding/dashboardlanding.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardlandingComponent,
    children: [],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
