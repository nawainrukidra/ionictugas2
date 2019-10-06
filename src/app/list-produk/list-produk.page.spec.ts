import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProdukPage } from './list-produk.page';

describe('ListProdukPage', () => {
  let component: ListProdukPage;
  let fixture: ComponentFixture<ListProdukPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProdukPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProdukPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
