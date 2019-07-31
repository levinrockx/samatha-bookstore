import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @ViewChild('banner', { static: true }) banner: ElementRef;
  public imageWidth;
  public imageList = [
    {
      'id': '5d39b9b12920f400ab888395',
      'bookName': 'I, Rigoberta Menchu [Njan Rigoberta Menchu] Rigoberta Menchu',
      'imageName': 'banner-image.jpg'
    },
    {
      'id': '5d3c4bc58b8848e66c016323',
      'bookName': 'Che Guevara :My Comrade in Life',
      'imageName': 'banner-image1.jpg'
    },
    {
      'id': '5d39b8b42920f400ab888394',
      'bookName': 'To the Workfare – A Study as a Play and a Historical movement',
      'imageName': 'banner-image2.jpg'
    },
  ];
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.getBannerWidth();
  }

  getBannerWidth() {
    this.imageWidth = this.banner.nativeElement.offsetWidth;
  }

  bookRoute(id) {
    const url = `user/bookpage/${id}`;
    this.reRoute(url);
  }

  reRoute(route) {
    this.router.navigate([route]);
  }
}
