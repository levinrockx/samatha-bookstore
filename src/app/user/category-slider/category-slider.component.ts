import { Component, OnInit } from '@angular/core';
import { faPenNib, faHandHoldingHeart, faUserGraduate, faBookReader,faChild,faMusic } from '@fortawesome/free-solid-svg-icons';
import { faPlayCircle, faIdBadge } from '@fortawesome/free-regular-svg-icons';
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
  constructor() { }

  ngOnInit() {
  }

}
