import { Component, OnInit } from '@angular/core';
import { Store, ActionsSubject } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Increment, Decrement, Reset, Status, Login } from 'src/store/action';
import { selectFeatureCount, selectFeatureStatusList } from 'src/store/selector';
import { Inject } from '@angular/core';
import { InjectionToken_Service,InjectionTokenService } from 'src/service/token/tokenService';

import moment from 'moment';

import { CdkDragDrop, moveItemInArray ,transferArrayItem} from '@angular/cdk/drag-drop';
@Component({
    selector: 'app-component-overview',
    templateUrl: './monitor.component.html',
    styleUrls: ['./monitor.component.less']
})
export class Monitor implements OnInit {
    count$: Observable<number>;
    fontColor = 'blue';
    constructor(private store: Store, private actionsSubject: ActionsSubject,@Inject(InjectionToken_Service) private myService: InjectionTokenService) {
        this.count$ = store.select(selectFeatureCount);

        store.select(selectFeatureStatusList).subscribe(value => {
            console.log(value);
            console.log(JSON.stringify(value).length);
        });
        actionsSubject.subscribe(action => {
            console.log(JSON.stringify({}).length);
            console.log(action);
        });
        this.count$.subscribe(value=>{
          console.log(value)
        })
    }

    tabs = [{ name: 'one' }, { name: 'two' }, { name: 'three' }];
    tabss = [{ name: '1' }, { name: '2' }, { name: '3' }]
    drop(event: CdkDragDrop<any[]>) {
        console.log(event);
        if (event.previousContainer === event.container) {
          moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
          transferArrayItem(
            event.previousContainer.data,
            event.container.data,
            event.previousIndex,
            event.currentIndex,
          );
        }
        const tag = document.querySelector('.ant-tabs-ink-bar');
        tag?.setAttribute('style', 'display:block');
        // moveItemInArray(this.tabs, event.previousIndex, event.currentIndex);
    }

    drg(event: any) {
        const tag = document.querySelector('.ant-tabs-ink-bar');
        tag?.setAttribute('style', 'display:none');
        console.log(event, tag);
    }

    ngOnInit() {
      console.log(this.myService)
        // setInterval(() => {
        //     this.store.dispatch(Status({ statusType: '1266666666666666666666666663', number: 12 }));
        // }, 5000);
    }

    IncrementCount() {
        this.store.dispatch(Increment());
        this.store.dispatch(Status({ statusType: '1266666666666666666666666663', number: 12 }));
    }
    DecrementCount() {
        this.store.dispatch(Decrement());
    }
    ResetCount() {
        this.store.dispatch(Reset());
    }
}
