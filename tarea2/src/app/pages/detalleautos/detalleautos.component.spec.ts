import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleautosComponent } from './detalleautos.component';

describe('DetalleautosComponent', () => {
  let component: DetalleautosComponent;
  let fixture: ComponentFixture<DetalleautosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleautosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleautosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
