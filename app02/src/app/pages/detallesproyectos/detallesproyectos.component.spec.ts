import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesproyectosComponent } from './detallesproyectos.component';

describe('DetallesproyectosComponent', () => {
  let component: DetallesproyectosComponent;
  let fixture: ComponentFixture<DetallesproyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesproyectosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesproyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
