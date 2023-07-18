import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaEmpresaModalComponent } from './nueva-empresa-modal.component';

describe('NuevaEmpresaModalComponent', () => {
  let component: NuevaEmpresaModalComponent;
  let fixture: ComponentFixture<NuevaEmpresaModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevaEmpresaModalComponent]
    });
    fixture = TestBed.createComponent(NuevaEmpresaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
