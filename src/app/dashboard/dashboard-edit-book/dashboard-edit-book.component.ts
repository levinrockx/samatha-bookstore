import { Component, OnInit } from '@angular/core';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { HttplayerService } from '../../HttpService/httplayer.service';
import { ConfigService } from '../../Config/config.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-dashboard-edit-book',
  templateUrl: './dashboard-edit-book.component.html',
  styleUrls: ['./dashboard-edit-book.component.scss']
})
export class DashboardEditBookComponent implements OnInit {
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
  public dropdownOptions = {
    'author': [],
    'category': []
  };
  dtOptions: DataTables.Settings = {};
  public faPencilAlt = faPencilAlt;
  public faTrash = faTrash;
  public book = {
    'title': '',
    'description': '',
    'author': [{}],
    'category': [{}],
    'price': '',
    'edition': '',
    'image': '',
  };
  public bookList = [];
  public bookListCopy = [];
  public fileSelected: File = null;
  public imageChanged = false;
  constructor(
    private httpLayer: HttplayerService,
    private config: ConfigService,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.getAuthorOptions();
    this.getCategoryOptions();
    this.getBookDetails();
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

  getBookDetails() {
    this.bookList = [];
    const url = `${this.config.API_ENDPOINT}${this.config.API_ENDPOINT_NAMES.bookall}`;
    this.httpLayer.get(url).subscribe((response) => {
      // console.log(response['data']['categories']);
      for (let bookObj of response['data']['categories']) {
        for (let books of bookObj['books']) {
          this.bookList.push(books);
        }
      }
    });
  }

  openModal(modalId) {
    this.modalService.open(modalId, {
      size: 'lg',
      centered: true,
    });
  }

  openEditModal(index, modalId) {
    this.imageChanged = false;
    this.bookListCopy = JSON.parse(JSON.stringify(this.bookList));
    this.book = this.bookListCopy[index];
    for (let category of this.dropdownOptions['category']) {
      if (this.bookListCopy[index]['category'] === category['itemName']) {
        const list = [];
        list.push(category)
        this.book['category'] = list;
      }
    }
    for (let author of this.dropdownOptions['author']) {
      if (this.bookListCopy[index]['author'] === author['itemName']) {
        const list = [];
        list.push(author)
        this.book['author'] = list;
      }
    }
    // console.log(this.book);
    this.openModal(modalId);
  }

  selectedFile(event) {
    this.imageChanged = true;
    this.fileSelected = <File>event.target.files[0];
  }

  editBook() {
    if (this.imageChanged) {
      this.addBookImage();
    } else {
      this.updateBookDetails();
    }
  }

  addBookImage() {
    const url = `${this.config.API_ENDPOINT}${this.config.API_ENDPOINT_NAMES.addbookimage}`;
    const formData = new FormData();
    formData.append('file', this.fileSelected, this.fileSelected.name);
    this.httpLayer.post(url, formData).subscribe((response) => {
      if (response['status'] === 'success') {
        this.book['image'] = this.fileSelected.name;
        this.updateBookDetails();
      }
    });
  }

  updateBookDetails() {
    const url = `${this.config.API_ENDPOINT}${this.config.API_ENDPOINT_NAMES.editbook}`;
    const body = {
      'id': this.book['_id']['$oid'],
      'title': this.book['title'],
      'description': this.book['description'],
      'author': this.book['author'][0]['itemName'],
      'category': this.book['category'][0]['itemName'],
      'price': this.book['price'],
      'edition': this.book['edition'],
      'image': this.book['image'],
    }
    this.httpLayer.post(url, body).subscribe((response) => {
      if (response['status'] === 'success') {
        this.getBookDetails();
        Swal.fire({
          title: 'Success',
          text: `${this.book['title']} updated successfully`,
          type: 'success',
        });
        this.modalService.dismissAll();
      }
    });
  }

  openDeleteModal(index, modalId) {
    this.bookListCopy = JSON.parse(JSON.stringify(this.bookList));
    this.book = this.bookListCopy[index];
    this.openModal(modalId);
  }

  deleteBook() {
    const url = `${this.config.API_ENDPOINT}${this.config.API_ENDPOINT_NAMES.deletebook}`;
    const body = {
      'id': this.book['_id']['$oid'],
    }
    this.httpLayer.post(url, body).subscribe((response) => {
      if (response['status'] === 'success') {
        this.getBookDetails();
        Swal.fire({
          title: 'Success',
          text: `${this.book['title']} deleted successfully`,
          type: 'success',
        });
        this.modalService.dismissAll();
      }
    });
  }

}
