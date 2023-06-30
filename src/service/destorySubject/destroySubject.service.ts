import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
// 继承 Subject 使 Service 创建实例时具有 Subject 的特性
export class DestroySubjectService extends Subject<void> implements OnInit, OnDestroy {
    ngOnInit() {
        console.log('service 启动');
    }
    ngOnDestroy() {
        console.log('service destory');
        this.next();
        this.complete();
    }
}
