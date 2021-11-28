import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemBabaComponent } from './listagem-baba.component';

describe('ListagemBabaComponent', () => {
  let component: ListagemBabaComponent;
  let fixture: ComponentFixture<ListagemBabaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemBabaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemBabaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
