import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-edit-book',
  templateUrl: './dashboard-edit-book.component.html',
  styleUrls: ['./dashboard-edit-book.component.scss']
})
export class DashboardEditBookComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  constructor() { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

}
