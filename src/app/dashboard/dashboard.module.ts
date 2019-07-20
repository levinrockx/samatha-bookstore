import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardlandingComponent } from './dashboardlanding/dashboardlanding.component';
import { DashboardSidebarComponent } from './dashboard-sidebar/dashboard-sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardAddEditComponent } from './dashboard-add-edit/dashboard-add-edit.component';
@NgModule({
  declarations: [DashboardlandingComponent, DashboardSidebarComponent, DashboardComponent, DashboardAddEditComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FontAwesomeModule,
  ]
})
export class DashboardModule { }
