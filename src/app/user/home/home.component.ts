import { Component, OnInit } from '@angular/core';
import { HttplayerService } from '../../HttpService/httplayer.service';
import { ConfigService } from '../../Config/config.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public categoryList = [];
  constructor(
    private httpLayer: HttplayerService,
    private config: ConfigService,
  ) { }

  ngOnInit() {
    this.getBookAll();
  }

  getBookAll() {
    const url = `${this.config.API_ENDPOINT}${this.config.API_ENDPOINT_NAMES.bookall}`;
    // this.httpLayer.get(url).subscribe((response) => {
    this.httpLayer.get('assets/json/bookall.json').subscribe((response) => {
      if(response['status']=='success'){
        this.categoryList = response['data']['categories'];
      }
    });
  }

}
