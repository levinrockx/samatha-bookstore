import { Component, OnInit } from '@angular/core';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { SearchService } from '../search.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public headerresponsivestatus: Boolean = false;
  public faBars = faBars;
  public faSearch = faSearch;
  public searchKeyword = '';
  constructor(
    private router: Router,
    private serachService: SearchService
  ) { }

  ngOnInit() {
  }

  responsiveHeader() {
    this.headerresponsivestatus = !this.headerresponsivestatus;
  }

  reRoute(route) {
    this.close();
    this.router.navigate([route]);
  }

  search() {
    this.serachService.setSearchKeyWord(this.searchKeyword);
    this.reRoute('user/search');
  }

  close() {
    this.headerresponsivestatus = false;
  }

}
