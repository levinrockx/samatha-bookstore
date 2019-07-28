import { Component, OnInit } from '@angular/core';
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
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  getBookDetails() {
    
  }

  reRoute(route) {
    this.router.navigate([route]);
  }

}
