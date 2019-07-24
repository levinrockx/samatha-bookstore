import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss']
})
export class BookPageComponent implements OnInit {
  public imagePath = 'assets/img/book.png';
  public title = 'The History of Alappuzha: Travels on the roads of Red Clay';
  public price = '₹100.00';
  public category = 'Memories';
  public author = 'Author';
  public edition = 'First';
  public language = ' Malayalam';
  public content = 'The history of Alappuzha named Chemmanninle Nattuvazhikal edited by G. Sasidharan Pillai is a galleria of the beauty and heritage of one of the most beautiful district of Kerala. Alappuzha is enriched by the heritage of coir, fishes and boat races. The far reaching Vembanad lake is a feast to the eyes. The mouth watering food of Alappuzha attracts many to this place. Undoubtedly it can be  assured that this book on the Venice of the East , as Alappuzha is called, a guide to the travelers.  More over this is a historical footage on how the place is marked in the political and cultural renaissance of Kerala';
  public publisher = 'Samatha';
  constructor() { }

  ngOnInit() {
  }

}
