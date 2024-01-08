import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEstructuraComponent } from './gestion-estructura.component';

describe('GestionEstructuraComponent', () => {
  let component: GestionEstructuraComponent;
  let fixture: ComponentFixture<GestionEstructuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionEstructuraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionEstructuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
