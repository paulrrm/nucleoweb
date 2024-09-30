import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDeAutoComponent } from './detalle-de-auto.component';

describe('DetalleDeAutoComponent', () => {
  let component: DetalleDeAutoComponent;
  let fixture: ComponentFixture<DetalleDeAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleDeAutoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleDeAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
