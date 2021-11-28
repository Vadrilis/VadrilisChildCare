import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterzitoComponent } from './footerzito.component';

describe('FooterzitoComponent', () => {
  let component: FooterzitoComponent;
  let fixture: ComponentFixture<FooterzitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterzitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterzitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
