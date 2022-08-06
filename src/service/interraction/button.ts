import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private messageSource = new BehaviorSubject('default message');
  messagSource = new Subject();
  // currentMessage = this.messageSource.asObservable();

  constructor() {}

  changeMessage(message: string) {
    this.messagSource.next(message);
  }
}
