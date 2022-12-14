/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SaludoComponent } from './Saludo.component';

describe('SaludoComponent', () => {
  let component: SaludoComponent;
  let fixture: ComponentFixture<SaludoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaludoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaludoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
