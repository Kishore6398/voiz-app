import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Submit2Component } from './submit2.component';

describe('Submit2Component', () => {
  let component: Submit2Component;
  let fixture: ComponentFixture<Submit2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Submit2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Submit2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
