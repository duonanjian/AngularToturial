import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {  Increment, Decrement, Reset } from 'src/store/action';
import { selectFeatureCount } from 'src/store/selector';
@Component({
  selector: 'app-component-overview',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.less'],
})
export class Monitor implements OnInit {
  count$: Observable<number>;
  constructor(private store: Store) {
    this.count$ = store.select(selectFeatureCount);
    console.log(this.store);
  }

  ngOnInit() {}

  IncrementCount() {
    this.store.dispatch(Increment());
  }
  DecrementCount() {
    this.store.dispatch(Decrement());
  }
  ResetCount() {
    this.store.dispatch(Reset());
  }
}
