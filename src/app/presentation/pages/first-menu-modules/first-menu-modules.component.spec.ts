import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstMenuModulesComponent } from './first-menu-modules.component';

describe('FirstMenuModulesComponent', () => {
  let component: FirstMenuModulesComponent;
  let fixture: ComponentFixture<FirstMenuModulesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstMenuModulesComponent]
    });
    fixture = TestBed.createComponent(FirstMenuModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
