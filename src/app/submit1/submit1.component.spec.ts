import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Submit1Component } from './submit1.component';

describe('Submit1Component', () => {
  let component: Submit1Component;
  let fixture: ComponentFixture<Submit1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Submit1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Submit1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
