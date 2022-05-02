import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less'],
})
export class ModalComponent implements OnInit {
  @Input() modalisVisible: boolean = false;
  @Input() descripe: string = '查看';
  @Output() modalhandleCancel = new EventEmitter<boolean>();
  @Output() modalhandleOk = new EventEmitter<boolean>();
  constructor() {}
  handleCancel(status: boolean) {
    this.modalhandleCancel.emit(status);
  }
  handleOk(status: boolean) {
    this.modalhandleOk.emit(status);
  }
  ngOnInit() {}
}
