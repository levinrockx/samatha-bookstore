import { Component, OnInit } from '@angular/core';
import { faUsersCog } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public faUsersCog = faUsersCog;
  public tabSelected = 0;
  constructor() { }

  ngOnInit() {
  }

  selectTab(id) {
    this.tabSelected = id;
  }

}
