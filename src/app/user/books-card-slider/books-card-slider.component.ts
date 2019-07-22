import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-books-card-slider',
  templateUrl: './books-card-slider.component.html',
  styleUrls: ['./books-card-slider.component.scss']
})
export class BooksCardSliderComponent implements OnInit, OnChanges {
  public cardHeading;
  public faArrowLeft = faArrowLeft;
  public faArrowRight = faArrowRight;
  @Input('books') bookObj: any;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.cardHeading = this.bookObj['category_name'];
  }

}
