import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-featured-book',
  templateUrl: './featured-book.component.html',
  styleUrls: ['./featured-book.component.scss']
})
export class FeaturedBookComponent implements OnInit {
  public title;
  public price;
  public author;
  public edition;
  public content;
  public imgWidth;
  @ViewChild('leftCard', { static: true }) leftCard: ElementRef;
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.setImgWidth();
  }

  setImgWidth() {
    this.imgWidth = this.leftCard.nativeElement.offsetWidth;
  }

  getBookDetails() {

  }

  reRoute(route) {
    this.router.navigate([route]);
  }

}
