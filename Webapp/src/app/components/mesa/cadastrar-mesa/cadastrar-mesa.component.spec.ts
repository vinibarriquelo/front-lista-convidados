import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarMesaComponent } from './cadastrar-mesa.component';

describe('CadastrarMesaComponent', () => {
  let component: CadastrarMesaComponent;
  let fixture: ComponentFixture<CadastrarMesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarMesaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
