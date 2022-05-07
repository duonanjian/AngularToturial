import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';

// @Injectable({
//   providedIn: 'root',
// })
export class GetIDService {
  private serviceID: string;
  constructor() {
    this.serviceID = UUID.UUID();
  }
  public get servID(): string {
    return this.serviceID;
  }
}
