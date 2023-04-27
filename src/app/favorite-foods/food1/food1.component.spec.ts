import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Food1Component } from './food1.component';

describe('Food1Component', () => {
  let component: Food1Component;
  let fixture: ComponentFixture<Food1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Food1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Food1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
