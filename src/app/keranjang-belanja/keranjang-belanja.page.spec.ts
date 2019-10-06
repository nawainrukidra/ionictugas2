import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeranjangBelanjaPage } from './keranjang-belanja.page';

describe('KeranjangBelanjaPage', () => {
  let component: KeranjangBelanjaPage;
  let fixture: ComponentFixture<KeranjangBelanjaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeranjangBelanjaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeranjangBelanjaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
