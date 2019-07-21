import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-card-slider',
  templateUrl: './books-card-slider.component.html',
  styleUrls: ['./books-card-slider.component.scss']
})
export class BooksCardSliderComponent implements OnInit {
  public cardHeading = 'Popular books';
  constructor() { }

  ngOnInit() {
  }

}
