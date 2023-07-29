import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavCmpComponent } from './side-nav-cmp.component';

describe('SideNavCmpComponent', () => {
  let component: SideNavCmpComponent;
  let fixture: ComponentFixture<SideNavCmpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideNavCmpComponent]
    });
    fixture = TestBed.createComponent(SideNavCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
