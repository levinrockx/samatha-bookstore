import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { ConfigService } from '../../Config/config.service';
import { HttplayerService } from '../../HttpService/httplayer.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  public categoryName = 'Autobiography';
  public searchKeyword = '';
  public showResults = false;
  public bookList = [];
  constructor(
    private searchService: SearchService,
    private config: ConfigService,
    private router: Router,
    private httpLayer: HttplayerService
  ) { }

  ngOnInit() {
    this.getSearchKeyword();
  }

  reRoute(route) {
    this.router.navigate([route]);
  }

  getSearchKeyword() {
    this.searchService.getSearchKeyWord().subscribe((response) => {
      this.searchKeyword = response;
      if (this.searchKeyword !== '') {
        this.search();
      }
    });
  }

  search() {
    this.showResults = false;
    const url = `${this.config.API_ENDPOINT}${this.config.API_ENDPOINT_NAMES.search}`;
    const body = {
      'keyword': this.searchKeyword
    };
    this.httpLayer.post(url, body).subscribe((response) => {
      if (response['status'] === 'success') {
        this.bookList = response['data'];
      }
    });
  }

}
