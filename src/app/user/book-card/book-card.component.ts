import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit, OnChanges {
  public imagePath;
  public title;
  public author;
  public price;
  @Input('book') bookObj: any;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.setBookData();
  }

  setBookData() {
    this.imagePath = `assets/img/${this.bookObj['image']}`;
    this.title = this.bookObj['title'];
    this.author = this.bookObj['author'];
    this.price = `₹${this.bookObj['author']}`;
  }

  reRoute(route) {
    this.router.navigate([route]);
  }

}
