import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrobabaComponent } from './cadastrobaba.component';

describe('CadastrobabaComponent', () => {
  let component: CadastrobabaComponent;
  let fixture: ComponentFixture<CadastrobabaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrobabaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrobabaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
