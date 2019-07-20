import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-add',
  templateUrl: './dashboard-add.component.html',
  styleUrls: ['./dashboard-add.component.scss']
})
export class DashboardAddComponent implements OnInit {
  public tabSelected = 0;
  constructor() { }

  ngOnInit() {
  }

  selectTab(id) {
    this.tabSelected = id;
  }

}
