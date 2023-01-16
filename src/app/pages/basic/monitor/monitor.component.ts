import { Component, OnInit } from '@angular/core';
import { Store, ActionsSubject } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Increment, Decrement, Reset, Status, Login } from 'src/store/action';
import { selectFeatureCount, selectFeatureStatusList } from 'src/store/selector';
import moment from 'moment';
@Component({
    selector: 'app-component-overview',
    templateUrl: './monitor.component.html',
    styleUrls: ['./monitor.component.less']
})
export class Monitor implements OnInit {
    count$: Observable<number>;
    fontColor = 'blue';
    constructor(private store: Store, private actionsSubject: ActionsSubject) {
        this.count$ = store.select(selectFeatureCount);

        store.select(selectFeatureStatusList).subscribe(value => {
            console.log(value);
            console.log(JSON.stringify(value).length);
        });
        actionsSubject.subscribe(action => {
            console.log(JSON.stringify({}).length);
            console.log(action);
        });
    }

    ngOnInit() {
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
