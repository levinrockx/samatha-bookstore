import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttplayerService } from '../../HttpService/httplayer.service';
import { ConfigService } from '../../Config/config.service';
@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss']
})
export class BookPageComponent implements OnInit {
  public bookId;
  public imagePath;
  public title;
  public price;
  public category;
  public author;
  public edition;
  public language;
  public description;
  public imageWidth = 0;
  // public publisher;
  @ViewChild('leftCard', { static: true }) leftCard: ElementRef;
  constructor(
    private route: ActivatedRoute,
    private httpLayer: HttplayerService,
    private config: ConfigService
  ) { }

  ngOnInit() {
    this.getBookId();
    this.getBookDetails();
  }

  getBookId() {
    this.route.params.subscribe(params => {
      this.bookId = params.id;
    });
  }

  getBookDetails() {
    const url = `${this.config.API_ENDPOINT}${this.config.API_ENDPOINT_NAMES.book}`;
    let body = {
      'id': this.bookId
    }
    this.httpLayer.post(url, body).subscribe((response) => {
      // console.log(response);
      this.title = response['data']['title'];
      this.author = response['data']['author'];
      this.category = response['data']['category'];
      this.description = response['data']['description'];
      this.edition = response['data']['edition'];
      this.price = response['data']['price'];
      this.imagePath = `assets/img/${response['data']['image']}`;
      this.getImageWidth();
    });
  }

  getImageWidth() {
    this.imageWidth = this.leftCard.nativeElement.offsetWidth;
  }

}
