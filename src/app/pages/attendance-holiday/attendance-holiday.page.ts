import { Component, OnInit, ViewChild } from '@angular/core';
//import { CalendarComponent } from 'ionic2-calendar/calendar';
//import { CalendarMode } from 'ionic2-calendar';
//import { CalendarMode } from 'ionic2-calendar';
import { CalendarComponent, CalendarMode } from 'ionic2-calendar';




@Component({
  selector: 'app-attendance-holiday',
  templateUrl: './attendance-holiday.page.html',
  styleUrls: ['./attendance-holiday.page.scss'],
})
export class AttendanceHolidayPage implements OnInit {

  attendance =true;
  holiday =false; 

  allEvents = [];
  currentMonth:String;
  calendar = {
    mode: 'month' as CalendarMode,
    currentDate: new Date(),
  };

  newEvent = {
    title: '',
    description: '',
    startTime: '',
    endTime: '',
    img: '',
  }

  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor() { }

  ngOnInit() {
  }

  viewattendance()
  {
    this.attendance = true;
    this.holiday = false;
  }

  viewholiday()
  {
    this.holiday = true;
    this.attendance = false;
  }

  onViewTitleChanged(title:string)
  {
      this.currentMonth = title;
  }

  onEventSelected(ev)
  {
       this.newEvent= ev;
  }

  Back()
  {
     this.myCal.slidePrev();
  }

  Next()
  {
     this.myCal.slideNext();
  }

}
