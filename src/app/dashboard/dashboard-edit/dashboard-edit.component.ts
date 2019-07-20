import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-edit',
  templateUrl: './dashboard-edit.component.html',
  styleUrls: ['./dashboard-edit.component.scss']
})
export class DashboardEditComponent implements OnInit {

  public tabSelected = 0;
  constructor() { }

  ngOnInit() {
  }

  selectTab(id) {
    this.tabSelected = id;
  }

}
