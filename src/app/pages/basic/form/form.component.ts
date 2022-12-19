import { Component, OnInit } from '@angular/core';
import '../../../../../node_modules/jshint/dist/jshint.js';
import * as moment from 'moment';
import { StoreService, DestroySubjectService } from '../../../../service/index';
import { Subject, Subscription, takeUntil } from 'rxjs';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less'],
  providers: [DestroySubjectService]
})
export class FormComponent implements OnInit {
  title: string = '1'
  adf = [1, 2, 3, 4, 5]
  constructor(private storeService: StoreService, private destory$: DestroySubjectService) {
  }
  ngOnInit() {
    this.initSubscribe()
    const data = this.changeLastData(10)
    console.log(data);

  }
  initSubscribe() {
    this.storeService.storageBehaviorSubjectObservable$.pipe(takeUntil(this.destory$)).subscribe(res => {
      console.log(res);
    })
  }
  buttonshow() {
    this.storeService.execute()
  }

  //@ts-ignore
  changeLastData(num: number) {
    const last = this.adf.slice(-1)[0]
    console.log('00');

    if (num - last < 2) {

      return this.adf
    }
    this.adf.push(last + 2)
    return this.changeLastData(num)
  }


}
