import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {

  result:any = [
    {
      subject: 'English',
      totalmarks: 100,
      marksGot: '87 - A'
    },
    {
      subject: 'Hindi',
      totalmarks: 100,
      marksGot: '85 - A'
    },
    {
      subject: 'Marathi',
      totalmarks: 100,
      marksGot: '95 - A'
    },
    {
      subject: 'Math',
      totalmarks: 100,
      marksGot: '88 - B'
    },
    {
      subject: 'Science',
      totalmarks: 100,
      marksGot: '77 - B'
    },

  ];
  constructor() { }

  ngOnInit() {

  }

}
