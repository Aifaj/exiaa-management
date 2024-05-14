import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
})
export class LanguagePage implements OnInit {

  isLanguageSelected = true;
  //selectedlanguage = true;

    menu:any = [
    {
      "menu_id":"1",
      "image" : "ic_quiz",
      "title" : "play Quiz",
    },
    {
      "menu_id":"2",
      "image" : "ic_assignment",
      "title" : "Assignment",
    },
    {
      "menu_id":"3",
      "image" : "ic_holiday",
      "title" : "School Holiday",
    },
    {
      "menu_id":"4",
      "image" : "ic_calendra",
      "title" : "Time Table",
    },
    {
      "menu_id":"5",
      "image" : "ic_results",
      "title" : "Result",
    },
    {
      "menu_id":"6",
      "image" : "ic_date_sheet",
      "title" : "Data Sheet",
    },
    {
      "menu_id":"7",
      "image" : "ic_doubts",
      "title" : "Ask Doubts",
    },
    {
      "menu_id":"8",
      "image" : "ic_gallery",
      "title" : "School Gallery",
    },
    {
      "menu_id":"9",
      "image" : "ic_leave",
      "title" : "Leave Application",
    },
    {
      "menu_id":"10",
      "image" : "ic_password",
      "title" : "Change Password",
    },
    {
      "menu_id":"11",
      "image" : "ic_event",
      "title" : "Events",
    },
    {
      "menu_id":"12",
      "image" : "ic_logout",
      "title" : "Logout",
    },
  ]
  constructor() { }

  ngOnInit() {
  }

  select(){
       this.isLanguageSelected = false;
      // this.selectedlanguage = true;
  }

  // selected(){
  //   this.selectedlanguage = true;
  //   this.selcetlanguage = false;
  // }


}
