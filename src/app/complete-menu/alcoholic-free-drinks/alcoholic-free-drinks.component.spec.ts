import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcoholicFreeDrinksComponent } from './alcoholic-free-drinks.component';

describe('AlcoholicFreeDrinksComponent', () => {
  let component: AlcoholicFreeDrinksComponent;
  let fixture: ComponentFixture<AlcoholicFreeDrinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlcoholicFreeDrinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlcoholicFreeDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
