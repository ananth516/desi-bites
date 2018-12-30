import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hello.ComponentComponent } from './hello.component.component';

describe('Hello.ComponentComponent', () => {
  let component: Hello.ComponentComponent;
  let fixture: ComponentFixture<Hello.ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hello.ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hello.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
