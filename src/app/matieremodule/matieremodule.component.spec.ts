import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatieremoduleComponent } from './matieremodule.component';

describe('MatieremoduleComponent', () => {
  let component: MatieremoduleComponent;
  let fixture: ComponentFixture<MatieremoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatieremoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatieremoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
