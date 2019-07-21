import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userlanding',
  templateUrl: './userlanding.component.html',
  styleUrls: ['./userlanding.component.scss']
})
export class UserlandingComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    //  this.router.navigate(['/user/home']);
  }

}
