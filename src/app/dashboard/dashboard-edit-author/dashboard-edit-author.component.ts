import { Component, OnInit } from '@angular/core';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { HttplayerService } from '../../HttpService/httplayer.service';
import { ConfigService } from '../../Config/config.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-dashboard-edit-author',
  templateUrl: './dashboard-edit-author.component.html',
  styleUrls: ['./dashboard-edit-author.component.scss']
})
export class DashboardEditAuthorComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  public faPencilAlt = faPencilAlt;
  public faTrash = faTrash;
  public authorList = [];
  public authorName = '';
  public selecteObj = {};
  constructor(
    private httpLayer: HttplayerService,
    private config: ConfigService,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.getAuthorDetails();
  }

  getAuthorDetails() {
    const url = `${this.config.API_ENDPOINT}${this.config.API_ENDPOINT_NAMES.authorall}`;
    this.httpLayer.get(url).subscribe((response) => {
      this.authorList = response['data'];
    });
  }

  openModal(modalId) {
    this.modalService.open(modalId, {
      size: 'lg',
      centered: true,
    });
  }

  openEditModal(authorObj, modalId) {
    this.selecteObj = authorObj;
    this.authorName = authorObj['itemName'];
    this.openModal(modalId);
  }

  openDeleteModal(authorObj, modalId) {
    this.selecteObj = authorObj;
    this.authorName = authorObj['itemName'];
    this.openModal(modalId);
  }

  editAuthor() {
    const url = `${this.config.API_ENDPOINT}${this.config.API_ENDPOINT_NAMES.editauthor}`;
    let body = {
      'id': this.selecteObj['oid'],
      'author_name': this.authorName,
    };
    this.httpLayer.post(url, body).subscribe((response) => {
      if (response['status'] == 'success') {
        Swal.fire({
          title: 'Success',
          text: `${this.authorName} updated successfully`,
          type: 'success',
        });
        this.getAuthorDetails();
        this.modalService.dismissAll();
      } else {
        Swal.fire({
          title: 'Unsuccesfull',
          text: `${this.authorName} updation failed`,
          type: 'error',
        });
        this.modalService.dismissAll();
      }
    });
  }

  deleteAuthor() {
    const url = `${this.config.API_ENDPOINT}${this.config.API_ENDPOINT_NAMES.deleteauthor}`;
    let body = {
      'id': this.selecteObj['oid'],
    };
    this.httpLayer.post(url, body).subscribe((response) => {
      if (response['status'] == 'success') {
        Swal.fire({
          title: 'Success',
          text: `${this.authorName} deleted successfully`,
          type: 'success',
        });
        this.getAuthorDetails();
        this.modalService.dismissAll();
      } else {
        Swal.fire({
          title: 'Unsuccesfull',
          text: `${this.authorName} deletion failed`,
          type: 'error',
        });
        this.modalService.dismissAll();
      }
    });
  }

}
