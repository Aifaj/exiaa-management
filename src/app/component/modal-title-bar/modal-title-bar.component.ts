import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-title-bar',
  templateUrl: './modal-title-bar.component.html',
  styleUrls: ['./modal-title-bar.component.scss'],
})
export class ModalTitleBarComponent  implements OnInit {

  @Input() title = '';
  @Input() showSaveButton = true;
  @Input() showCloseButton = true;
  @Output() saveEmitter: any = new EventEmitter();
  @Output() closeEmitter: any = new EventEmitter();


  constructor() { }

  ngOnInit() {}

  save() {
    this.saveEmitter.emit();
  }

  close() {
    this.closeEmitter.emit();
  }

}
