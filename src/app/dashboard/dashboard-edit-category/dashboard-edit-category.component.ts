import { Component, OnInit } from '@angular/core';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard-edit-category',
  templateUrl: './dashboard-edit-category.component.html',
  styleUrls: ['./dashboard-edit-category.component.scss']
})
export class DashboardEditCategoryComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  public faPencilAlt = faPencilAlt;
  public faTrash = faTrash;
  constructor() { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

}
