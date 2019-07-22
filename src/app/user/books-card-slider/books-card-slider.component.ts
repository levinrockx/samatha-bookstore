import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-books-card-slider',
  templateUrl: './books-card-slider.component.html',
  styleUrls: ['./books-card-slider.component.scss']
})
export class BooksCardSliderComponent implements OnInit {
  public cardHeading = 'Popular books';
  public faArrowLeft = faArrowLeft;
  public faArrowRight = faArrowRight;
  constructor() { }

  ngOnInit() {
  }

}
