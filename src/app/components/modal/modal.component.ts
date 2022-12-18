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
  SimpleChanges,
} from '@angular/core';
import { GetIDService } from 'src/service/getID/getID.service';
import { BaseService } from 'src/service/testService/baseService';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less'],
  providers: [GetIDService],
})
// DoCheck,
// OnChanges,
// AfterContentChecked,
// AfterViewChecked,
export class ModalComponent implements OnInit, OnChanges {
  @Input() modalWidth: number = 500;
  @Input() modalisVisible: boolean = false;
  @Input() descripe: string = '查看';
  @Input()
  set getsetcontent(val: any) {
    console.log(val, 'setset');
  }
  @Output() modalhandleCancel = new EventEmitter<boolean>();
  @Output() modalhandleOk = new EventEmitter<boolean>();
  constructor(
    public modalservice: GetIDService,
    public baseService: BaseService
  ) {}
  handleCancel(status: boolean) {
    this.modalhandleCancel.emit(status);
  }
  handleOk(status: boolean) {
    this.modalhandleOk.emit(status);
  }
  passvalue() {
    console.log('modal #modal');
  }

  // 生命周期
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes, '弹框组件 ngOnChanges');
  }

  ngOnInit() {
    console.log(this.modalservice.servID);
    console.log('弹框组件 ngOnInit');
  }
  // ngDoCheck() {
  //   console.log('弹框组件 ngDoCheck');
  // }
  // ngAfterContentInit() {
  //   console.log('弹框组件 ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('弹框组件 ngAfterContentChecked');
  // }
  // ngAfterViewInit() {
  //   console.log('弹框组件 ngAfterViewInit');
  // }
  // ngAfterViewChecked() {
  //   console.log('弹框组件 ngAfterViewChecked');
  // }
  // ngOnDestroy() {
  //   console.log('弹框组件 ngOnDestroy');
  // }
}
