import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboardlanding',
  templateUrl: './dashboardlanding.component.html',
  styleUrls: ['./dashboardlanding.component.scss']
})
export class DashboardlandingComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.router.navigate(['admin/dashboard']);
  }

}
