import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapcontactoComponent } from './mapcontacto.component';

describe('MapcontactoComponent', () => {
  let component: MapcontactoComponent;
  let fixture: ComponentFixture<MapcontactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapcontactoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapcontactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
