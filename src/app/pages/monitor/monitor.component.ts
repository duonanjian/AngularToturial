import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-overview',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.less'],
})
export class Monitor implements OnInit {
  title: any = 'overviewtitle';
  styleset: any = 'color:green';
  styleset2: any = 'font-size:40px';
  private myss: any = 'private';
  @Input() myname: any = '';

  ngOnInit() {
    console.log(this.title);
    this.myss = "zhoufdei"
    console.log(this.myss)
  }
  ngAfterViewInit() {
    setInterval(() => {
      this.title = new Date();
    }, 1000);
  }
}
