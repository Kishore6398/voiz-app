import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Submit3Component } from './submit3.component';

describe('Submit3Component', () => {
  let component: Submit3Component;
  let fixture: ComponentFixture<Submit3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Submit3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Submit3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
