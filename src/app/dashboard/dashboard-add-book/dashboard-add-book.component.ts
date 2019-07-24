import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-dashboard-add-book',
  templateUrl: './dashboard-add-book.component.html',
  styleUrls: ['./dashboard-add-book.component.scss']
})
export class DashboardAddBookComponent implements OnInit {
  public dropdownSettingsList = [
    {
      singleSelection: true,
      text: "Authors",
      enableSearchFilter: true,
      classes: "myclass custom-class"
    },
    {
      singleSelection: false,
      text: "Categories",
      enableSearchFilter: true,
      classes: "myclass custom-class"
    }
  ];

  public book = {
    'title': '',
    'description': '',
    'author': '',
    'category': '',
    'price': '',
    'edition': ''
  };

  public dropdownOptions = [];
  
  constructor() { }

  ngOnInit() {
  }

}
