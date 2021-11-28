import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartezitaComponent } from './partezita.component';

describe('PartezitaComponent', () => {
  let component: PartezitaComponent;
  let fixture: ComponentFixture<PartezitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartezitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartezitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
