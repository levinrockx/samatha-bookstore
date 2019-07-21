import { Component, OnInit } from '@angular/core';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public headerresponsivestatus: Boolean = false;
  public faBars = faBars;
  public faSearch = faSearch;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  responsiveHeader() {
    this.headerresponsivestatus = !this.headerresponsivestatus;
  }

  reRoute(route) {
    this.router.navigate([route]);
  }

}
