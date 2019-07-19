import { Component, OnInit } from '@angular/core';
import { faBars, faSearch  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public headerresponsivestatus: Boolean = false;
  public faBars = faBars;
  public faSearch = faSearch;
  constructor() { }

  ngOnInit() {
  }

  responsiveHeader() {
    this.headerresponsivestatus = !this.headerresponsivestatus;
  }

}
