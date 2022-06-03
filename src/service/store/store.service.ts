import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  token: string | null = '';
  constructor() {
    this.token = localStorage.getItem('token');
    console.log(this.token);
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
  ngOnInit() {}
}
