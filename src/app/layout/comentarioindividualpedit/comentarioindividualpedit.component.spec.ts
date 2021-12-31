import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioindividualpeditComponent } from './comentarioindividualpedit.component';

describe('ComentarioindividualpeditComponent', () => {
  let component: ComentarioindividualpeditComponent;
  let fixture: ComponentFixture<ComentarioindividualpeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentarioindividualpeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentarioindividualpeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
