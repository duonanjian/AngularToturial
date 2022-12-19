import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  
  private storageBehaviorSubject$: BehaviorSubject<any> = new BehaviorSubject([])
  storageBehaviorSubjectObservable$: Observable<any> = this.storageBehaviorSubject$.asObservable()

  execute() {
    this.storageBehaviorSubject$.next([1, 2, 3])
  }

  token: string | null = '';
  constructor() {
    this.token = localStorage.getItem('token');
  }
  get Token(): any {
    return this.token;
  }
  set Token(val: string) {
    this.token = val;
    localStorage.setItem('token', val);
  }
  removeToken() {
    localStorage.removeItem('token');
  }
  ngOnInit() { }
}
