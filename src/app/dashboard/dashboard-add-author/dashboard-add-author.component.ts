import { Component, OnInit } from '@angular/core';
import { HttplayerService } from '../../HttpService/httplayer.service';
import { ConfigService } from '../../Config/config.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-dashboard-add-author',
  templateUrl: './dashboard-add-author.component.html',
  styleUrls: ['./dashboard-add-author.component.scss']
})
export class DashboardAddAuthorComponent implements OnInit {
  public authorName;
  constructor(
    private config: ConfigService,
    private httpLayer: HttplayerService
  ) { }

  ngOnInit() {
  }

  addAuthor() {
    const url = `${this.config.API_ENDPOINT}${this.config.API_ENDPOINT_NAMES.addauthor}`;
    let body = {
      'author_name': this.authorName
    };
    this.httpLayer.post(url, body).subscribe((response) => {
      if (response['status'] == 'success') {
        Swal.fire({
          title: 'Success',
          text: `${this.authorName} added successfully`,
          type: 'success',
        });
        this.clear();
      } else {
        Swal.fire({
          title: 'Unsuccesfull',
          text: `${this.authorName} adding failed`,
          type: 'error',
        });
      }
    });
  }

  clear() {
    this.authorName = '';
  }


}
