import { Component, OnInit } from '@angular/core';



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
  constructor() { }

  ngOnInit() {
  }

}
