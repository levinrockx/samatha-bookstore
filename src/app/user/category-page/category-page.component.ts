import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {
  public categoryName = 'Autobiography';
  public categoryNumber = '60';
  constructor() { }

  ngOnInit() {
  }

}
