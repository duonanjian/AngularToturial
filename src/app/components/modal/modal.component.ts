import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  // DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';
import { ModalService } from './service/modal.service';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less'],
})
// DoCheck,
export class ModalComponent
  implements
    OnInit,
    OnChanges,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() modalisVisible: boolean = false;
  @Input() descripe: string = '查看';
  @Input() data: object = {};
  @Output() modalhandleCancel = new EventEmitter<boolean>();
  @Output() modalhandleOk = new EventEmitter<boolean>();
  constructor(public modalservice: ModalService) {
    console.log(this.modalservice);
  }
  handleCancel(status: boolean) {
    this.modalhandleCancel.emit(status);
  }
  handleOk(status: boolean) {
    this.modalhandleOk.emit(status);
  }

  // 生命周期
  ngOnChanges() {
    console.log('弹框组件 ngOnChanges');
    console.log(this.data);
  }
  ngOnInit() {
    console.log(this.modalservice);

    console.log('弹框组件 ngOnInit');
  }
  // ngDoCheck() {
  //   console.log('弹框组件 ngDoCheck');
  // }
  ngAfterContentInit() {
    console.log('弹框组件 ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('弹框组件 ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('弹框组件 ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('弹框组件 ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('弹框组件 ngOnDestroy');
  }
}
