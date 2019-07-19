import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  public selectedLink = 1;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  navSelection(id, route) {
    this.selectedLink = id;
    this.reRoute(route);
  }

  reRoute(route) {
    this.router.navigate([route]);
  }

}
