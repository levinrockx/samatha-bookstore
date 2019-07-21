import { Component, OnInit } from '@angular/core';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-dashboard-edit-book',
  templateUrl: './dashboard-edit-book.component.html',
  styleUrls: ['./dashboard-edit-book.component.scss']
})
export class DashboardEditBookComponent implements OnInit {
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
