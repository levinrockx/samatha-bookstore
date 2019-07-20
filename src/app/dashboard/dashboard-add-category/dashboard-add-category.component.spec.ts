import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAddCategoryComponent } from './dashboard-add-category.component';

describe('DashboardAddCategoryComponent', () => {
  let component: DashboardAddCategoryComponent;
  let fixture: ComponentFixture<DashboardAddCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardAddCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAddCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
