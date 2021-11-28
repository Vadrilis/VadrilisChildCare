import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadrzitoComponent } from './padrzito.component';

describe('PadrzitoComponent', () => {
  let component: PadrzitoComponent;
  let fixture: ComponentFixture<PadrzitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadrzitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PadrzitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
