import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardlandingComponent } from './dashboardlanding/dashboardlanding.component';
import { DashboardSidebarComponent } from './dashboard-sidebar/dashboard-sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardAddComponent } from './dashboard-add/dashboard-add.component';
import { DashboardEditComponent } from './dashboard-edit/dashboard-edit.component';
@NgModule({
  declarations: [
    DashboardlandingComponent,
    DashboardSidebarComponent,
    DashboardComponent,
    DashboardAddComponent,
    DashboardEditComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FontAwesomeModule,
  ]
})
export class DashboardModule { }
