import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosdetallesComponent } from './productosdetalles.component';

describe('ProductosdetallesComponent', () => {
  let component: ProductosdetallesComponent;
  let fixture: ComponentFixture<ProductosdetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductosdetallesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosdetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
