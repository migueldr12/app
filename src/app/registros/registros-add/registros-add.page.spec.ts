import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrosAddPage } from './registros-add.page';

describe('RegistrosAddPage', () => {
  let component: RegistrosAddPage;
  let fixture: ComponentFixture<RegistrosAddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistrosAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
