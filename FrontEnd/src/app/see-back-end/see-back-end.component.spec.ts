/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SeeBackEndComponent } from './see-back-end.component';

describe('SeeBackEndComponent', () => {
  let component: SeeBackEndComponent;
  let fixture: ComponentFixture<SeeBackEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeBackEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeBackEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
