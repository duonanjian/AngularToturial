import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workplace',
  templateUrl: './workplace.component.html',
  styleUrls: ['./workplace.component.less'],
})
export class WorkplaceComponent implements OnInit {
  descripe: string = '查看';
  modalisVisible: boolean = false;
  constructor() {}
  showModal(val: string) {
    this.modalisVisible = true;
    this.descripe = val;
  }
  fatherhandleCancel(val: boolean) {
    console.log(val);
    this.modalisVisible = false;
  }
  fatherhandleOk(val: boolean) {
    // this.modalisVisible = val;

    this.fatherhandleCancel(val);
  }
  ngOnInit(): void {}
}
