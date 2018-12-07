import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningmoduleComponent } from './planningmodule.component';

describe('PlanningmoduleComponent', () => {
  let component: PlanningmoduleComponent;
  let fixture: ComponentFixture<PlanningmoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanningmoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
