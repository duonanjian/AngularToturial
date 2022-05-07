import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoreService implements OnInit {
  token: string | null = '';
  constructor() {
    this.token = sessionStorage.getItem('token');
  }
  getToken() {
    return this.token;
  }
  setToken(val: string) {
    this.token = val;
    sessionStorage.setItem('token', val);
  }
  ngOnInit() {}
}
