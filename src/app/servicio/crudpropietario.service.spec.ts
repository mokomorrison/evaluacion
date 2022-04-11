import { TestBed } from '@angular/core/testing';

import { CrudpropietarioService } from './crudpropietario.service';

describe('CrudpropietarioService', () => {
  let service: CrudpropietarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudpropietarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
