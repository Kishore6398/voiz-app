import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepaidrechargeComponent } from './prepaidrecharge.component';

describe('PrepaidrechargeComponent', () => {
  let component: PrepaidrechargeComponent;
  let fixture: ComponentFixture<PrepaidrechargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrepaidrechargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepaidrechargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
