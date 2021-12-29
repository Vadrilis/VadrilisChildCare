import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemComentarioComponent } from './listagem-comentario.component';

describe('ListagemComentarioComponent', () => {
  let component: ListagemComentarioComponent;
  let fixture: ComponentFixture<ListagemComentarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemComentarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
