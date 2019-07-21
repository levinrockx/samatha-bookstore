import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
  public imagePath = 'assets/img/book.png';
  public title = 'വി. ആർ. കൃഷ്ണയ്യർ -നീതിയുടെ പോരാളി';
  public author = 'samatha books';
  public price = '₹2,921';
  constructor() { }

  ngOnInit() {
  }

}
