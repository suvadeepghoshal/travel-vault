import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburgerCmpComponent } from './hamburger-cmp.component';

describe('HamburgerCmpComponent', () => {
  let component: HamburgerCmpComponent;
  let fixture: ComponentFixture<HamburgerCmpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HamburgerCmpComponent]
    });
    fixture = TestBed.createComponent(HamburgerCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
