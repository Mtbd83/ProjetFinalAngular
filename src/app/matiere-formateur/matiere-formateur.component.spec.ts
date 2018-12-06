import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatiereFormateurComponent } from './matiere-formateur.component';

describe('MatiereFormateurComponent', () => {
  let component: MatiereFormateurComponent;
  let fixture: ComponentFixture<MatiereFormateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatiereFormateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatiereFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
