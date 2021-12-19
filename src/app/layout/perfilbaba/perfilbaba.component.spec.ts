import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilbabaComponent } from './perfilbaba.component';

describe('PerfilbabaComponent', () => {
  let component: PerfilbabaComponent;
  let fixture: ComponentFixture<PerfilbabaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilbabaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilbabaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
