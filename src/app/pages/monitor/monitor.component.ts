import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  OnDestroy,
} from '@angular/core';
import { BrowserTransferStateModule } from '@angular/platform-browser';

@Component({
  selector: 'app-component-overview',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.less'],
})
export class Monitor implements OnInit, OnChanges, OnDestroy {
  title: any = 'overviewtitle';
  styleset: any = 'color:green';
  styleset2: any = 'font-size:40px';
  timeID: any;
  secondclass: string = 'secondclass';
  thirdclass: string = 'thirdclass';
  ngClassshow(type: number): any {
    switch (type) {
      case 1:
        return 'ng-fisrt ng-second';
        break;
      case 2:
        return ['ng-first', 'ng-second'];
        break;
      case 3:
        return { 'ng-first': true, 'ng-second': false };
        break;
    }
  }

  private myss: any = 'private';
  list = [1, 2, 3, 4];

  @Input() myname: any = '';

  ngOnInit() {
    console.log(this.title);
    this.myss = 'zhoufdei';
    console.log(this.myss);
  }
  ngOnChanges(changes: SimpleChanges): void {}
  ngAfterViewInit() {
    this.timeID = setInterval(() => {
      this.title = new Date();
    }, 1000);
  }
  ngOnDestroy(): void {
    clearInterval(this.timeID)
  }
}
