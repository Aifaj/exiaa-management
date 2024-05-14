import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SchoolGalleryPage } from './school-gallery.page';

describe('SchoolGalleryPage', () => {
  let component: SchoolGalleryPage;
  let fixture: ComponentFixture<SchoolGalleryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SchoolGalleryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
