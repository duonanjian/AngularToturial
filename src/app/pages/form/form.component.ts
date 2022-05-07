import { Component, OnInit } from '@angular/core';
import { Observable, Subject, BehaviorSubject, ReplaySubject } from 'rxjs';
import { of, interval } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less'],
})
export class FormComponent implements OnInit {
  // myObservable: Observable<any> = new Observable((observer) => {
  //   observer.next('第一次');
  //   setTimeout(() => {
  //     observer.next('第二次');
  //   }, 1000);
  // });
  constructor() {}
  // interval创建器的作用也是创建定时器的可观察对象类型的数据流
  // take操作符的作用是截取数据，这里表示仅截取前3个数值。
  // myObservable: Observable<any> = interval(1000).pipe(take(3));
  mySubject: ReplaySubject<any> = new ReplaySubject(); // 定义取最后m次的值
  ngOnInit(): void {
    this.mySubject.subscribe((value) => console.log('A：' + value)); // 全程收到值

    this.mySubject.next(0);
    this.mySubject.next(1);
    this.mySubject.next(2);

    this.mySubject.subscribe((value) => console.log('B：' + value)); // 收到最后m次的值
    setTimeout(() => {
      this.mySubject.subscribe((value) => console.log('C：' + value)); // 1s后订阅，收到最后m次的值
    }, 1000);
  }
  // A：0
  // A：1
  // A：2
  // B：1
  // B：2
  // C：1
  // C：2
}
