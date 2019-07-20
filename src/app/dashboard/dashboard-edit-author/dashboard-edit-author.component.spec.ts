import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEditAuthorComponent } from './dashboard-edit-author.component';

describe('DashboardEditAuthorComponent', () => {
  let component: DashboardEditAuthorComponent;
  let fixture: ComponentFixture<DashboardEditAuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardEditAuthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardEditAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
