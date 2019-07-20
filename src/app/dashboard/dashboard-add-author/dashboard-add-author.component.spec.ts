import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAddAuthorComponent } from './dashboard-add-author.component';

describe('DashboardAddAuthorComponent', () => {
  let component: DashboardAddAuthorComponent;
  let fixture: ComponentFixture<DashboardAddAuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardAddAuthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAddAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
