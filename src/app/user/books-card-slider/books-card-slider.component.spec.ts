import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksCardSliderComponent } from './books-card-slider.component';

describe('BooksCardSliderComponent', () => {
  let component: BooksCardSliderComponent;
  let fixture: ComponentFixture<BooksCardSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksCardSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksCardSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
