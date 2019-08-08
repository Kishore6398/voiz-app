import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pack1Component } from './pack1.component';

describe('Pack1Component', () => {
  let component: Pack1Component;
  let fixture: ComponentFixture<Pack1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pack1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pack1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
