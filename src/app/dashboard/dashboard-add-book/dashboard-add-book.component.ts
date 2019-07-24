import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../Config/config.service';
import { HttplayerService } from '../../HttpService/httplayer.service';

@Component({
  selector: 'app-dashboard-add-book',
  templateUrl: './dashboard-add-book.component.html',
  styleUrls: ['./dashboard-add-book.component.scss']
})
export class DashboardAddBookComponent implements OnInit {
  public dropdownSettingsList = [
    {
      singleSelection: true,
      text: "Authors",
      enableSearchFilter: true,
      classes: "myclass custom-class",
      enableCheckAll: false
    },
    {
      singleSelection: true,
      text: "Categories",
      enableSearchFilter: true,
      classes: "myclass custom-class",
      enableCheckAll: false
    }
  ];

  public book = {
    'title': '',
    'description': '',
    'author': '',
    'category': '',
    'price': '',
    'edition': '',
    'image': ''
  };

  public dropdownOptions = {
    'author': [],
    'category': []
  };

  constructor(
    private config: ConfigService,
    private httpLayer: HttplayerService
  ) { }

  ngOnInit() {
    this.getAuthorOptions();
    this.getCategoryOptions();
  }

  getAuthorOptions() {
    const url = `${this.config.API_ENDPOINT}${this.config.API_ENDPOINT_NAMES.authorall}`;
    this.httpLayer.get(url).subscribe((response) => {
      this.dropdownOptions['author'] = response['data'];
    });
  }

  getCategoryOptions() {
    const url = `${this.config.API_ENDPOINT}${this.config.API_ENDPOINT_NAMES.categoryall}`;
    this.httpLayer.get(url).subscribe((response) => {
      this.dropdownOptions['category'] = response['data'];
    });
  }

  addBook() {
    const url = `${this.config.API_ENDPOINT}${this.config.API_ENDPOINT_NAMES.addbook}`;
    let body = this.book;
    this.httpLayer.post(url, body).subscribe((response)=>{
      console.log(response);
    })
  }

}
