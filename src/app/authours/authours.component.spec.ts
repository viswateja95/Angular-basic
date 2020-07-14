import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthoursComponent } from './authours.component';

describe('AuthoursComponent', () => {
  let component: AuthoursComponent;
  let fixture: ComponentFixture<AuthoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
