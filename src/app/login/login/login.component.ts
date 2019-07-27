import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../Config/config.service';
import { HttplayerService } from '../../HttpService/httplayer.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username = '';
  public password = '';
  constructor(
    private config: ConfigService,
    private httpLayer: HttplayerService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.logincheck();
  }

  logincheck() {
    const tocken = localStorage.getItem('tocken');
    if (tocken === 'samathaadmin') {
      this.reRoute('/admin');
    }
  }

  login() {
    const url = `${this.config.API_ENDPOINT}${this.config.API_ENDPOINT_NAMES.login}`;
    const body = {
      'username': this.username,
      'password': this.password,
    };
    this.httpLayer.post(url, body).subscribe((response) => {
      if (response['status'] === 'success') {
        localStorage.setItem(this.config.TOCKEN.keyname, this.config.TOCKEN.keyvalue);
        this.reRoute('/admin')
      } else {
        Swal.fire({
          title: 'Login Failed',
          text: 'Please try again',
          type: 'error',
        });
      }
    });
  }

  reRoute(route) {
    this.router.navigate([route]);
  }

}
