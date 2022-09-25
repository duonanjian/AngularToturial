import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { GetIDService } from 'src/service/getID/getID.service';

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
  }
  ButtonClick() {
    this.ButtonEvent.emit('this is button emit');
  }
}
