import { Component, OnInit, Input, OnChanges, SimpleChanges, ElementRef, ViewChild } from '@angular/core';
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
  public imgWidth;
  public imgPadding = 15;
  @Input('book') bookObj: any;
  @ViewChild('cardMain', { static: true }) cardMain: ElementRef;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.setBookData();
    this.setImgWidth();
  }

  setImgWidth() {
    this.imgWidth = this.cardMain.nativeElement.offsetWidth;
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
