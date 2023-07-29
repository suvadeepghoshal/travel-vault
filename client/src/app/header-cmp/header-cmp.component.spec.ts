import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCmpComponent } from './header-cmp.component';

describe('HeaderCmpComponent', () => {
  let component: HeaderCmpComponent;
  let fixture: ComponentFixture<HeaderCmpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderCmpComponent]
    });
    fixture = TestBed.createComponent(HeaderCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
