import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEditCategoryComponent } from './dashboard-edit-category.component';

describe('DashboardEditCategoryComponent', () => {
  let component: DashboardEditCategoryComponent;
  let fixture: ComponentFixture<DashboardEditCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardEditCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardEditCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
