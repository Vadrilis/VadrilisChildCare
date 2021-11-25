import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselzitoComponent } from './carouselzito.component';

describe('CarouselzitoComponent', () => {
  let component: CarouselzitoComponent;
  let fixture: ComponentFixture<CarouselzitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselzitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselzitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
