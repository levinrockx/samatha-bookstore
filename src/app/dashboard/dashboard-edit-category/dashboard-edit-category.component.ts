import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-edit-category',
  templateUrl: './dashboard-edit-category.component.html',
  styleUrls: ['./dashboard-edit-category.component.scss']
})
export class DashboardEditCategoryComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  constructor() { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

}
