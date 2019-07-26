import { Component, OnInit, Input, OnChanges, SimpleChanges, ElementRef, ViewChild } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce } from 'ng-animate';
import { Router } from '@angular/router';
@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
  animations: [
    trigger('bounceOut', [transition('* => *', useAnimation(bounce))])
  ],
})
export class BookCardComponent implements OnInit, OnChanges {
  public bounce: any;
  public bookId;
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
    this.bookId = this.bookObj['_id']['$oid'];
    this.imagePath = `assets/img/${this.bookObj['image']}`;
    this.title = this.bookObj['title'];
    this.author = this.bookObj['author'];
    this.price = `₹${this.bookObj['price']}`;
  }

  routeBookId(id) {
    const route = `user/bookpage/${id}`;
    this.reRoute(route);
  }

  reRoute(route) {
    this.router.navigate([route]);
  }

}
