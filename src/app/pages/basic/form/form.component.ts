import { Component, OnInit } from '@angular/core';
import {
  Observable,
  firstValueFrom,
  lastValueFrom,
  Subject,
  BehaviorSubject,
  ReplaySubject,
  from,
  fromEvent,
  repeat,
  timer,
} from 'rxjs';
import { of, interval } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less'],
})
export class FormComponent implements OnInit {
  public autho!: string;
  constructor() {
    this.autho = '123456';
  }

  websocketFunction() {
    const host = 'localhost:8002/';
    // 创建websocket连接
    const socket = new WebSocket('ws://' + host);
    // 如果建立连接
    socket.onopen = function () {
      console.log('websocket connect!');
      var data = JSON.stringify({ equipmentId: '12345' });
      socket.send(data);
    };
    // 监听接收数据
    socket.onmessage = function (msg) {
      console.log(msg);
      console.log('-->', msg.data);
      try {
      } catch (error) {
        console.log('error:', error);
      }
    };
    socket.onclose = function () {
      console.log('websocket close.');
    };

    socket.onerror = function () {
      console.log('websocket error:', event);
    };
  }
  async ngOnInit(): Promise<void> {
    const observaber = {
      next: (val: any) => console.log(val),
      error: (error: any) => console.log(error),
      complete: () => console.log('完成'),
    };
    // const createObservable = (observaber: any) => {
    //   let number = 1;
    //   const time = setInterval(() => {
    //     observaber.next(number++);
    //   }, 1000);
    //   return {
    //     unsubscribe: () => {
    //       clearInterval(time);
    //     },
    //   };
    // };
    // const myobservable = new Observable(createObservable);

    // const subscription = myobservable.subscribe(observaber);
    // console.log(subscription);
    // setTimeout(() => {
    //   subscription.unsubscribe();
    // }, 5000);

    // const last = await lastValueFrom(myobservable);

    // const first = await firstValueFrom(myobservable);
    // console.log(myobservable,first);
    // console.log(myobservable, last);

    // const fromObservable = from([1, 2, 3]);
    // fromObservable.subscribe(observaber);

    // const el = document.querySelectorAll('#top');
    // const fromevent = fromEvent(el, 'click');
    // fromevent.subscribe(observaber)

    // const ofObservable = from([1, 2, 3]).pipe(repeat(3));
    // ofObservable.subscribe(observaber);

    // const timerOb = timer(5000, 1000).pipe(map((x) => x + 10));
    // timerOb.subscribe(observaber);
  }

  buttonshow(val: any) {
    alert(val);
  }
}
