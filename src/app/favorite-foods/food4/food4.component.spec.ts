import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Food4Component } from './food4.component';

describe('Food4Component', () => {
  let component: Food4Component;
  let fixture: ComponentFixture<Food4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Food4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Food4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
