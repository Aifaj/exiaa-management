import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataSheetPage } from './data-sheet.page';

describe('DataSheetPage', () => {
  let component: DataSheetPage;
  let fixture: ComponentFixture<DataSheetPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DataSheetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
