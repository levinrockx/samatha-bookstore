import { Component, OnInit } from '@angular/core';
import { faHome, faUsersCog, faCogs, faPowerOff } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.scss']
})
export class DashboardSidebarComponent implements OnInit {
  public faHome = faHome;
  public faUsersCog = faUsersCog;
  public faCogs = faCogs;
  public faPowerOff = faPowerOff;
  public selectedLink = 0;

  constructor() { }

  ngOnInit() {
  }

  navSelection(id) {
    this.selectedLink = id;
  }

}
