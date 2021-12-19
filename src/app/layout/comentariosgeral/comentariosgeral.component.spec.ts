import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariosgeralComponent } from './comentariosgeral.component';

describe('ComentariosgeralComponent', () => {
  let component: ComentariosgeralComponent;
  let fixture: ComponentFixture<ComentariosgeralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentariosgeralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentariosgeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
