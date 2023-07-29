import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCmpComponent } from './footer-cmp.component';

describe('FooterCmpComponent', () => {
  let component: FooterCmpComponent;
  let fixture: ComponentFixture<FooterCmpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterCmpComponent]
    });
    fixture = TestBed.createComponent(FooterCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
