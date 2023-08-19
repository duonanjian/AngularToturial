import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { GetIDService } from 'src/service/getID/getID.service';
import { getGlobalVariable } from 'src/utils/same-time-promise';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less'],
  // 每个组件生成一个独立的service
  providers: [GetIDService],
})
export class ButtonComponent implements OnInit {
  @Input() ButtonDescripe: string = '按钮';
  @Input() nzType: 'primary' | 'dashed' | 'link' | 'text' = 'primary';
  @Input() nzShape: 'circle' | 'round' = 'round';
  @Output() ButtonEvent = new EventEmitter();
  constructor(private getIDService: GetIDService) { }
  ngOnInit() {
    console.log(this.getIDService, 'button this.getIDService');
    this.getVariable()
  }
  ButtonClick() {
    this.ButtonEvent.emit('this is button emit');
  }
  async getVariable() {
    console.log('button');

    const data = await getGlobalVariable();
    if(data){
      console.log(data,'button');
    }
}
}
