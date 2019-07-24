import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../Config/config.service';
import { HttplayerService } from '../../HttpService/httplayer.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-dashboard-add-category',
  templateUrl: './dashboard-add-category.component.html',
  styleUrls: ['./dashboard-add-category.component.scss']
})
export class DashboardAddCategoryComponent implements OnInit {
  public categoryName = '';
  constructor(
    private config: ConfigService,
    private httpLayer: HttplayerService
  ) { }

  ngOnInit() {
  }

  addCategory() {
    const url = `${this.config.API_ENDPOINT}${this.config.API_ENDPOINT_NAMES.addcategory}`;
    let body = {
      'category_name': this.categoryName
    };
    this.httpLayer.post(url, body).subscribe((response) => {
      if (response['status'] == 'success') {
        Swal.fire({
          title: 'Success',
          text: `${this.categoryName} added successfully`,
          type: 'success',
        });
        this.categoryName = '';
      } else {
        Swal.fire({
          title: 'Unsuccesfull',
          text: `${this.categoryName} adding failed`,
          type: 'error',
        });
      }
    });
  }

  clear() {
    this.categoryName = '';
  }

}
