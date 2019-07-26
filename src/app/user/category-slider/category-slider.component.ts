import { Component, OnInit } from '@angular/core';
import { faPenNib, faHandHoldingHeart, faUserGraduate, faBookReader, faChild, faMusic } from '@fortawesome/free-solid-svg-icons';
import { faPlayCircle, faIdBadge } from '@fortawesome/free-regular-svg-icons';
import { Router } from '@angular/router';
import { ConfigService } from '../../Config/config.service';
import { HttplayerService } from '../../HttpService/httplayer.service';
@Component({
  selector: 'app-category-slider',
  templateUrl: './category-slider.component.html',
  styleUrls: ['./category-slider.component.scss']
})
export class CategorySliderComponent implements OnInit {
  public faPenNib = faPenNib;
  public faPlayCircle = faPlayCircle;
  public handHoldingHeart = faHandHoldingHeart;
  public faUserGraduate = faUserGraduate;
  public faBookReader = faBookReader;
  public faIdBadge = faIdBadge;
  public faChild = faChild;
  public faMusic = faMusic;
  public categoryList = [];
  constructor(
    private router: Router,
    private config: ConfigService,
    private httpLayer: HttplayerService
  ) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    const url = `${this.config.API_ENDPOINT}${this.config.API_ENDPOINT_NAMES.categoryall}`;
    this.httpLayer.get(url).subscribe((response) => {
      this.categoryList = response['data'];
      // console.log(this.categoryList);
    });
  }

  routeCategory(id) {
    let route = `user/categorypage/${id}`;
    this.reRoute(route);
  }

  reRoute(route) {
    this.router.navigate([route]);
  }

}
