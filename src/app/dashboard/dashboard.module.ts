import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardlandingComponent } from './dashboardlanding/dashboardlanding.component';
import { DashboardSidebarComponent } from './dashboard-sidebar/dashboard-sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DataTablesModule } from 'angular-datatables';
import { DashboardAddComponent } from './dashboard-add/dashboard-add.component';
import { DashboardEditComponent } from './dashboard-edit/dashboard-edit.component';
import { DashboardAddBookComponent } from './dashboard-add-book/dashboard-add-book.component';
import { DashboardEditBookComponent } from './dashboard-edit-book/dashboard-edit-book.component';
import { DashboardAddAuthorComponent } from './dashboard-add-author/dashboard-add-author.component';
import { DashboardEditAuthorComponent } from './dashboard-edit-author/dashboard-edit-author.component';
import { DashboardAddCategoryComponent } from './dashboard-add-category/dashboard-add-category.component';
import { DashboardEditCategoryComponent } from './dashboard-edit-category/dashboard-edit-category.component';
import { VersionComponent } from './version/version.component';
import { HttplayerService } from '../HttpService/httplayer.service';
import { ConfigService } from '../Config/config.service';
import { FormsModule } from '@angular/forms';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
@NgModule({
  declarations: [
    DashboardlandingComponent,
    DashboardSidebarComponent,
    DashboardComponent,
    DashboardAddComponent,
    DashboardEditComponent,
    DashboardAddBookComponent,
    DashboardEditBookComponent,
    DashboardAddAuthorComponent,
    DashboardEditAuthorComponent,
    DashboardAddCategoryComponent,
    DashboardEditCategoryComponent,
    VersionComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    FontAwesomeModule,
    DataTablesModule,
    AngularMultiSelectModule
  ],
  providers: [HttplayerService, ConfigService],
})
export class DashboardModule { }
