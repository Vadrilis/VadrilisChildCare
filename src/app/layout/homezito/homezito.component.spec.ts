import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomezitoComponent } from './homezito.component';

describe('HomezitoComponent', () => {
  let component: HomezitoComponent;
  let fixture: ComponentFixture<HomezitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomezitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomezitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
