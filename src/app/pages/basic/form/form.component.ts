import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable, firstValueFrom, lastValueFrom, Subject, BehaviorSubject, ReplaySubject, from, fromEvent, repeat, timer } from 'rxjs';
import { of, interval } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import moment from 'moment';
import { DestroySubjectService } from 'src/service';
@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.less'],
    providers: [DestroySubjectService]
})
export class FormComponent implements OnInit, AfterViewInit {
    @ViewChild('appHighlight') appHighlight: any;
    data: any = {value:'12345'};
    datarange: any;
    constructor() {}
    async ngOnInit(): Promise<void> {
        const observaber = {
            next: (val: any) => console.log(val),
            error: (error: any) => console.log(error),
            complete: () => console.log('完成')
        };
        const from = 'Wed Aug 24 2022 20:11:43 GMT+0800';
        const end = 'Wed Aug 24 2022 20:11:43 GMT+0800';
        console.log(moment(from).diff(end));
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
    ngAfterViewInit(): void {
        console.log(this.appHighlight);
    }
    buttonshow(val: any) {
        alert(val);
    }
}
