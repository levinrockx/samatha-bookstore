import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEditBookComponent } from './dashboard-edit-book.component';

describe('DashboardEditBookComponent', () => {
  let component: DashboardEditBookComponent;
  let fixture: ComponentFixture<DashboardEditBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardEditBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardEditBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
