import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAddBookComponent } from './dashboard-add-book.component';

describe('DashboardAddBookComponent', () => {
  let component: DashboardAddBookComponent;
  let fixture: ComponentFixture<DashboardAddBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardAddBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAddBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
