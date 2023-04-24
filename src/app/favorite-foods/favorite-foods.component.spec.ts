import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteFoodsComponent } from './favorite-foods.component';

describe('FavoriteFoodsComponent', () => {
  let component: FavoriteFoodsComponent;
  let fixture: ComponentFixture<FavoriteFoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteFoodsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteFoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
