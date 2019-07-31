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
      'id': '5d3c4bc58b8848e66c016323',
      'bookName': 'Che Guevara :My Comrade in Life',
      'imageName': 'banner-image1.jpg'
    },
    {
      'id': '5d418745616d1a7ebd07e40d',
      'bookName': 'ചോരയും കണ്ണീരും നനഞ്ഞ വഴികള്‍',
      'imageName': 'banner-image4.jpg'
    },
    {
      'id': '5d39c29c2920f400ab8883aa',
      'bookName': 'ചുകന്ന റോസ : റോസ ലക്സംബർഗ് : ജീവിതവും ദര്‍ശനവും',
      'imageName': 'banner-image3.jpg'
    },
    {
      'id': '5d4168ad616d1a7ebd07e40c',
      'bookName': 'Hortus Malabaricus/ The Malabar Garden 2 nd edition',
      'imageName': 'banner-image5.jpg'
    },
    {
      'id': '5d40319f9a022b9bf79507f4',
      'bookName': 'Amazon: A Study on the Invasion of Jungles',
      'imageName': 'banner-image6.jpg'
    },
    {
      'id': '5d39b9b12920f400ab888395',
      'bookName': 'I, Rigoberta Menchu [Njan Rigoberta Menchu] Rigoberta Menchu',
      'imageName': 'banner-image.jpg'
    },
    {
      'id': '5d39b8b42920f400ab888394',
      'bookName': 'To the Workfare – A Study as a Play and a Historical movement',
      'imageName': 'banner-image2.jpg'
    }
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
