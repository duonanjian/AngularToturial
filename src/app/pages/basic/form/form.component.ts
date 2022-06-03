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
  public autho!: string;
  constructor() {
    this.autho = '123456';
  }
  mySubject: ReplaySubject<any> = new ReplaySubject(); // 定义取最后m次的值

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
  ngOnInit(): void {
    this.websocketFunction();
    console.log(this.autho);
    this.mySubject.subscribe((value) => console.log('A:' + value)); // 全程收到值
    this.mySubject.next(0);
    this.mySubject.next(1);
    this.mySubject.next(2);
    this.mySubject.subscribe((value) => console.log('B:' + value)); // 收到最后m次的值
    setTimeout(() => {
      this.mySubject.subscribe((value) => console.log('C:' + value)); // 1s后订阅，收到最后m次的值
    }, 1000);
  }
}
