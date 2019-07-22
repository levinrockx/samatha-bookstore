import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../Config/config.service';
import { HttplayerService } from '../../HttpService/httplayer.service';
@Component({
  selector: 'app-book-store',
  templateUrl: './book-store.component.html',
  styleUrls: ['./book-store.component.scss']
})
export class BookStoreComponent implements OnInit {
  public categoryList = [];
  constructor(
    private config: ConfigService,
    private httpLayer: HttplayerService
  ) { }

  ngOnInit() {
    this.getBookAll();
  }

  getBookAll() {
    const url = `${this.config.API_ENDPOINT}${this.config.API_ENDPOINT_NAMES.bookall}`;
    // this.httpLayer.get(url).subscribe((response) => {
    this.httpLayer.get('assets/json/bookall.json').subscribe((response) => {
      if (response['status'] == 'success') {
        this.categoryList = response['data']['categories'];
      }
    })
  }

}
