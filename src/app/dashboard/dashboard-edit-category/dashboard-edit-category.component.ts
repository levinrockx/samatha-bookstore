import { Component, OnInit } from '@angular/core';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { HttplayerService } from '../../HttpService/httplayer.service';
import { ConfigService } from '../../Config/config.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-dashboard-edit-category',
  templateUrl: './dashboard-edit-category.component.html',
  styleUrls: ['./dashboard-edit-category.component.scss']
})
export class DashboardEditCategoryComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  public faPencilAlt = faPencilAlt;
  public faTrash = faTrash;
  public categoryList = [];
  public categoryName = '';
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
    this.getCategoryDetails();
  }

  getCategoryDetails() {
    const url = `${this.config.API_ENDPOINT}${this.config.API_ENDPOINT_NAMES.categoryall}`;
    this.httpLayer.get(url).subscribe((response) => {
      this.categoryList = response['data'];
    });
  }

  openModal(modalId) {
    this.modalService.open(modalId, {
      size: 'lg',
      centered: true,
    });
  }

  openEditModal(categoryObj, modalId) {
    this.selecteObj = categoryObj;
    this.categoryName = categoryObj['itemName'];
    this.openModal(modalId);
  }

  openDeleteModal(categoryObj, modalId) {
    this.selecteObj = categoryObj;
    this.categoryName = categoryObj['itemName'];
    this.openModal(modalId);
  }

  editCategory() {
    const url = `${this.config.API_ENDPOINT}${this.config.API_ENDPOINT_NAMES.editcategory}`;
    let body = {
      'id': this.selecteObj['oid'],
      'category_name': this.categoryName,
    };
    this.httpLayer.post(url, body).subscribe((response) => {
      if (response['status'] == 'success') {
        Swal.fire({
          title: 'Success',
          text: `${this.categoryName} updated successfully`,
          type: 'success',
        });
        this.getCategoryDetails();
        this.modalService.dismissAll();
      } else {
        Swal.fire({
          title: 'Unsuccesfull',
          text: `${this.categoryName} updation failed`,
          type: 'error',
        });
        this.modalService.dismissAll();
      }
    });
  }

  deleteCategory() {
    const url = `${this.config.API_ENDPOINT}${this.config.API_ENDPOINT_NAMES.deletecategory}`;
    let body = {
      'id': this.selecteObj['oid'],
    };
    this.httpLayer.post(url, body).subscribe((response) => {
      if (response['status'] == 'success') {
        Swal.fire({
          title: 'Success',
          text: `${this.categoryName} deleted successfully`,
          type: 'success',
        });
        this.getCategoryDetails();
        this.modalService.dismissAll();
      } else {
        Swal.fire({
          title: 'Unsuccesfull',
          text: `${this.categoryName} deletion failed`,
          type: 'error',
        });
        this.modalService.dismissAll();
      }
    });
  }

}
