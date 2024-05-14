import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-school-gallery',
  templateUrl: './school-gallery.page.html',
  styleUrls: ['./school-gallery.page.scss'],
})
export class SchoolGalleryPage implements OnInit {

  images = [
    '1.png','2.png','3.png','4.png','5.png'
  ]

  constructor() { }

  ngOnInit() {
  }

}
