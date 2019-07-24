import { Component, OnInit, Input, OnChanges, SimpleChanges, ElementRef, ViewChild } from '@angular/core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounceIn } from 'ng-animate';
import { bounceOut } from 'ng-animate';
@Component({
  selector: 'app-books-card-slider',
  templateUrl: './books-card-slider.component.html',
  styleUrls: ['./books-card-slider.component.scss'],
  animations: [
    trigger('bounceIn', [transition('* => *', useAnimation(bounceIn))]),
    trigger('bounceOut', [transition('* => *', useAnimation(bounceOut))])
  ],
})
export class BooksCardSliderComponent implements OnInit, OnChanges {
  public bounceIn: any;
  public cardHeading;
  public faArrowLeft = faArrowLeft;
  public faArrowRight = faArrowRight;
  public bookList = [];
  public sliderList = [];
  public sliderVar = 0;
  public siderShowVar = 3;
  @ViewChild('sliderMain', { static: true }) sliderMain: ElementRef;
  @Input('books') bookObj: any;
  constructor() { }

  ngOnInit() {
    this.setSliderShowVar();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.cardHeading = this.bookObj[' category_name'];
    this.bookList = this.bookObj[' books'];
    this.setSliderShowVar();
    this.setSliderList(0);
  }

  setSliderShowVar() {
    let width = this.sliderMain.nativeElement.offsetWidth;
    if (width < 630) {
      this.sliderList = [];
      this.siderShowVar = 2;
      this.sliderVar = 0;
      this.setSliderList(this.sliderVar);
    } else if (width >= 630) {
      this.sliderList = [];
      this.siderShowVar = 3;
      this.sliderVar = 0;
      this.setSliderList(this.sliderVar);
    }
  }

  setSliderList(start) {
    if (this.bookList.length > this.siderShowVar) {
      this.sliderList = [];
      for (let i = start; i < (start + this.siderShowVar); i++) {
        this.sliderList.push(this.bookList[i]);
      }
    } else {
      this.sliderList = this.bookList;
    }
  }

  leftArrowClick() {
    if (this.sliderVar > 0) {
      this.sliderVar--;
    }
    this.setSliderList(this.sliderVar);
  }

  rightArrowClick() {
    if (this.sliderVar < (this.bookList.length - this.siderShowVar)) {
      this.sliderVar++;
    }
    this.setSliderList(this.sliderVar);
  }

}
