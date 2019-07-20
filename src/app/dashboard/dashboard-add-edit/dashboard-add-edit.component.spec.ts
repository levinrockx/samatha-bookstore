import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAddEditComponent } from './dashboard-add-edit.component';

describe('DashboardAddEditComponent', () => {
  let component: DashboardAddEditComponent;
  let fixture: ComponentFixture<DashboardAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
