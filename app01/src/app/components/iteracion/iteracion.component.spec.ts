import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IteracionComponent } from './iteracion.component';

describe('IteracionComponent', () => {
  let component: IteracionComponent;
  let fixture: ComponentFixture<IteracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IteracionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IteracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
