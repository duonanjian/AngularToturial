import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  OnDestroy,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Login, Increment, Decrement, Reset } from 'src/store/action';
import { selectFeatureCount } from 'src/store/selector';
@Component({
  selector: 'app-component-overview',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.less'],
})
export class Monitor implements OnInit, OnChanges, OnDestroy {
  count$: Observable<number>;
  title: any = 'overviewtitle';
  styleset: any = 'color:green';
  styleset2: any = 'font-size:40px';
  timeID: any;
  secondclass: string = 'secondclass';
  thirdclass: string = 'thirdclass';
  myStyle: any;
  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select(selectFeatureCount);
    console.log(this.count$);
  }
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
    this.store.dispatch(Increment());
    this.store.dispatch(Login({ username: 'test', password: 12345 }));

    this.myss = 'zhoufdei';
    console.log(this.myss);
    this.myStyle = {
      backgroundColor: 'red',
    };
  }
  ngAfterViewInit() {
    this.timeID = setInterval(() => {
      this.title = new Date();
    }, 1000);
  }
  DecrementCount() {
    this.store.dispatch(Decrement());
  }
  ResetCount() {
    this.store.dispatch(Reset());
  }
  ngOnChanges(changes: SimpleChanges): void {}
  ngOnDestroy(): void {
    clearInterval(this.timeID);
  }
}
