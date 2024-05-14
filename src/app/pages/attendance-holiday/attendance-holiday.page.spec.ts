import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AttendanceHolidayPage } from './attendance-holiday.page';

describe('AttendanceHolidayPage', () => {
  let component: AttendanceHolidayPage;
  let fixture: ComponentFixture<AttendanceHolidayPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AttendanceHolidayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
