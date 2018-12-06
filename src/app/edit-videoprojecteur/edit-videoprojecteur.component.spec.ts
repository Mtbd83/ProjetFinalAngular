import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVideoprojecteurComponent } from './edit-videoprojecteur.component';

describe('EditVideoprojecteurComponent', () => {
  let component: EditVideoprojecteurComponent;
  let fixture: ComponentFixture<EditVideoprojecteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditVideoprojecteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVideoprojecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
