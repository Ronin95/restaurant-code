import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmericanBurgerComponent } from './american-burger.component';

describe('AmericanBurgerComponent', () => {
  let component: AmericanBurgerComponent;
  let fixture: ComponentFixture<AmericanBurgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmericanBurgerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmericanBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
