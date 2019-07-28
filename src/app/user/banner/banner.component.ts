import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  public imgWidth;
  @ViewChild('banner', { static: true }) banner: ElementRef;
  constructor() { }

  ngOnInit() {
    this.setImgWidth();
  }

  setImgWidth() {
    this.imgWidth = this.banner.nativeElement.offsetWidth;
  }

}
