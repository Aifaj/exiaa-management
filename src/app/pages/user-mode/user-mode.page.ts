import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-user-mode',
  templateUrl: './user-mode.page.html',
  styleUrls: ['./user-mode.page.scss'],
})
export class UserModePage implements OnInit {

  @Input() isEditMode: any;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  
}
