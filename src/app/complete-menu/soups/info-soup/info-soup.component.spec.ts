import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSoupComponent } from './info-soup.component';

describe('InfoSoupComponent', () => {
  let component: InfoSoupComponent;
  let fixture: ComponentFixture<InfoSoupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoSoupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoSoupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
