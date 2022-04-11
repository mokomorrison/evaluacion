import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPropietarioComponent } from './listar-propietario.component';

describe('ListarPropietarioComponent', () => {
  let component: ListarPropietarioComponent;
  let fixture: ComponentFixture<ListarPropietarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPropietarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPropietarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
