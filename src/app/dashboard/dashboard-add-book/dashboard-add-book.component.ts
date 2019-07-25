import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../Config/config.service';
import { HttplayerService } from '../../HttpService/httplayer.service';
import Swal from 'sweetalert2';
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
      classes: "myclass custom-class",
      enableCheckAll: false
    },
    {
      singleSelection: true,
      text: "Categories",
      enableSearchFilter: true,
      classes: "myclass custom-class",
      enableCheckAll: false
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

  public dropdownOptions = {
    'author': [],
    'category': []
  };

  public fileSelected: File = null;

  constructor(
    private config: ConfigService,
    private httpLayer: HttplayerService
  ) { }

  ngOnInit() {
    this.getAuthorOptions();
    this.getCategoryOptions();
  }

  getAuthorOptions() {
    const url = `${this.config.API_ENDPOINT}${this.config.API_ENDPOINT_NAMES.authorall}`;
    this.httpLayer.get(url).subscribe((response) => {
      this.dropdownOptions['author'] = response['data'];
    });
  }

  getCategoryOptions() {
    const url = `${this.config.API_ENDPOINT}${this.config.API_ENDPOINT_NAMES.categoryall}`;
    this.httpLayer.get(url).subscribe((response) => {
      this.dropdownOptions['category'] = response['data'];
    });
  }

  selectedFile(event) {
    console.log(event);
    this.fileSelected = <File>event.target.files[0];
  }

  addBook() {
    this.addBookImage();
  }

  addBookImage() {
    const url = `${this.config.API_ENDPOINT}${this.config.API_ENDPOINT_NAMES.addbookimage}`;
    const formData = new FormData();
    formData.append('file', this.fileSelected, this.fileSelected.name);
    this.httpLayer.post(url, formData).subscribe((response) => {
      if (response['status'] === 'success') {
        this.addBookDetails();
      }
    });
  }

  addBookDetails() {
    const url = `${this.config.API_ENDPOINT}${this.config.API_ENDPOINT_NAMES.addbook}`;
    const body = {
      "title": this.book['title'],
      "description": this.book['description'],
      "author": this.book['author']['itemName'],
      "category": this.book['category'][0]['itemName'],
      "price": this.book['price'],
      "image": this.fileSelected.name,
      "edition": this.book['edition']
    }
    this.httpLayer.post(url, body).subscribe((response) => {
      if (response['status'] === 'success') {
        Swal.fire({
          title: 'Success',
          text: `${this.book['title']} added successfully`,
          type: 'success',
        });
        this.clear();
      }
    });
  }

  clear() {
    this.book = {
      'title': '',
      'description': '',
      'author': '',
      'category': '',
      'price': '',
      'edition': ''
    };
  }

}
