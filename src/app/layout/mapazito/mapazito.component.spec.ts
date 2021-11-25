import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapazitoComponent } from './mapazito.component';

describe('MapazitoComponent', () => {
  let component: MapazitoComponent;
  let fixture: ComponentFixture<MapazitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapazitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapazitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
