import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttplayerService } from '../../HttpService/httplayer.service';
import { ConfigService } from '../../Config/config.service';
@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {
  public categoryName;
  public categoryNumber;
  public categoryId;
  public bookList = [];
  constructor(
    private route: ActivatedRoute,
    private httpLayer: HttplayerService,
    private config: ConfigService
  ) { }

  ngOnInit() {
    this.getCategoryId();
  }

  getCategoryId() {
    this.route.params.subscribe(params => {
      this.categoryId = params.id;
      this.getCategoryBooks();
    });
  }
  getCategoryBooks() {
    const url = `${this.config.API_ENDPOINT}${this.config.API_ENDPOINT_NAMES.category}`;
    const body = {
      'id': this.categoryId
    }
    this.httpLayer.post(url, body).subscribe((response) => {
      if (response['status'] === 'success') {
        // console.log(response);
        this.categoryName = response['data']['category_name'];
        this.bookList = response['data']['books'];
      }
    })
  }

}
