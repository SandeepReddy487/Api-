import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Http3Component } from './http3.component';

describe('Http3Component', () => {
  let component: Http3Component;
  let fixture: ComponentFixture<Http3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Http3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Http3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
