import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-overview',
  templateUrl: './component-overview.component.html',
  styleUrls: ['./component-overview.component.less'],
})
export class ComponentOverviewComponent {
  title: any = 'overviewtitle';
  styleset: any = 'color:green';
  styleset2: any = 'font-size:40px';
  @Input() myname: any = '';
  ngAfterViewInit() {
    setInterval(() => {
      this.title = Date.now();
    }, 1000);
  }
}
