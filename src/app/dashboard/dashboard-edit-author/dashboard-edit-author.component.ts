import { Component, OnInit } from '@angular/core';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-dashboard-edit-author',
  templateUrl: './dashboard-edit-author.component.html',
  styleUrls: ['./dashboard-edit-author.component.scss']
})
export class DashboardEditAuthorComponent implements OnInit {
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
